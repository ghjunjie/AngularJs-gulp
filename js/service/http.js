services.factory('http', function($http, $q, config, PostQueue,$state) {
	var apiUrl = config.hostUrl;

	var postTemp = function(path, params) {
		return getSig(path, params).then(function(newParam) {
			return _get(path, newParam);
		});
	};
	var postTemp = function(path, data) {
		return getSig(path, data).then(function(newParam) {
			return _post(path, newParam);
		});
	};
	var post = function(path, data, callback) {
		postTemp(path, data, callback).then(function(data) {
			if(data.code == -2){
				$state.go('/')
			}else if(data && data.code == 1 && data.responseBody) {
				if(data.responseBody.code == 1) {
					if(data.responseBody.data && data.responseBody.data.items && data.responseBody.data.items.length == 0) {
						layer.msg("没有数据")
					} else if(data.responseBody.data && data.responseBody.data.list && data.responseBody.data.list.length == 0) {
						layer.msg("没有数据")
					}
					callback(data.responseBody.data);
				} else {
//					layer.msg(data.responseBody.message || '请求失败')
				}
			} else {
//				layer.msg(data.message || '请求失败')
			}
		}, function(data) {
//			layer.msg(data.msg || '请求失败')
		})
	}

	function getSig(path, params) {
		var requestBody = {
			"requestBody": {
				"data": {}
			},
			"requestHead": {
				"appId": "",
				"appVersion": "",
				"channel": "",
				"configVersion": "",
				"deviceId": "",
				"ostype": "",
				"phoneModel": "",
				"phoneResolution": "",
				"systemVersion": "",
				"token": "",
				"validateTime": ""
			}
		}
		//		checkKey(whichPage);
		//		var apiPath = (path + '').indexOf('api') == -1 ? ('/api' + path) : path;
		var deferred = $q.defer();
		var resultString = "";
		//		var zhid = getZhid();
		params = params || {};
		//		if(whichPage == 'home') {
		//		params.token = localStorage.getItem("Token") || "";
		//		} else {
		//			params.token = getToken(zhid);
		//		}
		//		params.tokenZhid = zhid;
		//		params.tokenUserID = localStorage.getItem("ID");
		//		apiPath = apiPath.toLowerCase();
		//		resultString = (apiPath + sortParamToString(params, method)).toLowerCase();
		// console.log(resultString);
		//		params.sig = sha1(resultString);
		// console.log(params.sig);

		requestBody.requestBody.data = params;

		deferred.resolve(requestBody);
		return deferred.promise;
	}

	function cloneAndFilterNone(Obj) {
		var buf;
		if(Obj instanceof Array) {
			buf = []; //创建一个空的数组
			var i = Obj.length;
			while(i--) {
				buf[i] = cloneAndFilterNone(Obj[i]);
			}
			return buf;
		} else if(Obj instanceof Object) {
			buf = {}; //创建一个空对象
			for(var k in Obj) { //为这个对象添加新的属性
				buf[k] = cloneAndFilterNone(Obj[k]);
			}
			return buf;
		} else {
			if(Obj == 'undefined' || Obj == 'null' || Obj == 'NAN' || Obj == null) {
				return '';
			} else {
				return Obj;
			}
		}
	}
	var _get = function(path, params) {
		var deferred = $q.defer();
		// Loading.start(path);
		$http({
			method: 'GET',
			responseType: 'json',
			url: apiUrl + path,
			withCredentials: true,
			params: params
		}).then(function(response) {
			// console.log(response);

			deferred.resolve(response.data);

			// Loading.stop();
		}, function(response) {
			// console.log(response);
			deferred.reject({
				status: response.status,
				msg: response.statusText
			});
			// Loading.stop();
		});
		return deferred.promise;
	};
	var _post = function(path, data) {
		var deferred = $q.defer();

		if(!PostQueue.isInList(path)) {
			PostQueue.add(path);
			// Loading.start(path);
			$http({
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				},
				method: 'POST',
				responseType: 'json',
				withCredentials: true,
				url: apiUrl + path,
				data: cloneAndFilterNone(data)
			}).then(function(response) {
				PostQueue.pop(path);
				// Loading.stop();
				deferred.resolve(response.data);
			}, function(response) {
				PostQueue.pop(path);
				// Loading.stop();
				deferred.reject({
					status: response.status,
					msg: response.statusText
				});
			});
		} else {
			deferred.reject({
				status: "0001",
				msg: "请稍后再试！"
			});
		}
		return deferred.promise;
	};

	var all = function(taskList) {
		return $q.all(taskList);
	};
	return {
		post: post
	};
})
services.factory('PostQueue', function() {

	/*
	 *
	 * 限制post请求的多次调用：
	 * 将每次post请求的api存入postQueue队列，请求完成后将api从该队列中删除；
	 * 如果在请求时，发现该api已经在postQueue，则拒绝发起该次请求。
	 *
	 * */
	var list = [];

	return {
		add: function(api) {
			list.push(api);
		},
		pop: function(api) {
			var index = list.indexOf(api);

			if(index !== -1) {
				list.splice(index, 1);
			}
		},
		isInList: function(api) {
			return list.indexOf(api) !== -1;
		}
	};
})
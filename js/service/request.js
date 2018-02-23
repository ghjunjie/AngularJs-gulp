

services.factory('request',function($http,$q,config){
	var returnobj={};
	
	returnobj.post=function(url,params,callback){
		post(url,params).then(function(data){
			return callback(data);
		},function(errorData){
			return callback(errorData);
		});
	};
	returnobj.easypost=function(url,params,callback){
		easypost(url,params).then(function(data){
			return callback(data);
		},function(errorData){
			return callback(errorData);
		});
	};
	
	returnobj.get=function(url,params,callback){
		get(url,params).then(function(data){
			return callback(data);
		},function(errorData){
			return callback(errorData);
		});
//		return get(url,params);
	}
	function post(url,data){
		var deferred=$q.defer();
		$http({
			headers:{'Content-Type':'application/json; charset=UTF-8'},
			method:'POST',
			responseType:'json',
			withCredentials: true,
			url:config.hostUrl+url,
			data:data
		}).then(function(response){
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}
	function easypost(url,data){
		var deferred=$q.defer();
		$http({
			method:'POST',
			responseType:'json',
			url:config.hostUrl+url,
			withCredentials: true,
			params:data
		}).then(function(response){
			deferred.resolve(response.data);
		})
		return deferred.promise;
	}
	function get(url,data){
		var deffered=$q.defer();
		$http({
			method:'GET',
			url:config.hostUrl+url,
			withCredentials: true,
			params:data
		}).then(function(resp){
			deffered.resolve(resp.data);
		},function(resp){
			deffered.reject({status:resp.status,statusText:resp.statusText});
		})
		return deffered.promise;
	}
	return returnobj;
})









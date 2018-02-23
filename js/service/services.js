

services.factory('requestService',function($http,$q){
	var returnobj={};
	
	/*returnobj.post=function(url,params,callback){
		post(url,params).then(function(data){
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
			url:url,
			data:data
		}).then(function(response){
			deferred.resolve(response);
		}).then(function(resp){
			deferred.reject(resp);
		})
		return deferred.promise;
	}
	function get(url,data){
		var deffered=$q.defer();
		$http({
			method:'GET',
			url:url,
			params:data
		}).then(function(resp){
			deffered.resolve(resp.data);
		},function(resp){
			deffered.reject({status:resp.status,statusText:resp.statusText});
		})
		return deffered.promise;
	}*/
	return returnobj;
})










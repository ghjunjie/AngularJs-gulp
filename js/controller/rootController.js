controllers.controller('rootController', function($scope, $rootScope, $location, $state, menuConfig,$cookieStore,http) {
	$scope.ggg = 'dd1dd';
	//	$scope.munuList=menuConfig.list;
	$scope.munuList = menuConfig.list;
	$scope.childMenu = [];
	$scope.onClickRootMenu = function(menuAlias) {
		angular.forEach($scope.munuList, function(data, index, array) {
			if(data.alias == menuAlias) {
				$scope.childMenu = data;
//				$scope.munuList[index].actived = true;
				//				$location.path('/feitai/' + data.alias + '/' + data.list[0].url);
				$state.go('feitai.' + data.alias + '/' + data.list[0].url);
			} else {
//				$scope.munuList[index].actived = false;
			}
		});
	}
	function init(){//刷新时调用
		try {
			var hash = location.hash;
			if(location.hash){
				$location.path(hash.split('#')[1]);
			}
		} catch(e) {}
	}
	init();
	$scope.$on('$locationChangeStart', function(event, next, current) {
		try {
//			if($cookieStore.get('')){
//				
//			}
			
			var hash = next.split("#")[1].split("?")[0];
			if(hash == "/feitai") {
				$state.go('feitai.RiskControlManagement/totalWorkbench');//默认跳转页面
			} else {
				hashArr = hash.split('/');
				if(hashArr.length >= 4) {
					angular.forEach($scope.munuList, function(data, index, array) {
						if(data.alias == hashArr[2]) {
							$scope.childMenu = data;
							$scope.munuList[index].actived = true;
							angular.forEach(data.list, function(dataChild, indexChild, arrayChild) {
								if(hashArr[3]==dataChild.url){
									$scope.childMenu.list[indexChild].actived=true;
								}else{
									$scope.childMenu.list[indexChild].actived=false;
								}
							})
						}else{
							$scope.munuList[index].actived = false;
						}
					});
				}
			}
		} catch(e) {}
	});
	
	//退出登录
	$scope.onExit=function(){
		$state.go('/');
		http.post('/backserver/manageruser/logout',{},function(data){
		})
	}
})




controllers.controller('loginController',function($scope,$state,request,$cookieStore){
	
	$scope.onLoginSubmit=function(){
		var param={
			account:$scope.account,
			password:$scope.password,
		}
		request.easypost('/backserver/manageruser/dologin',param,function(data){
			if(data&&data.code==1){
				$state.go('feitai');
				if($scope.autoLogin){
					$cookieStore.put('loginInfo',param,{
						expires:new Date(new Date().getTime() + 7*24*60*60*1000)
					})
				}else{
					$cookieStore.remove('loginInfo') 
				}
			}else{
				$scope.loginInfo=data?data.message||'登录失败':'登录失败';
			}
		})
	}
	//按键 
	 $scope.enterEvent = function(e) {
        var keycode = window.event?e.keyCode:e.which;
        if(keycode==13){
            $scope.onLoginSubmit();  
        }
    }
	 //保存的密码
	var loginInfo= $cookieStore.get('loginInfo');
	if(loginInfo&&loginInfo.account&&loginInfo.password){
		$scope.account=loginInfo.account;
		$scope.password=loginInfo.password; 
		$scope.autoLogin=true; 
	}
})
/*myApp.config(function ($httpProvider) {//处理302跳转
  $httpProvider.interceptors.push('authInterceptor');
});*/

routers.config(function($stateProvider,$urlRouterProvider,$locationProvider){
	 $locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/');
	
	$stateProvider.state(
		'/',{
			url:'/',//这个是显示在地址栏的url 可以不设置 （给刷新网页定位）
			views:{
				'root':{
					templateUrl:'./tpl/login.html',
					controller:'loginController'
				}
			}
		}
	).state(
		'/login',{
			url:'/login',//这个是显示在地址栏的url 可以不设置 （给刷新网页定位）
			views:{
				'root':{
					templateUrl:'./tpl/login.html',
					controller:'loginController'
				}
			}
		}
	).state(
		'/register',{
			url:'/register',//这个是显示在地址栏的url 可以不设置 （给刷新网页定位）
			views:{
				'root':{
					templateUrl:'./tpl/register.html',
				}
			}
		}
	).state(
		'feitai',{
			url:'/feitai',
			views:{
				'header@feitai':{
					templateUrl:'./tpl/header.html',
				},
				'sidenav@feitai':{
					templateUrl:'./tpl/sidenav.html',
					controller:'menuController'
				},
				'root':{
					templateUrl:'./tpl/master.html',
				}
				
			}
		}
	)
})
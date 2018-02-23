var services = angular.module('myservices', []);
var controllers = angular.module('mycontrollers', []);
var filters = angular.module('myfilters', []);
var directives = angular.module('mydirectives', []);
var routers = angular.module('myrouters', []);
var configs = angular.module('myconfigs', []);
var app = angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'myservices',
    'mycontrollers',
    'myfilters',
    'mydirectives',
    'myrouters',
    'myconfigs'
  ]);
configs.factory('config', function () {
  var obj = {
      test: {
        hostUrl: 'http://10.10.10.230:8080/api',
        ristCtrlUrl: 'http://10.10.10.230:8101'
      },
      yejunjie: {
        hostUrl: 'http://10.10.10.206:8080/api',
        ristCtrlUrl: '10.10.10.230:8101'
      },
      ansongtao: {
        hostUrl: 'http://10.10.10.201:9005/api',
        ristCtrlUrl: '10.10.10.230:8101'
      },
      linzeyang: {
        hostUrl: 'http://10.10.10.134:8081/api',
        ristCtrlUrl: '10.10.10.230:8101'
      },
      maizhitong: {
        hostUrl: 'http://10.10.10.202:8080/api',
        ristCtrlUrl: '10.10.10.230:8101'
      },
      dengfeng: {
        hostUrl: 'http://10.10.10.205:8080/api',
        ristCtrlUrl: '10.10.10.230:8101'
      },
      wuyuecuan: {
        hostUrl: 'http://10.10.10.213:8080/api',
        ristCtrlUrl: '10.10.10.230:8101'
      },
      product: {},
      online: {}
    };
  return obj.test;
});
configs.factory('menuConfig', function () {
  var menu = {
      list: [
        {
          'name': '\u8d22\u52a1\u4e2d\u5fc3',
          'alias': 'financialSystem',
          'list': [
            {
              'name': '\u653e\u6b3e\u5ba1\u6838',
              'url': 'loanReview'
            },
            {
              'name': '\u8fd8\u6b3e\u5217\u8868',
              'url': 'reimbursementList'
            }
          ]
        },
        {
          'name': '\u4ea7\u54c1\u914d\u7f6e\u4e2d\u5fc3',
          'alias': 'financialAllocationCenter',
          'list': [{
              'name': '\u4ea7\u54c1\u914d\u7f6e',
              'url': 'productConfiguration'
            }]
        },
        {
          'name': '\u77ed\u4fe1\u7ba1\u7406',
          'alias': 'SMSManagement',
          'list': [
            {
              'name': '\u77ed\u4fe1\u53d1\u9001',
              'url': 'textMessaging'
            },
            {
              'name': '\u5b9a\u65f6\u77ed\u4fe1',
              'url': 'timingMessages'
            }
          ]
        },
        {
          'name': '\u5ba1\u6838\u4e2d\u5fc3',
          'alias': 'RiskControlManagement',
          'list': [
            {
              'name': '\u603b\u5de5\u4f5c\u53f0',
              'url': 'totalWorkbench'
            },
            {
              'name': '\u4eba\u5ba1\u5217\u8868',
              'url': 'creditChecklist'
            }
          ]
        },
        {
          'name': '\u8ba2\u5355\u4e2d\u5fc3',
          'alias': 'orderCenter',
          'list': [
            {
              'name': '\u6388\u4fe1\u8ba2\u5355\u5217\u8868',
              'url': 'creditOrderList'
            },
            {
              'name': '\u63d0\u73b0\u8ba2\u5355',
              'url': 'withdrawOrder'
            }
          ]
        }
      ]
    };
  return menu;
});
filters.filter('yjjfilter', function () {
  return function (value, param) {
    var text = '';
    console.log('value:' + value + '        param:' + param);
    switch (value) {
    case 11:
      text = '<<\u8fc7\u6ee4\u540e\uff1a' + value + '\uff1a' + param;
      break;
    case 22:
      text = '      <<\u8fc7\u6ee4\u540e\uff1a' + value + '\uff1a' + param;
      break;
    case 33:
      text = 'ggggggggggg';
      break;
    case 44:
      text = '\u7b2c\u56db\u9879';
      break;
    default:
      text = '\u5c45\u7136\u6ca1\u6709\u5339\u914d\u5230';
      break;
    }
    return text;
  };
}).filter('orderType', function () {
  return function (type) {
    var typeName = '';
    if (type == 1) {
      typeName = '\u63d0\u73b0';
    } else if (type == 2) {
      typeName = '\u6388\u4fe1';
    }
    return typeName;
  };
}).filter('orderStatus', function () {
  return function (status) {
    var statusName = '';
    if (status == 1) {
      statusName = '\u4eba\u5ba1\u5f85\u5206\u914d';
    } else if (status == 2) {
      statusName = '\u4eba\u5ba1\u521d\u5ba1';
    } else if (status == 3) {
      statusName = '\u4eba\u5ba1\u590d\u5ba1';
    } else if (status == 4) {
      statusName = '\u4eba\u5ba1\u7ed3\u675f';
    } else if (status == 5) {
      statusName = '\u673a\u5668\u5ba1\u6838\u4e2d';
    } else if (status == 6) {
      statusName = '\u8ba2\u5355\u53d6\u6d88';
    } else if (status == 7) {
      statusName = '\u673a\u5ba1\u7ed3\u675f';
    }
    return statusName;
  };
}).filter('repayStatus', function () {
  //还款状态
  return function (status) {
    var statusName = '';
    if (status == 1) {
      statusName = '\u5df2\u8fd8\u6b3e';
    } else if (status == 2) {
      statusName = '\u903e\u671f';
    } else if (status == 3) {
      statusName = '\u5f85\u8fd8\u6b3e';
    }
    return statusName;
  };
}).filter('repayStatus2', function () {
  //还款状态2 还款状态:1正常已还  2逾期还款  3正常未还  4逾期未还
  return function (status) {
    var statusName = '';
    if (status == 1) {
      statusName = '\u6b63\u5e38\u5df2\u8fd8';
    } else if (status == 2) {
      statusName = '\u903e\u671f\u8fd8\u6b3e';
    } else if (status == 3) {
      statusName = '\u6b63\u5e38\u672a\u8fd8';
    } else if (status == 4) {
      statusName = '\u903e\u671f\u672a\u8fd8';
    }
    return statusName;
  };
}).filter('loanStatus', function () {
  //放款状态
  return function (status) {
    var statusName = '';
    if (status == 1) {
      statusName = '\u5f85\u653e\u6b3e';
    } else if (status == 2) {
      statusName = '\u653e\u6b3e\u4e2d';
    } else if (status == 3) {
      statusName = '\u653e\u6b3e\u6210\u529f';
    } else if (status == 4) {
      statusName = '\u653e\u6b3e\u5931\u8d25';
    }
    return statusName;
  };
}).filter('getJoinNetTime', [
  'dateFormat',
  function (dateFormat) {
    //入网时长计算
    return function (dateStr) {
      if (!dateStr) {
        return '';
      }
      var year = dateStr.substring(0, 4);
      var month = dateStr.substring(4, 6);
      var day = dateStr.substring(6, 8);
      var hour = dateStr.substring(8, 10);
      var min = dateStr.substring(10, 12);
      var second = dateStr.substring(12);
      var dateNow = new Date();
      var curYear = dateNow.getFullYear();
      var curMouth = dateNow.getMonth() + 1;
      var curDay = dateNow.getDate();
      var mouthLength = (curYear - year) * 12 + (curMouth - month + 1);
      //		var dateType = Date.now()-new Date(year+'-'+month+'-'+day+'  '+hour+':'+min+':'+second) ;
      return mouthLength + '\u4e2a\u6708';  //		return dateFormat.dateFormatConversion(new Date(dateType), 'yyyy-MM-dd');
    };
  }
]).filter('timeSecondFormat', function () {
  return function (secondStr) {
    var second = secondStr % 60;
    var min = (secondStr - second) / 60 % 60;
    var hour = (secondStr - second - min * 60) / 3600;
    return (hour >= 1 ? hour + '\u5c0f\u65f6' : '') + '' + (min >= 1 ? min + '\u5206\u949f' : '0\u5206\u949f') + (second + '\u79d2');
  };
}).filter('contactListPhoneRate', function () {
  return function (phones, contractList) {
    var rt = '';
    if (!phones || !contractList) {
      return '';
    }
    for (var i in phones) {
      for (var j in contractList) {
        if (contractList[j].phone == phones[i]) {
          rt = contractList[j].call_in_count_rate + contractList[j].call_out_count_rate;
        }
      }
    }
    if (rt > 0) {
      rt = (rt * 100).toFixed(3);
    }
    return rt > 0 ? rt + '%' : '';
  };
}).filter('contactListPhoneTag', function () {
  return function (phones, contractList) {
    var rt = '';
    if (!phones || !contractList) {
      return '';
    }
    for (var i in phones) {
      for (var j in contractList) {
        if (contractList[j].phone == phones[i] && contractList[j].tag) {
          rt = contractList[j].tag;
        }
      }
    }
    return rt;
  };
}).filter('delayStatus', function () {
  return function (delay_status) {
    var rt = '';
    switch (delay_status) {
    case 'M0':
      rt = '\u6b63\u5e38';
      break;
    case 'M1':
      rt = '\u6b20\u6b3eX-30\u5929';
      break;
    case 'M2':
      rt = '\u6b20\u6b3e31-60\u5929';
      break;
    case 'M3':
      rt = '\u6b20\u6b3e61-90\u5929';
      break;
    case 'M4':
      rt = '\u6b20\u6b3e90\u5929\u4ee5\u4e0a';
      break;
    default:
      break;
    }
    return rt;
  };
});
/*myApp.config(function ($httpProvider) {//处理302跳转
  $httpProvider.interceptors.push('authInterceptor');
});*/
routers.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('/', {
      url: '/',
      views: {
        'root': {
          templateUrl: './tpl/login.html',
          controller: 'loginController'
        }
      }
    }).state('/login', {
      url: '/login',
      views: {
        'root': {
          templateUrl: './tpl/login.html',
          controller: 'loginController'
        }
      }
    }).state('/register', {
      url: '/register',
      views: { 'root': { templateUrl: './tpl/register.html' } }
    }).state('feitai', {
      url: '/feitai',
      views: {
        'header@feitai': { templateUrl: './tpl/header.html' },
        'sidenav@feitai': {
          templateUrl: './tpl/sidenav.html',
          controller: 'menuController'
        },
        'root': { templateUrl: './tpl/master.html' }
      }
    });
  }
]);
/*
 * yejunjie 909725232@qq.com  2018/1/2
 */
controllers.controller('loginController', [
  '$scope',
  '$state',
  'request',
  '$cookieStore',
  function ($scope, $state, request, $cookieStore) {
    $scope.onLoginSubmit = function () {
      var param = {
          account: $scope.account,
          password: $scope.password
        };
      request.easypost('/backserver/manageruser/dologin', param, function (data) {
        if (data && data.code == 1) {
          $state.go('feitai');
          if ($scope.autoLogin) {
            $cookieStore.put('loginInfo', param, { expires: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000) });
          } else {
            $cookieStore.remove('loginInfo');
          }
        } else {
          $scope.loginInfo = data ? data.message || '\u767b\u5f55\u5931\u8d25' : '\u767b\u5f55\u5931\u8d25';
        }
      });
    };
    //按键 
    $scope.enterEvent = function (e) {
      var keycode = window.event ? e.keyCode : e.which;
      if (keycode == 13) {
        $scope.onLoginSubmit();
      }
    };
    //保存的密码
    var loginInfo = $cookieStore.get('loginInfo');
    if (loginInfo && loginInfo.account && loginInfo.password) {
      $scope.account = loginInfo.account;
      $scope.password = loginInfo.password;
      $scope.autoLogin = true;
    }
  }
]);
/*菜单*/
controllers.controller('menuController', [
  '$scope',
  '$rootScope',
  'menuConfig',
  function ($scope, $rootScope, menuConfig) {
    $scope.munuList = menuConfig.list;
  }
]);
controllers.controller('rootController', [
  '$scope',
  '$rootScope',
  '$location',
  '$state',
  'menuConfig',
  '$cookieStore',
  'http',
  function ($scope, $rootScope, $location, $state, menuConfig, $cookieStore, http) {
    $scope.ggg = 'dd1dd';
    //	$scope.munuList=menuConfig.list;
    $scope.munuList = menuConfig.list;
    $scope.childMenu = [];
    $scope.onClickRootMenu = function (menuAlias) {
      angular.forEach($scope.munuList, function (data, index, array) {
        if (data.alias == menuAlias) {
          $scope.childMenu = data;
          //				$scope.munuList[index].actived = true;
          //				$location.path('/feitai/' + data.alias + '/' + data.list[0].url);
          $state.go('feitai.' + data.alias + '/' + data.list[0].url);
        } else {
        }
      });
    };
    function init() {
      //刷新时调用
      try {
        var hash = location.hash;
        if (location.hash) {
          $location.path(hash.split('#')[1]);
        }
      } catch (e) {
      }
    }
    init();
    $scope.$on('$locationChangeStart', function (event, next, current) {
      try {
        //			if($cookieStore.get('')){
        //				
        //			}
        var hash = next.split('#')[1].split('?')[0];
        if (hash == '/feitai') {
          $state.go('feitai.RiskControlManagement/totalWorkbench');  //默认跳转页面
        } else {
          hashArr = hash.split('/');
          if (hashArr.length >= 4) {
            angular.forEach($scope.munuList, function (data, index, array) {
              if (data.alias == hashArr[2]) {
                $scope.childMenu = data;
                $scope.munuList[index].actived = true;
                angular.forEach(data.list, function (dataChild, indexChild, arrayChild) {
                  if (hashArr[3] == dataChild.url) {
                    $scope.childMenu.list[indexChild].actived = true;
                  } else {
                    $scope.childMenu.list[indexChild].actived = false;
                  }
                });
              } else {
                $scope.munuList[index].actived = false;
              }
            });
          }
        }
      } catch (e) {
      }
    });
    //退出登录
    $scope.onExit = function () {
      $state.go('/');
      http.post('/backserver/manageruser/logout', {}, function (data) {
      });
    };
  }
]);
directives.directive('addressDirective', function () {
  return {
    restrict: 'EA',
    scope: '=',
    link: function (scope, elem, attr) {
    }
  };
}).directive('ngreset', function () {
  return {
    restrict: 'ECA',
    scope: false,
    require: 'ngModel',
    link: function (scope, elem, attr, ngModel) {
      elem.bind('click', function () {
        console.log(ngModel.$viewValue);
      });
    }
  };
}).directive('stringToNumber', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (value) {
        return '' + value;
      });
      ngModel.$formatters.push(function (value) {
        return parseFloat(value);
      });
    }
  };
});
services.factory('ajax', [
  '$http',
  '$q',
  'config',
  'PostQueue',
  function ($http, $q, config, PostQueue) {
    var apiUrl = config.hostUrl;
    var get = function (path, params) {
      return getSig(path, params).then(function (newParam) {
        return _get(path, newParam);
      });
    };
    var post = function (path, data) {
      return getSig(path, data).then(function (newParam) {
        return _post(path, newParam);
      });
    };
    function getSig(path, params) {
      var requestBody = {
          'requestBody': { 'data': {} },
          'requestHead': {
            'appId': '',
            'appVersion': '',
            'channel': '',
            'configVersion': '',
            'deviceId': '',
            'ostype': '',
            'phoneModel': '',
            'phoneResolution': '',
            'systemVersion': '',
            'token': '',
            'validateTime': ''
          }
        };
      //		checkKey(whichPage);
      //		var apiPath = (path + '').indexOf('api') == -1 ? ('/api' + path) : path;
      var deferred = $q.defer();
      var resultString = '';
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
      if (Obj instanceof Array) {
        buf = [];
        //创建一个空的数组
        var i = Obj.length;
        while (i--) {
          buf[i] = cloneAndFilterNone(Obj[i]);
        }
        return buf;
      } else if (Obj instanceof Object) {
        buf = {};
        //创建一个空对象
        for (var k in Obj) {
          //为这个对象添加新的属性
          buf[k] = cloneAndFilterNone(Obj[k]);
        }
        return buf;
      } else {
        if (Obj == 'undefined' || Obj == 'null' || Obj == 'NAN' || Obj == null) {
          return '';
        } else {
          return Obj;
        }
      }
    }
    var _get = function (path, params) {
      var deferred = $q.defer();
      // Loading.start(path);
      $http({
        method: 'GET',
        responseType: 'json',
        url: apiUrl + path,
        withCredentials: true,
        params: params
      }).then(function (response) {
        // console.log(response);
        deferred.resolve(response.data);  // Loading.stop();
      }, function (response) {
        // console.log(response);
        deferred.reject({
          status: response.status,
          msg: response.statusText
        });  // Loading.stop();
      });
      return deferred.promise;
    };
    var _post = function (path, data, hostUrl) {
      var deferred = $q.defer();
      if (!PostQueue.isInList(path)) {
        PostQueue.add(path);
        // Loading.start(path);
        $http({
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          method: 'POST',
          responseType: 'json',
          withCredentials: true,
          url: (hostUrl || apiUrl) + path,
          data: cloneAndFilterNone(data)
        }).then(function (response) {
          PostQueue.pop(path);
          // Loading.stop();
          deferred.resolve(response.data);
        }, function (response) {
          PostQueue.pop(path);
          // Loading.stop();
          deferred.reject({
            status: response.status,
            msg: response.statusText
          });
        });
      } else {
        deferred.reject({
          status: '0001',
          msg: '\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01'
        });
      }
      return deferred.promise;
    };
    var all = function (taskList) {
      return $q.all(taskList);
    };
    return {
      get: get,
      _get: _get,
      post: post,
      _post: _post
    };
  }
]);
services.factory('PostQueue', function () {
  /*
	 *
	 * 限制post请求的多次调用：
	 * 将每次post请求的api存入postQueue队列，请求完成后将api从该队列中删除；
	 * 如果在请求时，发现该api已经在postQueue，则拒绝发起该次请求。
	 *
	 * */
  var list = [];
  return {
    add: function (api) {
      list.push(api);
    },
    pop: function (api) {
      var index = list.indexOf(api);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
    isInList: function (api) {
      return list.indexOf(api) !== -1;
    }
  };
});
/*通用*/
services.factory('common', [
  'http',
  function (http) {
    return {
      queryAuditStatus: function (callback) {
        //审核状态/订单状态
        http.post('/backserver/order/queryAuditStatus', {}, function (data) {
          callback(data);
        });
      },
      queryTrialResult: function (callback) {
        //机审结果/审核结果
        http.post('/backserver/order/queryTrialResult', {}, function (data) {
          callback(data);
        });
      },
      querychannels: function (callback) {
        //渠道列表查询/进件渠道
        http.post('/backserver/order/querychannels', {}, function (data) {
          callback(data);
        });
      }
    };
  }
]);
/*日期工具*/
/*
     时间格式的转换
     例如：yyyy-mm-dd  yyy/mm/dd
     */
services.factory('dateFormat', function () {
  Date.prototype.Format = function (fmt) {
    //author: meizz
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
      };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return fmt;
  };
  var dateFormatConversion = function (date, format) {
    return date.Format(format);
  };
  return { dateFormatConversion: dateFormatConversion };
}).factory('dateUtils', [
  'dateFormat',
  function (dateFormat) {
    /*日期工具*/
    var returnObj = {
        getTodayStr: function () {
          var curDate = new Date();
          return dateFormat.dateFormatConversion(curDate, 'yyyy-MM-dd');
        },
        getThisWeekFristDateStr: function () {
          var curDate = new Date();
          var weekNum = curDate.getDay();
          if (weekNum) {
            var timeMills = curDate.getTime() - weekNum * (1000 * 60 * 60 * 24);
            curDate = new Date(timeMills);
          }
          return dateFormat.dateFormatConversion(curDate, 'yyyy-MM-dd');
        },
        getThisMouthFristDateStr: function () {
          var curDate = new Date();
          var tempDate = new Date(curDate.getFullYear() + '/' + (curDate.getMonth() + 1) + '/01');
          return dateFormat.dateFormatConversion(tempDate, 'yyyy-MM-dd');
        }
      };
    return returnObj;
  }
]);
/*弹窗*/
services.factory('dialog', [
  '$uibModal',
  function ($uibModal) {
    return {
      open: function (templateUrl, controller, size, windowClass, controllerAs, resolve) {
        var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: templateUrl,
            controller: controller || '',
            controllerAs: controllerAs || '$ctrl',
            size: size || 'lg',
            windowClass: windowClass || '',
            resolve: resolve || {}
          });
      }
    };
  }
]);
services.factory('http', [
  '$http',
  '$q',
  'config',
  'PostQueue',
  '$state',
  function ($http, $q, config, PostQueue, $state) {
    var apiUrl = config.hostUrl;
    var postTemp = function (path, params) {
      return getSig(path, params).then(function (newParam) {
        return _get(path, newParam);
      });
    };
    var postTemp = function (path, data) {
      return getSig(path, data).then(function (newParam) {
        return _post(path, newParam);
      });
    };
    var post = function (path, data, callback) {
      postTemp(path, data, callback).then(function (data) {
        if (data.code == -2) {
          $state.go('/');
        } else if (data && data.code == 1 && data.responseBody) {
          if (data.responseBody.code == 1) {
            if (data.responseBody.data && data.responseBody.data.items && data.responseBody.data.items.length == 0) {
              layer.msg('\u6ca1\u6709\u6570\u636e');
            } else if (data.responseBody.data && data.responseBody.data.list && data.responseBody.data.list.length == 0) {
              layer.msg('\u6ca1\u6709\u6570\u636e');
            }
            callback(data.responseBody.data);
          } else {
          }
        } else {
        }
      }, function (data) {
      });
    };
    function getSig(path, params) {
      var requestBody = {
          'requestBody': { 'data': {} },
          'requestHead': {
            'appId': '',
            'appVersion': '',
            'channel': '',
            'configVersion': '',
            'deviceId': '',
            'ostype': '',
            'phoneModel': '',
            'phoneResolution': '',
            'systemVersion': '',
            'token': '',
            'validateTime': ''
          }
        };
      //		checkKey(whichPage);
      //		var apiPath = (path + '').indexOf('api') == -1 ? ('/api' + path) : path;
      var deferred = $q.defer();
      var resultString = '';
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
      if (Obj instanceof Array) {
        buf = [];
        //创建一个空的数组
        var i = Obj.length;
        while (i--) {
          buf[i] = cloneAndFilterNone(Obj[i]);
        }
        return buf;
      } else if (Obj instanceof Object) {
        buf = {};
        //创建一个空对象
        for (var k in Obj) {
          //为这个对象添加新的属性
          buf[k] = cloneAndFilterNone(Obj[k]);
        }
        return buf;
      } else {
        if (Obj == 'undefined' || Obj == 'null' || Obj == 'NAN' || Obj == null) {
          return '';
        } else {
          return Obj;
        }
      }
    }
    var _get = function (path, params) {
      var deferred = $q.defer();
      // Loading.start(path);
      $http({
        method: 'GET',
        responseType: 'json',
        url: apiUrl + path,
        withCredentials: true,
        params: params
      }).then(function (response) {
        // console.log(response);
        deferred.resolve(response.data);  // Loading.stop();
      }, function (response) {
        // console.log(response);
        deferred.reject({
          status: response.status,
          msg: response.statusText
        });  // Loading.stop();
      });
      return deferred.promise;
    };
    var _post = function (path, data) {
      var deferred = $q.defer();
      if (!PostQueue.isInList(path)) {
        PostQueue.add(path);
        // Loading.start(path);
        $http({
          headers: { 'Content-Type': 'application/json; charset=UTF-8' },
          method: 'POST',
          responseType: 'json',
          withCredentials: true,
          url: apiUrl + path,
          data: cloneAndFilterNone(data)
        }).then(function (response) {
          PostQueue.pop(path);
          // Loading.stop();
          deferred.resolve(response.data);
        }, function (response) {
          PostQueue.pop(path);
          // Loading.stop();
          deferred.reject({
            status: response.status,
            msg: response.statusText
          });
        });
      } else {
        deferred.reject({
          status: '0001',
          msg: '\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01'
        });
      }
      return deferred.promise;
    };
    var all = function (taskList) {
      return $q.all(taskList);
    };
    return { post: post };
  }
]);
services.factory('PostQueue', function () {
  /*
	 *
	 * 限制post请求的多次调用：
	 * 将每次post请求的api存入postQueue队列，请求完成后将api从该队列中删除；
	 * 如果在请求时，发现该api已经在postQueue，则拒绝发起该次请求。
	 *
	 * */
  var list = [];
  return {
    add: function (api) {
      list.push(api);
    },
    pop: function (api) {
      var index = list.indexOf(api);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
    isInList: function (api) {
      return list.indexOf(api) !== -1;
    }
  };
});
services.factory('md5', function () {
  /*
         * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
         * Digest Algorithm, as defined in RFC 1321.
         * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
         * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
         * Distributed under the BSD License
         * See http://pajhome.org.uk/crypt/md5 for more info.
         */
  /*
         * Configurable variables. You may need to tweak these to be compatible with
         * the server-side, but the defaults work in most cases.
         */
  var hexcase = 0;
  /* hex output format. 0 - lowercase; 1 - uppercase        */
  var b64pad = '';
  /* base-64 pad character. "=" for strict RFC compliance   */
  var chrsz = 8;
  /* bits per input character. 8 - ASCII; 16 - Unicode      */
  /*
         * These are the functions you'll usually want to call
         * They take string arguments and return either hex or base-64 encoded strings
         */
  function hex_md5(s) {
    return binl2hex(core_md5(str2binl(s), s.length * chrsz));
  }
  function b64_md5(s) {
    return binl2b64(core_md5(str2binl(s), s.length * chrsz));
  }
  function str_md5(s) {
    return binl2str(core_md5(str2binl(s), s.length * chrsz));
  }
  function hex_hmac_md5(key, data) {
    return binl2hex(core_hmac_md5(key, data));
  }
  function b64_hmac_md5(key, data) {
    return binl2b64(core_hmac_md5(key, data));
  }
  function str_hmac_md5(key, data) {
    return binl2str(core_hmac_md5(key, data));
  }
  /*
         * Perform a simple self-test to see if the VM is working
         */
  function md5_vm_test() {
    return hex_md5('abc') == '900150983cd24fb0d6963f7d28e17f72';
  }
  /*
         * Calculate the MD5 of an array of little-endian words, and a bit length
         */
  function core_md5(x, len) {
    /* append padding */
    x[len >> 5] |= 128 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (var i = 0; i < x.length; i += 16) {
      var olda = a;
      var oldb = b;
      var oldc = c;
      var oldd = d;
      a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
      d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
      a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
      c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
      d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safe_add(a, olda);
      b = safe_add(b, oldb);
      c = safe_add(c, oldc);
      d = safe_add(d, oldd);
    }
    return Array(a, b, c, d);
  }
  /*
         * These functions implement the four basic operations the algorithm uses.
         */
  function md5_cmn(q, a, b, x, s, t) {
    return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
  }
  function md5_ff(a, b, c, d, x, s, t) {
    return md5_cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function md5_gg(a, b, c, d, x, s, t) {
    return md5_cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function md5_hh(a, b, c, d, x, s, t) {
    return md5_cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function md5_ii(a, b, c, d, x, s, t) {
    return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  /*
         * Calculate the HMAC-MD5, of a key and some data
         */
  function core_hmac_md5(key, data) {
    var bkey = str2binl(key);
    if (bkey.length > 16)
      bkey = core_md5(bkey, key.length * chrsz);
    var ipad = Array(16), opad = Array(16);
    for (var i = 0; i < 16; i++) {
      ipad[i] = bkey[i] ^ 909522486;
      opad[i] = bkey[i] ^ 1549556828;
    }
    var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
    return core_md5(opad.concat(hash), 512 + 128);
  }
  /*
         * Add integers, wrapping at 2^32. This uses 16-bit operations internally
         * to work around bugs in some JS interpreters.
         */
  function safe_add(x, y) {
    var lsw = (x & 65535) + (y & 65535);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  }
  /*
         * Bitwise rotate a 32-bit number to the left.
         */
  function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }
  /*
         * Convert a string to an array of little-endian words
         * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
         */
  function str2binl(str) {
    var bin = Array();
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < str.length * chrsz; i += chrsz)
      bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << i % 32;
    return bin;
  }
  /*
         * Convert an array of little-endian words to a string
         */
  function binl2str(bin) {
    var str = '';
    var mask = (1 << chrsz) - 1;
    for (var i = 0; i < bin.length * 32; i += chrsz)
      str += String.fromCharCode(bin[i >> 5] >>> i % 32 & mask);
    return str;
  }
  /*
         * Convert an array of little-endian words to a hex string.
         */
  function binl2hex(binarray) {
    var hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef';
    var str = '';
    for (var i = 0; i < binarray.length * 4; i++) {
      str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 15) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 15);
    }
    return str;
  }
  /*
         * Convert an array of little-endian words to a base-64 string
         */
  function binl2b64(binarray) {
    var tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567\xb789+/';
    var str = '';
    for (var i = 0; i < binarray.length * 4; i += 3) {
      var triplet = (binarray[i >> 2] >> 8 * (i % 4) & 255) << 16 | (binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4) & 255) << 8 | binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4) & 255;
      for (var j = 0; j < 4; j++) {
        if (i * 8 + j * 6 > binarray.length * 32)
          str += b64pad;
        else
          str += tab.charAt(triplet >> 6 * (3 - j) & 63);
      }
    }
    return str;
  }
  return {
    hex_md5: hex_md5,
    str_md5: str_md5
  };
});
services.factory('request', [
  '$http',
  '$q',
  'config',
  function ($http, $q, config) {
    var returnobj = {};
    returnobj.post = function (url, params, callback) {
      post(url, params).then(function (data) {
        return callback(data);
      }, function (errorData) {
        return callback(errorData);
      });
    };
    returnobj.easypost = function (url, params, callback) {
      easypost(url, params).then(function (data) {
        return callback(data);
      }, function (errorData) {
        return callback(errorData);
      });
    };
    returnobj.get = function (url, params, callback) {
      get(url, params).then(function (data) {
        return callback(data);
      }, function (errorData) {
        return callback(errorData);
      });  //		return get(url,params);
    };
    function post(url, data) {
      var deferred = $q.defer();
      $http({
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        method: 'POST',
        responseType: 'json',
        withCredentials: true,
        url: config.hostUrl + url,
        data: data
      }).then(function (response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }
    function easypost(url, data) {
      var deferred = $q.defer();
      $http({
        method: 'POST',
        responseType: 'json',
        url: config.hostUrl + url,
        withCredentials: true,
        params: data
      }).then(function (response) {
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }
    function get(url, data) {
      var deffered = $q.defer();
      $http({
        method: 'GET',
        url: config.hostUrl + url,
        withCredentials: true,
        params: data
      }).then(function (resp) {
        deffered.resolve(resp.data);
      }, function (resp) {
        deffered.reject({
          status: resp.status,
          statusText: resp.statusText
        });
      });
      return deffered.promise;
    }
    return returnobj;
  }
]);
services.factory('requestService', [
  '$http',
  '$q',
  function ($http, $q) {
    var returnobj = {};
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
  }
]);
directives.directive('addressDirective', function() {
	return {
		restrict: 'EA',
		scope: '=',
		link: function(scope, elem, attr) {
			/*elem.bind('change',function(ev){
				console.log(ev.target.value);
				console.log(scope);
				if(attr.addresstype==1){
					for (var i in scope.datas.province) {
						if(scope.selectedProvice==scope.datas.province[i].id){
							scope.citys=scope.datas.province[i].city[0];
							
							if(scope.datas.province[i].city[0].id){
								scope.selectedcity=scope.datas.province[i].city[0].id;
								scope.countys=scope.datas.province[i].city[0].county;
								scope.selectedcounty=scope.datas.province[i].city[0].county[0].id;
							}else{
								scope.selectedcity=scope.datas.province[i].city[0][0].id;
								scope.countys=scope.datas.province[i].city[0][0].county;
								scope.selectedcounty=scope.datas.province[i].city[0][0].county[0].id;
							}
							
						}
					}
				}else if(attr.addresstype==2){
					
				}else{
					
				}
			})*/
		}
	}
}).directive('ngreset', function() {
	return {
		restrict: 'ECA',
		scope: false,
		require: 'ngModel',
		link: function(scope, elem, attr, ngModel) {
			elem.bind('click', function() {
				console.log(ngModel.$viewValue);
			})
		}
	}
}).directive('stringToNumber', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function(value) {
				return '' + value;
			});
			ngModel.$formatters.push(function(value) {
				return parseFloat(value);
			});
		}
	};
})
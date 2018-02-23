/*弹窗*/
services.factory('dialog', function($uibModal) {
	return {
		open: function(templateUrl,controller,size,windowClass,controllerAs,resolve) {
			var modalInstance = $uibModal.open({
				animation: true,
				ariaLabelledBy: 'modal-title',
				ariaDescribedBy: 'modal-body',
				templateUrl: templateUrl,
				controller: controller||'',
				controllerAs: controllerAs||'$ctrl',
				size: size||"lg",
				windowClass: windowClass||'',
				resolve:resolve||{}
				/*resolve: {
					items: function() {
						return $ctrl.items;
					}
				}*/
			});
		}
	}
})
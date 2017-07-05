(function () {
	'use strict';
	appModule

		.controller('DyfwController', function ($scope, $ionicModal, $timeout, $state) {
			$scope.selectFootTab = function (type) {
				$state.go('menu.' + type);
			}
		});
})();

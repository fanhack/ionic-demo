(function () {
	'use strict';
	appModule
		.controller('djdtController', DjdtController);

	/**
	 * 党建动态控制器
	 */
	function DjdtController($scope, $ionicModal, $timeout, $state) {
		$scope.footTabType = "djdt";
		$scope.headTabType = "xwrd";
		$scope.xwrdListEnd = false;
		$scope.xwrdList = [{
			bt: "新闻热点",
			fbdw: "南宁晚报",
			fbsj: "2017-07-05"
		}];
		$scope.selectHeadTab = function (type) {
			$scope.headTabType = type;
		}

		$scope.selectFootTab = function (type) {
			$state.go('menu.' + type);
		}
		$scope.doRefresh = function () {
			$scope.xwrdList = [{
				bt: "新闻热点1",
				fbdw: "南宁晚报",
				fbsj: "2017-07-05"
			}];
			$scope.$broadcast('scroll.refreshComplete');
		}
		$scope.count = 2;
		$scope.loadMoreXwrd = function () {
			$scope.xwrdList = $scope.xwrdList.concat([{
				bt: "新闻热点" + $scope.count++,
				fbdw: "南宁晚报",
				fbsj: "2017-07-05"
			}]);
			if ($scope.count > 30) {
				//数据已经全部加载完成,关闭加载
				$scope.xwrdListEnd = true;
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');//广播上拉完成事件，否则图标不消失
		}
	}
})();

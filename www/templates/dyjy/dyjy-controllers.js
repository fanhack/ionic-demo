(function () {
	'use strict';
	appModule
		.config(Router)
		.controller('shykListController', ShykListController)
		.controller('shykEditController', ShykEditController)
		.controller('dyjyController', DyjyController);

	/**
	 * 路由设置
	 */
	function Router($stateProvider) {
		$stateProvider
		//三会一课列表
			.state('shyklist', {
				cache: false,//不缓存页面，每次进入时会刷新页面
				url: '/shyk_list',
				controller: 'shykListController',
				templateUrl: 'templates/dyjy/shyk/shyk-list.html'
			})
			//三会一课编辑页面
			.state('shykedit', {
				cache: false,//不缓存页面，每次进入时会刷新页面
				url: '/shyk_edit',
				controller: 'shykEditController',
				templateUrl: 'templates/dyjy/shyk/shyk-edit.html'
			})
	}

	/**
	 * 党员教育控制器
	 */
	function DyjyController($scope, $state) {
		$scope.selectFootTab = function (type) {
			$state.go('menu.' + type);
		}
		$scope.gotoShykList = function () {
			$state.go('shyklist');
		}
	}

	/**
	 * 三会一课列表控制器
	 */
	function ShykListController($scope, $state) {
		$scope.shykListEnd = false;
		$scope.shykList = [{
			bt: "党小组学习",
			fbdw: "民主路社区党委第七党支部",
			fbsj: "2017-07-05"
		}];
		$scope.doRefresh = function () {
			$scope.shykList = [{
				bt: "党小组学习",
				fbdw: "民主路社区党委第七党支部",
				fbsj: "2017-07-05"
			}];
			$scope.shykListEnd = false;
			$scope.$broadcast('scroll.refreshComplete');
		}
		$scope.count = 2;
		$scope.loadMoreShyk = function () {
			$scope.shykList = $scope.shykList.concat([{
				bt: "党小组学习" + $scope.count++,
				fbdw: "民主路社区党委第七党支部",
				fbsj: "2017-07-05"
			}]);
			if ($scope.count > 4) {
				//数据已经全部加载完成,关闭加载
				$scope.shykListEnd = true;
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');//广播上拉完成事件，否则图标不消失
		}
	}

	/**
	 * 三会一课编辑页面控制器
	 */
	function ShykEditController($scope, $state) {

	}
})();

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
// 设置全局变量 appModule
var appModule = angular.module('starter', ['ionic']);
appModule
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
			//登录页
            .state('app', {
                url: '/app',
                templateUrl: 'templates/login.html',
                controller: 'AppCtrl'
            })
			//左滑功能
            .state('menu', {
                url: '/menu',
                abstract: true,
                templateUrl: 'templates/menu.html',
                controller: 'AppCtrl'
            })
			//党建动态
			.state('menu.djdt', {
				url: '/djdt',
				views: {
					'menuContent': {
						templateUrl: 'templates/djdt.html',
						controller: 'djdtController'
					}
				}
			})
			//党员教育
			.state('menu.dyjy', {
				url: '/dyjy',
				views: {
					'menuContent': {
						templateUrl: 'templates/dyjy/dyjy.html',
						controller: 'dyjyController'
					}
				}
			})
			//党员服务
			.state('menu.dyfw', {
				url: '/dyfw',
				views: {
					'menuContent': {
						templateUrl: 'templates/dyfw.html',
						controller: 'DyfwController'
					}
				}
			})

            .state('menu.search', {
                url: '/search',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/search.html'
                    }
                }
            })

            .state('menu.browse', {
                url: '/browse',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/browse.html'
                    }
                }
            })
            .state('menu.playlists', {
                url: '/playlists',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlists.html',
                        controller: 'PlaylistsCtrl'
                    }
                }
            })

            .state('menu.single', {
                url: '/playlists/:playlistId',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/playlist.html',
                        controller: 'PlaylistCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('app');
    });

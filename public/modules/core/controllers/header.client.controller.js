'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus', '$mdSidenav', '$state',
	function($scope, Authentication, Menus, $mdSidenav, $state) {
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$mdSidenav('left').close();
		});

		$scope.toggleList = function() {
      $mdSidenav('left').toggle();
    };

    $scope.navigate = function(routeName){
		  $state.go(routeName);
		};

    $scope.signout = function() {
      window.location.href = '/auth/signout';
    };
	}
]);
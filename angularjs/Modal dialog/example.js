var mainApp = angular.module("mainApp", ['ui.bootstrap']);

mainApp.controller('TableFilterController', function($scope, $modal, $log) {
  $scope.clickMe = function(p) {
    $scope.selected = p;
  }
 $scope.clickMe = function(p) {

    $modal.open({
      templateUrl: 'myModalContent.html',
      backdrop: true,
      windowClass: 'modal',
      controller: function($scope, $modalInstance, $log) {
        $scope.selected = p;
        $scope.submit = function() {
          $log.log('Submiting user info.');
          $log.log($scope.selected);
          $modalInstance.dismiss('cancel');
        }
        $scope.cancel = function() {
          $modalInstance.dismiss('cancel');
        };
      },
      resolve: {
        user: function() {
          return $scope.selected;
        }
      }
    });
  };
  $scope.isSelected = function(p) {
    return $scope.selected === p;
  }
  $scope.details = [{
      name: 'Mercury',
      age: 0.4,
      mass: 0.055,
      descp: 'it is the hottest planet',
    }, {
      name: 'Venus',
      age: 0.7,
      mass: 0.815
    }, {
      name: 'Earth',
      age: 1,
      mass: 1
    }, {
      name: 'Mars',
      age: 1.5,
      mass: 0.107
    }, {
      name: 'Ceres',
      age: 2.77,
      mass: 0.00015
    }, {
      name: 'Jupiter',
      age: 5.2,
      mass: 318
    }, {
      name: 'Saturn',
      age: 9.5,
      mass: 95
    }, {
      name: 'Uranus',
      age: 19.6,
      mass: 14
    }, {
      name: 'Neptune',
      age: 30,
      mass: 17
    }, {
      name: 'Pluto',
      age: 39,
      mass: 0.00218
    }, {
      name: 'Charon',
      age: 39,
      mass: 0.000254
    }



  ];

});

 
 
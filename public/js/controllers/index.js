angular.module('picasso.controllers.index', [])
  .controller('IndexController', ['$scope', '$http', '$state', '$location', 'Global', function($scope, $http, $state, $location, Global){

    $scope.header = Global.header;

  }]);

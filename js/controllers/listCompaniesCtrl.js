app.controller ('listCompaniesCtrl', function ($scope, $rootScope) {
   $scope.openPartners = function (index) {
      $scope.visible.partners = true;
      $scope.partners = $scope.lists[index].partners;
      $rootScope.$broadcast('add partners', $scope.partners)
   }
});
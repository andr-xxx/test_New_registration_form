app.controller ('listCompaniesCtrl', function ($scope) {
   $scope.openPartners = function (index) {
      $scope.visible.partners = true;
      $scope.partners = $scope.lists[index].partners;
   }
})
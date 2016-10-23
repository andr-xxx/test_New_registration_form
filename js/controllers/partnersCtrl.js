app.controller  ('partnersCtrl', function ($scope) {
   $scope.$on('add partners', function (event, data) {
      $scope.partners = data;
   });
   $scope.close = function () {
      $scope.visible.partners = false
   };
   $scope.sortParthners = '-value';
   $scope.changeSortByValue = function () {
      if ($scope.sortParthners === '-value') {
         $scope.sortParthners = 'value'
      } else {
         $scope.sortParthners = '-value'
      }
   };
   $scope.changeSortByName = function () {
      if ($scope.sortParthners === 'name') {
         $scope.sortParthners = '-name'
      } else {
         $scope.sortParthners = 'name'
      }
   }
});
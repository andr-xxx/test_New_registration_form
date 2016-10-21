app.controller('locationCtrl', function ($scope, googleGraph) {
   $scope.$on('dataLoaded', function () {
      $scope.countryPercent = {};
      (function percent() {
         for (var i = 0; i < $scope.lists.length; i++) {
            var obj = $scope.lists[i].location;
            if (!$scope.countryPercent[obj.name]) {
               $scope.countryPercent[obj.name] = 1;
            } else {
               ++$scope.countryPercent[obj.name];
            }
         }
      })();

      $scope.stats = [['Country', 'Count']];
      for (var key in $scope.countryPercent) {
         $scope.stats.push([key, $scope.countryPercent[key]])
      }
      googleGraph.create($scope.stats, 'company-location-graph', $scope);    // рисуем график. аргументы функции массив массивов данных и айдишник
   });
   $scope.test = function () {
      console.log ($scope.selected)

   }
});
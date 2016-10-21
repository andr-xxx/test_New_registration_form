/**
 * Created by Andr on 18.10.2016.
 */
app.controller('companiesCtrl', function ($scope, httpRequest, $rootScope) {

   $scope.visible = {
      loader: true,
      partners: false
   };
   $scope.statsPartners = function () {
      for (var i = 0; i < $scope.lists.length; i++) {

      }
   }

   var url = "http://codeit.pro/frontTestTask/company/getList";
   httpRequest(url)
      .then(function successCallback(answ) {
         // console.log (answ.data.list)
         $scope.lists = answ.data.list
         $rootScope.$broadcast('dataLoaded')
      }, function error() {
         console.log('error');
         return
         //todo проверка прав доступа и ошибок

      })

});
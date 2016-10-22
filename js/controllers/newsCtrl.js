app.controller('newsCtrl', function ($scope, httpRequest, $interval) {
   var url = 'http://codeit.pro/frontTestTask/news/getList';
   httpRequest(url)
      .then(function succesCallback(answ) {
         console.log(answ.data.list)
         $scope.news = answ.data.list;
      })
   $scope.count = 0
   $interval(function () {
      if ($scope.count != 9) {
         ++$scope.count
      } else {
         $scope.count = 0;
      }
   }, 3000)
})
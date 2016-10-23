app.controller('newsCtrl', function ($scope, httpRequest, $interval) {
   var url = 'http://codeit.pro/frontTestTask/news/getList';
   httpRequest(url)
      .then(function succesCallback(answ) {
         console.log(answ);
         $scope.visible.loaderNews = true;
         $scope.newsData = answ.data.list;
         for (var i = 0; i < $scope.newsData.length; i++) {
            var temp = new Date(+$scope.newsData[i].date); // сделал предположение, что даты приходят в мс.
                                                           // больше ни на что не похожe
            $scope.newsData[i].date = temp.getDate() + '.' + temp.getMonth() + 1 + '.' + temp.getFullYear();
         }

      });


   $scope.count = 0; // счётчик слайдера
   $interval(function () {
      if ($scope.count >= $scope.newsData.length || $scope.count < 0) {
         $scope.count = 0;
      } else {
         ++$scope.count
      }
   }, 4000)

   $scope.newSlide = function (next) {
      if (next && $scope.count >= $scope.newsData.length - 1) {
         $scope.count = 0;
      } else if (next) {
         ++$scope.count
      } else if (!next && $scope.count == 0) {
         $scope.count = $scope.newsData.length - 1;
      } else {
         --$scope.count
      }
   }
});
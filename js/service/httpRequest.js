app.factory('httpRequest', ['$http', function ($http) {
   return function (url, data) {
      var req = {
         method: 'POST',
         url: url,
         headers: {
            'Content-Type': undefined
         },
         data: data
      };

      return $http(req)

   }
}]);
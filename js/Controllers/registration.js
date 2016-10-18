app.controller('registrationCtrl', function ($scope, $http) {
   $scope.user = {};

   $scope.data = function () {
      var form = new FormData();
      form.append("name", $scope.user['name']);
      form.append("secondname", $scope.user['secondname']);
      form.append("email", $scope.user['email']);
      form.append("pass", $scope.user['pass']);
      form.append("gender", $scope.user['gender']);
      var req = {
         method: 'POST',
         url: "http://codeit.pro/frontTestTask/user/registration",
         headers: {
            'Content-Type': undefined
         },
         data: form
      };

      $http(req)
         .success(function (answ) {
            console.log(answ)
         });

   }
});
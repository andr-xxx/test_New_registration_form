app.controller('registrationCtrl', function ($scope, httpRequest, $state) {
   $scope.user = {};

   $scope.register = function () {
      var url = "http://codeit.pro/frontTestTask/user/registration";
      var data = createForm();
      httpRequest(url, data)
         .then(function successCallback(answ) {
            $state.go('companies');
         }, function error() {
            console.log ('error')
            return
            //todo проверка прав доступа и ошибок

         })


   };

   function createForm() {
      var form = new FormData();
      form.append("name", $scope.user['name']);
      form.append("secondname", $scope.user['secondname']);
      form.append("email", $scope.user['email']);
      form.append("pass", $scope.user['pass']);
      form.append("gender", $scope.user['gender']);

      return form;
   }
});
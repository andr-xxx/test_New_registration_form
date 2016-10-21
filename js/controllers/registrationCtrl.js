app.controller('registrationCtrl', function ($scope, httpRequest, $state, $rootScope) {
   $scope.user = {};
   $scope.selected = true;
   $scope.loginError = {};
   $rootScope.acces = false;

   $scope.register = function () {
      var url = "http://codeit.pro/frontTestTask/user/registration";
      var data = createForm();
      httpRequest(url, data)
         .then(function successCallback(answ) {
            $scope.loginError = {};
            console.log (answ.data)

            if (answ.data.message === 'User created') {
               $rootScope.acces = true;
               $state.go('companies');
            } else {
               $scope.loginError[answ.data.field] = answ.data.message;
               console.log ($scope.loginError)
            }
         }, function error(error) {
            console.log (error)
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
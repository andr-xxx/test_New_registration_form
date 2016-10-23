var app = angular.module('codeIt', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
   // Любые неопределенные url перенаправлять на /registr
   $urlRouterProvider.otherwise("/reg");
   // Теперь определим состояния
   $stateProvider
      .state('registr', {
         url: "/reg",
         templateUrl: "views/registration.html",
         controller: 'registrationCtrl'
      })
      .state ('companies', {
         url: "/comp",
         templateUrl: "views/compamies.html",
         // controller: 'compani',
         authenticate: true
      })
});

//проверка аутентификации
app.run(['$rootScope', '$state', function($rootScope, $state) {
   $rootScope.$on('$stateChangeStart', function(event, next) {
      // перенаправить на домашнюю страницу, если пользвоатель не зарегестрирован
      if (next.authenticate && !$rootScope.acces) {
         alert ('access is denied');
         event.preventDefault();
         $state.go('registr');
      }
   });
}]);

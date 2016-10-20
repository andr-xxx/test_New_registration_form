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

// проверка аутентификации
// app.run(['$rootScope', '$state', '$cookies', function($rootScope, $state, $cookies) {
//    $rootScope.$on('$stateChangeStart', function(event, next) {
//       // перенаправить на домашнюю страницу, если пользвоатель не зарегестрирован
//       if (next.authenticate && !$cookies.get('idUser')) {
//          alert ('access is denied');
//          event.preventDefault();
//          $state.go('login');
//       }
//    });
// }]);

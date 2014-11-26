//Setting up route
window.app.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // start state params ---
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('main', {
          url:'/',
          templateUrl: 'views/index.html'
        })
        .state('profile', {
          url:'/:userName',
          templateUrl: 'views/profile.html'
        });
    }
]);

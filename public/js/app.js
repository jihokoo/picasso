window.app = angular.module('picasso',
  ['ngCookies',
  'ngResource',
  'ui.bootstrap',
  'ui.router',
  'picasso.controllers',
  'picasso.services'
  ]);

angular.module('picasso.controllers',
  ['picasso.controllers.index'
  ]);

angular.module('picasso.services',
  ['picasso.services.global'
  ]);

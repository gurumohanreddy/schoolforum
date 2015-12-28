myApp.config(function($stateProvider, $urlRouterProvider){

              $stateProvider
              .state('home',{
               url:'/',
               templateUrl:'app/main/main.html',
               controller:'MainController',
               controllerAs:'main'
               })
               .state('menu',{
                url:'/menu',
                templateUrl:'app/components/menu/menu.html',
                controller:'MenuController',
                controllerAs:'menu'
                });


             $urlRouterProvider.otherwise('/');


});

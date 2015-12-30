myApp.config(function($stateProvider, $urlRouterProvider){

             $urlRouterProvider.otherwise('/');

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
                })
                .state('students',{
                 url:'/students',
                 templateUrl:'app/components/students/students.html',
                 controller:'StudentsController',
                 controllerAs:'students'
                });

});

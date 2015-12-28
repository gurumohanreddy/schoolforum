
myApp.controller('MenuController',['menuservice','$state',function(menuservice,$state){
        var menu = this;

        Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");

        function populatemenu(){
            menu.menuitems = menuservice.getdata();
        }

        menu.logout = function(){
          Parse.User.logOut();
        }

        menu.menuitems = [];
        populatemenu();


}]);

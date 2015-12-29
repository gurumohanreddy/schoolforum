
myApp.controller('MenuController',['menuservice','$state',function(menuservice,$state){
        var menu = this;
        Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");
        var currentUser = Parse.User.current();

        if (currentUser) {

        } else {
            console.log("Not logged In");
            $state.go('home');
        }

        function populatemenu(){
            menu.menuitems = menuservice.getdata();
        }

        menu.logout = function(){
          console.log("Logged Out")
          Parse.User.logOut();
          $state.go('home');
        }

        menu.menuitems = [];
        populatemenu();




}]);

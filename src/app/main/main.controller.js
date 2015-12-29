myApp.controller('MainController',['$state',function($state){

        var main = this;

  Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");

      main.login = function(){
        console.log("Establish a connection with parse...");

          Parse.User.logIn(main.username, main.password, {
              success: function(user) {
                console.log("Login successfull");
                $state.go('menu');
                main.username = "";
                main.password = "";
              },
              error: function(user, error) {
                console.log(error);
              }
          });


        }




}]);

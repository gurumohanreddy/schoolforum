myApp.controller('MainController',['$state',function($state){

        var main = this;

  Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");

      main.login = function(){
        console.log("Entered");

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

          // var user = new Parse.User();
          // user.set("username", main.username);
          // user.set("password", main.password);
          // user.signUp(null, {
          //   success: function(user) {
          //     console.log("successfull");
          //     $state.go('menu');
          //   },
          //   error: function(user, error) {
          //     // Show the error message somewhere and let the user try again.
          //     alert("Error: " + error.code + " " + error.message);
          //   }
          // });

        }

            


}]);

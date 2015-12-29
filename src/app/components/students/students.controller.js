myApp.controller('StudentsController',['$state',function($state){

        var students = this;
        Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");

        var currentUser = Parse.User.current();

        if (currentUser) {

        } else {
            $state.go('home');
        }

        students.logout = function(){
          console.log("Logged Out")
          Parse.User.logOut();
          $state.go('home');
        }


}]);

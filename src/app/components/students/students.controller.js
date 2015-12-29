myApp.controller('StudentsController',['$state','$http',function($state,$http){

        var students = this;
        Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");
        appId ='OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW';
        restId = 'TKEZxU6JOZAsTwlpbPhAnJlstvn938KtuzNhFDCU';
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


        students.initialize = function(){
          students.newstudent = {};

        }

        students.addstudent = function(){
          $http({
                   method: 'POST',
                   url: 'https://api.parse.com/1/classes/students',
                   headers: {'X-Parse-Application-Id': appId, 'X-Parse-REST-API-Key': restId,
                   'X-Parse-Revocable-Session': '1','Content-Type': 'application/json'},
                   data: students.newstudent

                }).success(function(data){
                   console.log(data)
                   $state.go('students');

                }).error(function(data){
                   console.log(data)
                });

            students.initialize();
        }

            students.initialize();

}]);
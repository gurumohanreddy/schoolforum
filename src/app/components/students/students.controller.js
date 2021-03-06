myApp.controller('StudentsController',['$state','$http',function($state,$http){

        var students = this;
        Parse.initialize("OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW","B6fAQ3HcASbpb4hKrAVoVgMy5p2U5CGe3CXLGJPg");
        var currentUser = Parse.User.current();



        students.logout = function(){
          console.log("Logged Out")
          Parse.User.logOut();
        }


        students.initialize = function(){
          students.modalname = "Add student";
          students.newstudent = {};
          students.loadstudents = [];
          students.loadallstudents();
        }

        students.addstudent = function(){


          if (!students.newstudent.objectId){
            console.log("calling POST");
                $http({
                     method: 'POST',
                     url: 'https://api.parse.com/1/classes/students',
                     headers: {'X-Parse-Application-Id': appId, 'X-Parse-REST-API-Key': restId,
                     'Content-Type': 'application/json'},
                     data: students.newstudent

                  }).success(function(data){
                     console.log(data);
                     students.initialize();

                  }).error(function(data){
                     console.log(data)
                  });
          }


          else {

            console.log("calling PUT");
            $http({
                   method: 'PUT',
                   url: 'https://api.parse.com/1/classes/students/'+(students.newstudent.objectId),
                   headers: {'X-Parse-Application-Id': appId, 'X-Parse-REST-API-Key': restId,
                             'Content-Type': 'application/json'},
                   data: students.newstudent

                }).success(function(data){
                   students.initialize();
                   console.log(data)

                }).error(function(data){
                   console.log(data)

                });


          }

}



        students.loadallstudents = function(){
          $http({
                   method: 'GET',
                   url: 'https://api.parse.com/1/classes/students',
                   headers: {'X-Parse-Application-Id': appId, 'X-Parse-REST-API-Key': restId,
                   'Content-Type': 'application/json'}

                }).success(function(data){
                   console.log('Getting data from parse...');
                   students.loadstudents = data;
                   console.log(data)
                }).error(function(data){
                });

        }

        students.editstudent = function(student){

            console.log(student);
            students.modalname = "Edit student";
            students.newstudent = student;

        }

        students.deletestudent= function(student){
          students.newstudent = student;
          $http({
                   method: 'DELETE',
                   url: 'https://api.parse.com/1/classes/students/'+students.newstudent.objectId,
                   headers: {'X-Parse-Application-Id': appId, 'X-Parse-REST-API-Key': restId,
                   'Content-Type': 'application/json'}

                }).success(function(data){
                  students.initialize();
                   console.log("Deleted Sucessfully");
                }).error(function(data){
                   console.log(data)
                });


        }

        if (currentUser) {
          console.log("Already logged in:students controller");
          console.log(currentUser);
          appId ='OXJqhw8TXb4dgsQXw3uTo3IxYGdL1pj0qjV0g0vW';
          restId = 'TKEZxU6JOZAsTwlpbPhAnJlstvn938KtuzNhFDCU';
          students.initialize();


        } else {
            console.log("Not logged In");
            $state.go('home');
        }


}]);

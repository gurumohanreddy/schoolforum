myApp.service('menuservice',function(){

            this.getdata = function(){
              var data = [
                {
                  'title': 'Manage Student',
                  'link': 'managestudent'
                },
                {
                  'title':'Manage Class',
                  'link': 'manageclass'
                },
                {
                  'title':'Teachers',
                  'link': 'teachers'
                },
                {
                  'title': 'Parents',
                  'link': 'parents'
                },
                {
                  'title': 'Account Settings',
                  'link': 'account'
                },
                {
                  'title': 'Notifications',
                  'link':'notifications'
                }
              ];

              return data;
            }

});

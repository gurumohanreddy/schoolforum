myApp.controller('MenuController',['menuservice',function(menuservice){

        function populatemenu(){
            menu.menuitems = menuservice.getdata();
        }


        var menu = this;
        menu.menuitems = [];
        populatemenu();


}]);

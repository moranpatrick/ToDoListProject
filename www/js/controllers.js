angular.module('starter.controllers', [])

.controller('Tasks',function($scope, Task, $ionicActionSheet) {
    
    $scope.deleteTask = function deleteTask(taskName) {
        var showActionSheet = $ionicActionSheet.show({
            destructiveText: 'Delete',
            titleText: 'Are you Sure?',
            
            buttons: [
                { text: 'Cancel' },  
            ],

            destructiveButtonClicked: function(index) {
                Task.deleteTask(taskName); 
                return true;//return after the item is deleted
            },
            
            buttonClicked: function(index) {
                return true;
            }, 
        });   
    };//deleteTask()
   
    $scope.data = Task.data;
})

/*Add task controller
* Pass in $scope and the name of the factory 
* from services.js*/
.controller('AddTask',function($scope, Task) {
    var data = {
        newTask: ""
    }
    
    function addTask() {
        //Call the factory method addTask passing in the title
        Task.addTask(data.newTask);
        //Set the bar to blank after a task is entered
        data.newTask = "";
    }
    
    $scope.data = data;
    $scope.addTask = addTask;

})


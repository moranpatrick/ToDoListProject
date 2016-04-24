angular.module('starter.controllers', [])

.controller('Tasks',function($scope, Task, $ionicActionSheet, $ionicPopup, $ionicListDelegate) {

    $scope.editTask = function(taskName){
       //Call edit task in the Task factory
       Task.editTask(taskName);
    };//editTask function
    
    $scope.deleteTask = function(taskName) {
        //I use ionic action sheet to display a message, confirming the users delete
        var showActionSheet = $ionicActionSheet.show({
            destructiveText: 'Delete',
            titleText: 'Are you Sure?',
            //Added a cancel button
            buttons: [
                { text: 'Cancel' },  
            ],

            //Delete button
            destructiveButtonClicked: function(index) {
                Task.deleteTask(taskName); 
                return true;//return after the item is deleted
            },
            
            //Cancel Button
            buttonClicked: function(index) {
                //Close option button if cancelled is entered and return
                $ionicListDelegate.closeOptionButtons();
                return true;
            }, 
        });   
    };//deleteTask()
    
    //Display to the front end of the app
    $scope.data = Task.data;
})//Task Controller

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

});//addTask controller


angular.module('starter.controllers', [])


.controller('Tasks',function($scope, Task) {
    var data = {
        newTask: ""
    }
    
     
    function deleteTask() {
        Task.deleteTask(data.newTask);   
    }
   
    $scope.data = Task.data;
    $scope.deleteTask = deleteTask;
   
})

.controller('AddTask',function($scope, Task) {
    var data = {
        newTask: ""
    }
    
    function addTask() {
        Task.addTask(data.newTask);
        data.newTask = "";
    }
    
    $scope.data = data;
    $scope.addTask = addTask;
})
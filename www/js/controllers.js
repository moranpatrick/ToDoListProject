angular.module('starter.controllers', [])


.controller('Tasks',function($scope, Task) {
    $scope.data = Task.data;
    
     function deleteTask() {
        Task.deleteTask(data.newTask);
    }
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
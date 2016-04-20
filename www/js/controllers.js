angular.module('starter.controllers', [])


.controller('Tasks',function($scope, Task) {
    $scope.data = Task.data;
    

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
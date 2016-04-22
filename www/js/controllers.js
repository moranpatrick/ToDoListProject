angular.module('starter.controllers', [])


.controller('Tasks',function($scope, Task, $ionicActionSheet) {
 
        
    function deleteTask(taskName) {
        var showActionSheet = $ionicActionSheet.show({
            destructiveText: 'Delete',
            titleText: 'Are you Sure?',
            
            buttons: [
                { text: 'Cancel' },  
            ],

            destructiveButtonClicked: function(index) {
                Task.deleteTask(taskName); 
                return true;
            },
            
            buttonClicked: function(index) {
                return true;
            },
           
        });   
    }//deleteTask()
   
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
    
    function cancel(){
        
    }
    
    $scope.data = data;
    $scope.addTask = addTask;
});


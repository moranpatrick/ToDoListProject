angular.module('starter.services', [])

.factory('Task', function() {
    //object array called data to store our todo
    var data = {
        tasks: []
    };
    
    
  function addTask(title) {
      /*If the user enters nothing then just return*/
      if(title == ""){
          return;
      }
      else{
        //otherwise add the title, date and set the completes task to false
        data.tasks.push({title: title, added: new Date(), completed: false});  
      }
  }
    
  function deleteTask(taskName){
      /*loop around the data.tasks array*/
      for(var i = 0; i < data.tasks.length; i++){
          /*If taskName matches remove the task from the array*/
          if(data.tasks[i].title == taskName){
             data.tasks.splice(i, 1);
          }   
      }
  }
      
  return {
    //return data and the two functions
    data: data,
    addTask: addTask,
    deleteTask: deleteTask
  };
});


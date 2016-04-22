angular.module('starter.services', [])


.factory('Task', function() {
    var data = {
        tasks: []
    };
    
    
  function addTask(title) {
      /*If the user enters nothing then just return*/
      if(title == ""){
          return;
      }
      else{
        data.tasks.push({title: title, added: new Date()});
          
      }
  }
    
  function deleteTask(taskName){
      /*loop around the data.tasks array*/
      for(var i = 0; i < data.tasks.length; i++){
          /*If taskName matches */
          if(data.tasks[i].title == taskName){
             data.tasks.splice(i, 1);
          }   
      }
  }
    
    
    

    
    return {
        data: data,
        addTask: addTask,
        deleteTask: deleteTask
    };
});


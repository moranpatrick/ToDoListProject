angular.module('starter.services', [])

.factory('Task', function($ionicPopup, $ionicListDelegate) {
  //object array called data to store our todo
  var data = {
      tasks: []
  };
  
  //Call the load function here
  load();
    
  function addTask(title) {
      /*If the user enters nothing then just return*/
      if(title == ""){
          return;
      }
      else{
        //otherwise add the title, date and set the completes task to false
        data.tasks.push({title: title, added: new Date(), completed: false});  
        //save data to local storage every time we add a todo
        save();
      }
  }

  function save(){
    //converts array to a string so it can be stored locally 
    //I use angular.toJson instead of Json.stringify because of duplicate haskKeys being created
    var stringData = angular.toJson(data);
    window.localStorage["tasks"] = stringData;
  }//save()

  function load(){
        //retrive the string data from local storage
       var stringData = window.localStorage["tasks"];
       
       if(stringData != null){
        //covert the string back intov the array and put into data array
          data = angular.fromJson(stringData);
       }
  }//load()
    
  function deleteTask(taskName){
      /*loop around the data.tasks array*/
      for(var i = 0; i < data.tasks.length; i++){
          /*If taskName matches remove the task from the array using splice*/
          if(data.tasks[i].title == taskName){
             data.tasks.splice(i, 1);
             save();
          }   
      }
  }
  //In this function you can edit an existing task - I used the ionic popup dependancy
  function editTask(taskName){
       //Open a prompt - ask for a response
       $ionicPopup.prompt({
            title: "Edit Your Task Here",
       }).then(function(res){
            
            if(res !== undefined){
              //Loop arounf the tasks object array
              for(var i = 0; i < data.tasks.length; i++){
                //If nothing is entered return 
                if(res == ""){
                  $ionicListDelegate.closeOptionButtons();
                  return;
                }
                if(data.tasks[i].title == taskName){
                  //If the title in the array matches the taskName passed through 
                  //Then change the title to the response entered in the ionic popup
                  //and add a new date stamp
                  data.tasks[i].title = res;
                  data.tasks[i].added = new Date();
                  save();
                  //Close The option buttons using ionicListDelegate
                  $ionicListDelegate.closeOptionButtons();
                }
              }//for
            }//if
       })
  };//editTask()
      
  return {
    //return data and the three other functions
    data: data,
    addTask: addTask,
    deleteTask: deleteTask,
    editTask: editTask
  };
});


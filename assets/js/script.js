var formEl = document.querySelector("#task-form"); 
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var createTaskHandler = function(event) { 
  event.preventDefault(); 

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
   
//create list item 
  var listItemEl = document.createElement("li"); 
  listItemEl.className = "task-item"; 

  //create div to hold taskinfo and add to list item
  var taskinfoEl = document.createElement("div");

  //give it a class name
  taskinfoEl.className = "task-info";

  //add HTML contecnt to div
  taskinfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
 
  listItemEl.appendChild(taskinfoEl); 

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  console.dir(listItemEl);
  }; 

  formEl.addEventListener("submit", createTaskHandler);
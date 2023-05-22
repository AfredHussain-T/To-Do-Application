var myList=[];                  //We store all the tasks in this array to get the pending tasks count.                  
const countTasks= document.getElementById('Pending-Tasks');  //This is to update the pending tasks later on
const curr_Task=document.getElementById('Task-list');       
const addInputs=document.getElementById('Enter-Task');
const addTaskButton=document.querySelector('.addButton');


// To create the list item and display it over screen

function displayAllTasks(){
    if(addInputs.value==""){            //if the input value is empty we get the alert to provide input.
        alert('Task Cannot be empty.. Please provide an INPUT..!');
        return;
    }
    const list= document.createElement('li');       //creating a list item.
    var input=document.createElement('input');      //creating an input element.
    input.type="checkbox";                          //providing the type to input element.
    input.labels= addInputs.value;                  //providing the label for checkbox with the taskname.
    list.appendChild(input);                        //appending input to list
    list.innerHTML=`<input type="checkbox" class="checked"/>    
                    <label for="checked" >${addInputs.value} </label>`;
                                                    // changing the innerHTML of list element.
                        //adding the list element to UL(parent tag).
    var span = document.createElement("SPAN");      
    span.innerHTML="\u00d7";                        
    span.className = "close";                       //creating a delete button and appending it to the list.
    list.appendChild(span);
    curr_Task.appendChild(list);
    addInputs.value="";
    addTasks(curr_Task);                           //calling add Task function to add it in the array.
    countTasks.innerHTML="Tasks Count:"+myList.length;    //changing the count of pending tasks.
}

//Adding the Task into the myList array

function addTasks(myTask){
    if(myTask){
        myList.push(myTask);
        alert('Task is successfully added');
        return;
    }
    alert('Task is not added');
}

// This function is used to delete a task or to mark it finished.

function delete_UpdateTasks(e){
    if(e.target.tagName === "SPAN"){        //by clicking the delete icon as it has the tagname as SPAN,
        const del=e.target.parentElement.remove();  //this will remove the parent element i.e., task from the list
        myList.length--;
        
        countTasks.innerHTML="Tasks Count:"+myList.length;    //once it is deleted we update the pending tasks.
        alert('Task is deleted successfully');
    }
    else if(e.target.className==="checked"){
        
        alert('Updated successfully');          //toggling the checkbox.
    }
}

// Beginning of the Application

addTaskButton.addEventListener('click', displayAllTasks);
curr_Task.addEventListener('click', delete_UpdateTasks);




 /* Globals */
//Variables for datapoints
var modal = document.getElementById("modal");
var title = document.getElementById("titleText");
var author = document.getElementById("authorText");
var desc = document.getElementById("descText");
  

//Get date
var today = new Date();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();


var todoArray = [];
var completedTodoArray = [];
var sortArray = [];


 /* ------------------------------------------------------- */



/* Listeners */

// Listener for 

//Creates modal for creating new todos
document.getElementById("todoBtn").addEventListener("click", function(){
    modal.style.display = "block"
});

//Listener for closing modal when clicking outside of modal
document.addEventListener("click", function() {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    
});

//Listener for the modal close button
document.getElementById("modalCloseBtn").addEventListener("click", function() {
    modal.style.display = "none";
})

//Listener creating a todo in the modal and printing it to current todos
document.getElementById("createBtn").addEventListener("click", function() {

    todoArray.push ({
        "title": title.value,
        "description": desc.value,
        "author": author.value
    });

    printTodoData();

    modal.style.display = "none";
})



 /* ------------------------------------------------------- */

/* Functions */


function printTodoData(){
   
    var iteration = 3;
    document.getElementById("todoContainer").innerHTML="";

    for(var i = todoArray.length - 1;  i >= 0; i--) {
        var data = "<div class='todoElement' value='" + i + "'>" + "<h1>" + todoArray[i].title + "</h1>" + "<p>" + todoArray[i].description + "</p>"
        + "<div class='todoElementBtns'><button onclick='removeElement(this)' class='removeTodoBtn'>Delete</button><button onclick='completeElement(this)' class='completeTodoBtn'>Complete</button></div>"
        + "</div>";

        document.getElementById("todoContainer").innerHTML += data;

        iteration--;
        if(iteration === 0){
            break;
        }


    }


} 



function printCompletedTodoData() {
    var completedTodoDiv = document.getElementById("listElements")
    completedTodoDiv.innerHTML="";

    for(var i = 0; i < completedTodoArray.length; i++){
        var output = "<div class='table'>" + "<p>" + completedTodoArray[i].title + "</p>" + "<p>" + completedTodoArray[i].description + "</p>"
        + "<p>" + completedTodoArray[i].author + "</p>" + "<p>" + date + "</p>"
        

        completedTodoDiv.innerHTML += output

    }



}


function removeElement(element){
    var currentElement = element.parentNode.parentNode;

    for(var i = 0; i < todoArray.length; i++) {
        if(parseInt(currentElement.getAttribute("value")) === i) {
            todoArray.splice(i, 1);
        }
    }

    currentElement.remove();
    printTodoData();

}


function completeElement(element){
    var currentElement = element.parentNode.parentNode;
    var currentElementValue = currentElement.getAttribute("value");


    for(var i = 0; i < todoArray.length; i++) {
        if(parseInt(currentElementValue) === i) {
            completedTodoArray.push ({
                "title": todoArray[i].title,
                "description": todoArray[i].description,
                "author": todoArray[i].author
            });

            todoArray.splice(i,1);
            printTodoData();
            printCompletedTodoData();
            currentElement.remove();

        }
    }
}

           
function countCharacters(e) {                                    
    var textEntered, countRemaining, counter;          
    textEntered = document.getElementById('descText').value;  
    counter = (125 - (textEntered.length));
    countRemaining = document.getElementById('charactersRemaining'); 
    countRemaining.textContent = " (" + counter + " characters left)";       
  }


  var descCounter = document.getElementById('descText');
  descCounter.addEventListener('keyup', countCharacters, false);

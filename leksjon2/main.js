var modal = document.getElementById("modal");
var title = document.getElementById("titleText");
var author = document.getElementById("authorText");
var desc = document.getElementById("descText");


var today = new Date();
var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();


document.getElementById("todoBtn").addEventListener("click", function(){
    modal.style.display = "block"
});


document.addEventListener("click", function() {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    
});

document.getElementById("modalCloseBtn").addEventListener("click", function() {
    modal.style.display = "none";
})


document.getElementById("createBtn").addEventListener("click", function() {
    document.getElementById("todoContainer").innerHTML += "<article class='item'><p>" + title.value + "</p><p>" + desc.value + "</p><button >Complete</button><button >Delete</button></article>"
})


document.getElementById("createBtn").addEventListener("click", function() {
    document.getElementById("test").innerHTML += "<div class='row '><div>" + title.value + " </div><div>"+ desc.value + "</div><div>" + author.value +"</div><div>" + date + "</div></div>";

});


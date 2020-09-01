var modal = document.getElementById("modal")

document.getElementById("todoBtn").addEventListener("click", function(){
    modal.style.display = "block"
});


    
document.addEventListener("click", function() {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    
});
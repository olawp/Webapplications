document.body.onload = createMain;

const myObj = [{id: 1, data: "text 1"},{id: 2, data: "text 2"},{id: 3, data: "text 3"},{id: 4, data: "text 4"}]

let string = "Jeg trener på javascript";



function createMain() {
    var main = document.createElement("main")
    document.body.appendChild(main);

    var paragraph = document.createElement("p");
    paragraph.className = "paragraphClass"
    paragraph.innerHTML = string;
    main.appendChild(paragraph);


    var select = document.createElement("select")
    main.appendChild(select)


    for(var i = 0; i < myObj.length; i++) {
        var selectItem  = document.createElement("option")
        selectItem.innerHTML += "ID: " + myObj[i].id + ": " + myObj[i].data
        select.appendChild(selectItem)
    }

    main.style.maxWidth = '500px';
    select.style.display = 'block';
    select.style.margin = '0 auto';



    var test = document.createElement("button");
    var reset = document.createElement("button");

    test.id = "testBtn";
    reset.id = "resetBtn";

    test.innerHTML = "Test"
    reset.innerHTML = "Reset"
    main.appendChild(test);
    main.appendChild(reset)

    test.addEventListener("click", function() {
        var result =[];
        s = string.split(" ");
        for(var i = 0; i < s.length;i++){
            result.push(s[i].substr(1))
        }
        console.log(result)

        result = result.join(" ")
        console.log(result)

        paragraph.innerHTML = reverseString(result)



        
    
    });

    reset.addEventListener("click", function() {
        console.log("reset")
    });


    var list = document.createElement("ul");
    main.appendChild(list)

    var listElement;
    var deleteBtn;

    for(i = 1; i <= 4; i++){
        listElement = document.createElement("li");
        deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", function(){
            this.parentNode.remove();
        });
        listElement.innerHTML = "Listeelement: " + i
        list.appendChild(listElement)
        listElement.appendChild(deleteBtn)

    }

    reset.addEventListener("click",function() {
        createList(listElement, deleteBtn, list);
    });


}

function createList(element,btn, list){
    list.innerHTML = "";

    for(i = 1; i <= 4; i++){
        element = document.createElement("li");
        btn = document.createElement("button")
        btn.innerHTML = "Delete";
        btn.addEventListener("click", function(){
            this.parentNode.remove();
        });
        element.innerHTML = "Listeelement: " + i
        list.appendChild(element)
        element.appendChild(btn)
    }
}


function reverseString(string) {
    var splitString = string.split("");
    var reverse = splitString.reverse();
    var join = reverse.join("");
    return join;
}
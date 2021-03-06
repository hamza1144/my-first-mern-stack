function update(){
    var input = document.getElementById("myinput");
    console.log(input.value);
    var output = document.getElementById("myoutput");
    output.innerHTML = input.value;
}

function doBindings(){
    var mybtn = document.getElementById("mybutton");
    mybtn.onclick = update;
}

window.onload = doBindings;

function addToList(){
    var list = document.getElementById("list");
    var inputText = document.getElementById("myinput").value;
    var listItem = document.createTextNode(inputText);
    var newLi = document.createElement("li");

    var delButton = document.createElement("BUTTON");
    delButton.innerHTML = "Delete";
    delButton.onclick = handleDelete;

    newLi.appendChild(listItem);
    list.appendChild(newLi);
}

function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);
}
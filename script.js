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
    var input = document.getElementById("myinput").val;
    var listItem = document.createTextNode(input);
    var newLi = document.createElement("li");
    newLi.appendChild(listItem);
    list.appendChild(newLi);
}
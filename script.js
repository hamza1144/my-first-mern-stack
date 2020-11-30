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
    var input = document.getElementById("myinput");
    list.innerHTML = "<li>"+input.value+"</li>"
}
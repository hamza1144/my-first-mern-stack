$(function(){
    $("#loadBtn").click(loadContent);
});

function loadContent(){
    $.get("Names.txt", handleData);
}
function handleData(response){
    $("#dataContainer").empty();
    $("#dataContainer").append(response);
}
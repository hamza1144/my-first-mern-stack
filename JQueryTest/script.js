$(function(){
    $("#addNameBtn").click(addName);
    $("#listOfNames").on("click", "li", removeName);
});
function addName(){
    var input = $("#enteredName").val();
    if(!input){
        console.log("Kindly Enter a Name First");
        $("#enteredName").addClass("error");
        return;
    }
    $("#enteredName").removeClass("error");
    console.log("New Name Added");
    $("#listOfNames").append("<li>"+input+"</li>");
    $("#enteredName").val("");
};
function removeName(){
    $(this).fadeOut();
};
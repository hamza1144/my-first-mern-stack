$(function(){
    $("#getApiBtn").click(getData);
});

function getData(){
    $.ajax({
        url:"https://usman-recipes.herokuapp.com/api/recipes",
        method:"GET",
        success: function(response){
            console.log(response);
            $("#dataContainer").empty();
            for(var i=0;i<response.length;i++){
                var rec = response[i];
                $("#dataContainer").append(
                `<div class="recipe"><h4>${rec.title}</h4><p><button class="btn btn-danger btn-sm float-right">delete</button> ${rec.body}</p></div>`
                );
        // recipes.append("<div><h3>" + rec.title + "</h3></div>");
            }

        }
    })
}
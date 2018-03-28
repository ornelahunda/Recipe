//onclick function with the search bar
$(".recentRecipe").on("click", function (event) {

    $("#recipe").empty();
    $("#ingredients").empty();
    $("#nutrition").empty();
  
    event.preventDefault();
  //empty array to hold the recipes 
var recent = ["fish", "chicken"];
//function for dumping recipe info for each button into the HTM
$(".recentRecipe").on("click", function () {
    for (var i = 0; i < recent.length; i++) {
        food = recent[i];
        console.log(food);
    }
    
    //function to display recipe 
function renderButtons() {
    $(".recent").empty();
    for (var i = 0; i < recent.length; i++) {
        var a = $("<button>");
        a.addClass("recentRecipe");
        a.attr("data-name", recent[i]);
        a.text(recent[i]);
        $(".recent").append(a);
    }
}

//create buttons 
$("#find-recipe").on("click", function (event) {
    event.preventDefault();

    var recipe = $("#searched-text").val().trim();

    recent.push(recipe);
    renderButtons();
});
renderButtons();
});
    
  });





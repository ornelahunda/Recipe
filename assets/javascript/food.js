var food = "";
//onclick function with the search bar
$("#find-recipe").on("click", function (event) {

  $("#recipe").empty();
  $("#ingredients").empty();
  $("#nutrition").empty();

  event.preventDefault();

  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
  food = $("#searched-text").val();
  var foodURL = "https://api.edamam.com/search?q=" + food + "&app_id=e074d398&app_key=c8fd43f5044c655732878dee8b34a346";
  //CORS workaround so we can access data
  var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
  var queryURL = cors_api_url + foodURL;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var x = response.hits[0].recipe;
    // update HTML for ingredients 
    for (var i = 0; i < x.ingredients.length; i++) {
      $("<li>" + x.ingredients[i].text + "</li>").appendTo("#ingredients");
    }
    // update HTML for nutrition facts 
    for (var i = 0; i < x.healthLabels.length; i++) {
      console.log(x.healthLabels[i]);
      $("<li>" + x.healthLabels[i] + "</li>").appendTo("#nutrition");
    }
    // update HTML for recipe title
    $("#recipe").text(x.label);
    //update chef credit
    $("#chef").text("Recipe from: " + x.source);

    //update directions on recipe

    var a = x.url;
    $("#iframeDirections").attr("scr", a);


  });

});
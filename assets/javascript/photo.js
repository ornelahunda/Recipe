$(document).ready(function () {
    $('.carousel').carousel();
  });


  $(document).ready(function () {
    // this is going to hold photo array 
    var photos = [];
    // var photo = $(this).attr("data-name");
    var queryUrl = "https://pixabay.com/api/?key=8461570-232e401d48810814e19e97b4c&q=" +
      "food" + "&image_type=photo"

    var cors_api_url = "https://cors-anywhere.herokuapp.com/";
    var cors_url = cors_api_url + queryUrl;
    $.ajax({
      url: queryUrl,
      method: 'GET'
    }).done(function (response) {
      var results = response.hits;
      
      console.log(results);

      var hrefArray = ["#one!", "#two!", "#three!", "#four!", "#five!"]
      // console.log(hrefArray);

      //for each item in results (create a for loop to loop try our results array)
      // create a divCarousal
      var divCarousel = $("<div class='carousel'>");
      $("#myCarousel").append(divCarousel);
      // console.log(divCarousel);

      for (i = 0; i < hrefArray.length; i++) {
        var aTag = $("<a class='carousel-item'>");
        aTag.attr("href", hrefArray[i]);
        divCarousel.append(aTag);
        // console.log(aTag);

        var imgTag = $("<img style='height=100px; width=100px;'>");
        imgTag.attr("src", results[i].largeImageURL);
        aTag.append(imgTag).img;
        // console.log(imgTag.img);

      }
      $('.carousel').carousel();
    });
  });
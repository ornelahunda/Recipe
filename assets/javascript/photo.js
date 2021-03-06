$(document).ready(function () {
    $('.carousel').carousel();  
});




   $("#find-recipe").on("click", function () {
    
    var photo = $("#searched-text").val();
    
        var queryUrl = "https://pixabay.com/api/?key=8461570-232e401d48810814e19e97b4c&q=" +
           photo + "&image_type=photo";

        var cors_api_url = "https://cors-anywhere.herokuapp.com/";
        var cors_url = cors_api_url + queryUrl;
        $.ajax({
            url: queryUrl,
            method: 'GET'
        }).done(function (response) {
            var results = response.hits;

            console.log(results);

            var hrefArray = ["#one!", "#two!", "#three!", "#four!", "#five!","#six!","#seven!","#eight!","#nine!","#ten!"];
            // console.log(hrefArray);

            //for each item in results (create a for loop to loop try our results array)
            // create a divCarousal
            var divCarousel = $("<div class='carousel' style='width:100%'>");
            $('#myCarousel').empty();
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
                imgTag.addClass("foodImage");
                // console.log(imgTag.img);
    
            }
            $('.carousel').carousel(); 
            
     });   
 });

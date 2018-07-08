var gifs = [];


      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < gifs.length; i++) {

          var a = $("<button>");

          a.attr("data-name", gifs[i]);
          a.addClass("gif_button")
          a.text(gifs[i]);

          $("#buttons-view").append(a);
        }
      }

      $("#add-gif").on("click", function(event) {

        event.preventDefault();
      
        var gif = $("#gif-input").val().trim();

        gifs.push(gif);

        renderButtons();

        console.log(" ok this is add gif")

      });

$(document).on("click", ".gif_button", function(event) {
var gifName = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"

}).then(function(response) {

console.log(queryURL);
console.log(response);

var results = response.data;

for (var i = 0; i < results.length; i++) {

    var gifImage = $("<img>");
    var gifsDiv = $("<div>");

  
    var p = $("<p>").text("Rating: " + results[i].rating);


    gifImage.attr("src", results[i].images.fixed_height.url);

    gifsDiv.append(p);
    gifsDiv.append(gifImage)

    $("#images").prepend(gifsDiv);

    
}
    });
})
        

     
      $(document).on("click");

      renderButtons();
$(document).ready(function() {
  $('#movieButton').click(function() {
    var movie = $('#movie').val();
    $('#movie').val("");
    $.get('http://www.omdbapi.com/?t=' + movie).then(function(response) {
      if(response.Response == "True") {
        $('.showMovie').text("The movie you have chosen is " + response.Title + ".");
        console.log(JSON.stringify(response));
      } else {
        $('.showMovie').text(response.Error);
      }
    });
  });
});

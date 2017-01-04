$(document).ready(function() {
  $('#movieButton').click(function() {
    var movie = $('#movie').val();
    $('#movie').val("");
    $('.showMovie').text("The movie you have chosen is " + movie + ".");
    $.get('http://www.omdbapi.com/?t=' + movie, function(response) {
      console.log(response);
    });
  });
});

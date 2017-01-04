var Movie = require('./../js/movie-trivia.js').movieModule;

var displayTitle = function(title, movieTitle) {
  $('.showMovie').text("The title of the movie " + title + "is " + movieTitle);
};

$(document).ready(function() {
  var currentMovieObject = new Movie();
  $('#movieButton').click(function() {
    var movie = $('#movie').val();
    $('#movie').val("");
    currentMovieObject.getMovie(movie, displayTitle);
  });
});

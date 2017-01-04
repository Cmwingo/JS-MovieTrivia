var Movie = require('./../js/movie-trivia.js').movieModule;

var displayTitle = function(title, movieTitle, movieDirector, movieYear, movieActors) {
  $('.showMovie').text(movieTitle + " by " + movieDirector + ": " + movieYear + " starring ");
  var movieActorArray = movieActors.split(",");
  movieActorArray.forEach(function(actor){
    $('.showMovie').append(actor + ", ");
  });
};

$(document).ready(function() {
  var currentMovieObject = new Movie();
  $('#movieButton').click(function() {
    var movie = $('#movie').val();
    $('#movie').val("");
    currentMovieObject.getMovie(movie, displayTitle);
  });
});

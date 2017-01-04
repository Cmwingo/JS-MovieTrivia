function Movie(){
}

Movie.prototype.getMovie = function(title, displayFunction) {
  $.get('http://www.omdbapi.com/?t=' + title).then(function(response) {
    console.log(response);
    if(response.Response == "True") {
      displayFunction(title, response.Title, response.Director, response.Year, response.Actors);
    } else if(response.Response == "False") {
      $('.showMovie').text(response.Error);
    } else {
      $('.showMovie').text("Unknown Error");
    }
  });
};

exports.movieModule = Movie;

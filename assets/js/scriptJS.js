/*********************************** Variables *******************************************/

/*****************************************************************************************/

/*********************************** Functions *******************************************/

//Function to get the url query for the option selected whether Random or By category Restaurants
  var getQuery = function() {
    // grab repo name from url query string
    var queryString = document.location.search;
    var q = queryString.split("=")[1];
  
    if (q) {
      // display repo name on the page
      
    } else {
      // if no repo was given, redirect to the homepage
      document.location.replace("./index.html");
    }
  };

  /*****************************************************************************************/

  /*********************************** Execution *******************************************/

  getQuery();

  
  $(document).ready(function() {
    $(document).foundation();
  });



  /*****************************************************************************************/
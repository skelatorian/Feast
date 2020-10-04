/*********************************** Variables *******************************************/
var popup = new Foundation.Reveal($('#myModal'));
//Array of Objects for localStores data
var list = JSON.parse(localStorage.getItem('restaurant')) || [];

/*****************************************************************************************/

/*********************************** Functions *******************************************/

//Function to start the code
var start = function() {
  loadRestaurants();

  var brand = document.getElementById("brandTitle");  
  var title1 = document.getElementById("titleCity");
  var title2 = document.getElementById("titleCategory");
  stylingFunction(brand,1);
  stylingFunction(title1,1);
  stylingFunction(title2,1);
};

var stylingFunction =function(element, type){
  element.style.fontFamily = 'Tangerine, cursive';
  if(type == 1){
    element.style.fontSize = "48px";
  }
  else{
    element.style.fontSize = "34px";
  }  
};

// function generated dynamically for the list in the Dropdown menu
var search = function(lat, lon){
  document.location.replace("./savedRest.html?lat=" + lat + "&lon="+lon);
};

// load my Restaurants saved in LocalStore
var loadRestaurants = function(){

  ulContainer = document.querySelector("#targetMyRestaurant");          //Getting the element fo My Restaurants
  ulContainer.innerHTML ="";

  if(list){
    for(var i = 0; i < list.length; i++){
        var liElement =document.createElement("li");
        liElement.innerHTML = "<a href='javascript:search("+list[i].lat +","+ list[i].lon + ");' coord='"+list[i].lat + "," + list[i].lon + "'>"+list[i].name+"</a>";  
        ulContainer.appendChild(liElement);  
      }       
    }
};

// Method to popup any message fron the application
var displayModal = function(title, str, bgcolor){

  var imgOk = $("<img>");
  imgOk.attr("src","./assets/images/x.png").attr("alt", "error").attr("style", "width:30%;");
  
  $("#myModal").addClass("callout primary text-center");
  $(".title").addClass("callout success small-text text-center " + bgcolor).attr("style","font-family:Tangerine, cursive; font-size:34px").text(title);
  $(".lead").attr("style","font-family:Tangerine, cursive; font-size:34px").text(str);
  $("#targetImg").replaceWith(imgOk);
  popup.open();
  
};


// listener for clicking on button Generate and search in jquery
$(".btn").on("click", function() {

    //getting the attribute of the button clicked whether it is random, searchin by city or category
    var search = $(this).attr("attr");

    //getting the value of the select tag
    var category = document.querySelector("#category").value || "";
    var city = document.querySelector("#citySearch").value;
    var city2 = document.querySelector("#citySearch2").value;
    
    if(search === "city"){
      if (city) {
        document.location.replace("./main.html?q=" + city);
      }
      else{
        //Display modal for error
      
        displayModal("Search by City", "You must enter a City", "alert");
      }

    } 
    else if (search === "category"){
      if (category && city2){
        document.location.replace("./main.html?q=" + city2 + '=' + category);
      }
      else{
      //Display modal for error
      
      displayModal("Search by Category", "You must select one Category and enter your city", "alert");
      
      }
    }
    
  });

/*****************************************************************************************/

/*********************************** Execution *******************************************/

start();

$(document).ready(function() {
  $(document).foundation();
});

/*****************************************************************************************/

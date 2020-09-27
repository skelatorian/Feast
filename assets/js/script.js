/*********************************** Variables *******************************************/
var popup = new Foundation.Reveal($('#myModal'));
//Array of Objects for localStores data
var list = JSON.parse(localStorage.getItem('restaurant')) || [];

/*****************************************************************************************/

/*********************************** Functions *******************************************/

//Function to start the code
function start() {
  loadRestaurants();
  
}

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

    $("#myModal").addClass("callout primary");
    $(".title").addClass("callout " + bgcolor).text(title);
    $(".lead").text(str);
    $(".targetING").
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

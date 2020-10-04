/*********************************** Variables *******************************************/
var index = 0;

var titleEl = document.getElementById("target-title-restaurant");
var imgEl = document.getElementById("imageRestaurant");
var addressTxt = document.getElementById("targetAddress");
var addressEl = document.getElementById("address");
var urlTxt = document.getElementById("targetURL");
var urlEl = document.getElementById("url");
var ratingTxt = document.getElementById("targetRating");
var rating = document.getElementById("rating");

var dataRestaurant = [];
//Array of Objects for localStores data
var list = JSON.parse(localStorage.getItem('restaurant')) || [];
/*********************************** Functions *******************************************/

//Function to start the code
function start() {
  loadRestaurants();
};

// function generated dynamically for the list in the Dropdown menu
var search = function(lat, lon){
  document.location.replace("./savedRest.html?lat=" + lat + "&lon=" + lon);
};

//Function to get the url query for the option selected whether Random or By category Restaurants
  var getQuery = function() {
    // grab repo name from url query string
    var queryString = document.location.search;
    var q = queryString.split("=")[1];
    var q2 = queryString.split("=")[2];
    
  
    if (q && q2) {
      
      var url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?latitude=" + q + "&longitude=" + q2;
            fetch(url, {
                headers: {
                    mode: 'no-cors',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer quJaFb-FDw5HkLiT6j-2CqDL9sFMrO7tynIDs8bCt1-rK52VQ_6wBzuYZdIVEk2NqYZ7ipd5grBnQIH6PIHpmYSMsAaq7xVFrZJtQDQu9rspQ2QWj_Lbwc15GZRqX3Yx"
                }
            }
            ).then(function(response){
                response.json().then(function(data){
                    display(data.businesses, index);
                });
            });
        }
    
      else {
        // if no query was given, redirect to the homepage
        document.location.replace("./index.html");
      }
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

var initMap = function(map, coordinates){
    //styling the container for the map
    map.style.height = "400px";
    map.style. overflow = "clip"
    
    //geting the map
    mapboxgl.accessToken ="pk.eyJ1IjoiamVzcGkxMTYiLCJhIjoiY2tmN2hraTBsMDJoMDJycGMyZnMwZmFnbiJ9.p1H_JtUf2Bl_KtGuPNEcow";
    var map = new mapboxgl.Map({
        container: map.getAttribute('id'),//'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 15
    });
    
    var marker = new mapboxgl.Marker()
      .setLngLat([coordinates.longitude, coordinates.latitude])
      .addTo(map);
}

// Function to display the Restaurant Selected
var displayAgreement = function (dataObj) {

  //first display a modal

  var imgOk = $("<img>");
  imgOk.attr("src","./assets/images/ok.png").attr("alt", "ok").attr("style", "width:30%;");
  
  $("#myModal").addClass("callout primary text-center");
  $(".title").addClass("callout success small-text text-center").attr("style","font-family:Tangerine, cursive; font-size:34px").text("You did it. Amazing!");
  $(".lead").attr("style","font-family:Tangerine, cursive; font-size:34px").text("Restaurant. "+dataObj.name);
  $("#targetImg").replaceWith(imgOk);
 // popup.open();

  // clean the container an display the information about the restaurant

  var containerMap = document.querySelector("#targetMap");
  initMap(containerMap, dataObj.coordinates);
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


  var display = function(data, posArray){
    var i = posArray;

    stylingFunction(titleEl,1);
    titleEl.innerHTML = data[i].name;

    imgEl.innerHTML = "<img src='" + data[i].image_url + "'>";

    stylingFunction(addressTxt,2);
    addressEl.innerHTML = data[i].location.display_address[0] + " " + data[i].location.display_address[1];


    stylingFunction(ratingTxt,2);
    rating.innerHTML = "<img style='width:15%' src='./assets/images/" + Math.floor(parseFloat(data[i].rating)) + ".png'>";

    stylingFunction(urlTxt,2);
    urlEl.innerHTML = "<a href='" + data[i].url.trim() + "' target='_blank'>"+ data[i].url.trim() +"</a>" 
  
    displayAgreement(data[index]);

  };

  /*****************************************************************************************/

  /*********************************** Execution *******************************************/

  start();                                    //initials Settings 
  

  $(document).ready(function() {              // Initial setting for modal or reveal 
    $(document).foundation();
  });

  getQuery();                                 //Getting the url query from index.html

  /*****************************************************************************************/
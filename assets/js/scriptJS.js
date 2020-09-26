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
var noBtn = document.getElementById("no");
var yesBtn = document.getElementById("yes");
var dataRestaurant = [];
/*********************************** Functions *******************************************/

//Function to get the url query for the option selected whether Random or By category Restaurants
  var getQuery = function() {
    // grab repo name from url query string
    var queryString = document.location.search;
    var q = queryString.split("=")[1];
    var q2 = queryString.split("=")[2];
    
  
    if (q && q2) {
      console.log("location=" + q + "&term=" + q2);
      
      var url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + q + "&term=" + q2;
            fetch(url, {
                headers: {
                    mode: 'no-cors',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer quJaFb-FDw5HkLiT6j-2CqDL9sFMrO7tynIDs8bCt1-rK52VQ_6wBzuYZdIVEk2NqYZ7ipd5grBnQIH6PIHpmYSMsAaq7xVFrZJtQDQu9rspQ2QWj_Lbwc15GZRqX3Yx"
                }
            }
            ).then(function(response){
                response.json().then(function(data){
                    shuffle(data.businesses);
                });
            });
        }

     
    else if(q){
      console.log("location=" + q);

      var url = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + q ;
            fetch(url, {
                headers: {
                    mode: 'no-cors',
                    'Content-Type': 'application/json',
                    Authorization: "Bearer quJaFb-FDw5HkLiT6j-2CqDL9sFMrO7tynIDs8bCt1-rK52VQ_6wBzuYZdIVEk2NqYZ7ipd5grBnQIH6PIHpmYSMsAaq7xVFrZJtQDQu9rspQ2QWj_Lbwc15GZRqX3Yx"
                }
            }
            ).then(function(response){
                response.json().then(function(data){
                  dataRestaurant = shuffle(data.businesses);
                  
                });
            });

    }
    
    else {
      // if no repo was given, redirect to the homepage
      document.location.replace("./index.html");
    }
  };

  var shuffle = function(restaurants) {
    var currentIndex = restaurants.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {
    
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    
      // And swap it with the current element
      temporaryValue = restaurants[currentIndex];
      restaurants[currentIndex] = restaurants[randomIndex];
      restaurants[randomIndex] = temporaryValue;
    }
    display(restaurants, index);   //Issue 2. sending index argument to the array
    return restaurants;
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

  var display = function(data, posArray){
   // console.log(data);
    //console.log(data.length);
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
  
    noBtn.addEventListener("click", function(){
     
      if(data){
        if(index != (data.length-1)){
          index++;
        }
        else {
          index = 0;
        }
        console.log(index);
         display(data, index);
      }
      //console.log(index);
    });
    yesBtn.addEventListener("click", function(){
      console.log("yes");
      return;
  });
  };

  /*****************************************************************************************/

  /*********************************** Execution *******************************************/

  getQuery();

  
  $(document).ready(function() {
    $(document).foundation();
  });



  /*****************************************************************************************/
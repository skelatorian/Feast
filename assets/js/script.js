/*********************************** Variables *******************************************/
var popup = new Foundation.Reveal($('#myModal'));


/*****************************************************************************************/

/*********************************** Functions *******************************************/

// Method to popup any message fron the application
var displayModal = function(title, str){

    $("#myModal").addClass("callout primary");
    $(".title").addClass("callout alert").text(title);
    $(".lead").text(str);
    popup.open();
  
};


// listener for clicking on button Generate and search in jquery
$(".btn").on("click", function() {

    //getting the attribute of the button clicked whether it is random, searchin by city or category
    var search = $(this).attr("attr");

    //getting the value of the select tag
    var category = document.querySelector("#category").value || "";
    var city = document.querySelector("#citySearch").value;
    
    if(search === "city"){
      if (city) {
        document.location.replace("./main.html?q=" + city);
      }
      else{
        //Display modal for error
      
        displayModal("Search by City", "You must enter a City");
      }

    } else if(search === "random"){
      document.location.replace("./main.html?q=random");
    }
    else if (search === "category"){
      if (category){
        document.location.replace("./main.html?q="+category);
      }
      else{
      //Display modal for error
      
      displayModal("Search by Category", "You must select one Category");
      
      }
    }
    
  });

  $(document).ready(function() {
    $(document).foundation();
  });


/*****************************************************************************************/

/*********************************** Execution *******************************************/



/*****************************************************************************************/

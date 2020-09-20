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

    //getting the attribute of the button clicked
    var search = $(this).attr("attr");

    //getting the value of the select tag
    var category = document.querySelector("#category").value || "";
    
    if(search === "random"){
      document.location.replace("./main.html?q=random");
    }
    else if (search === "category" && category){
      document.location.replace("./main.html?q="+category);
    }
    else{
      //Display modal for error
      
      displayModal("Category", "You must select one Category")
      
    }
  });


/*****************************************************************************************/

/*********************************** Execution *******************************************/



/*****************************************************************************************/

/*********************************** Variables *******************************************/
var btnRandom = document.querySelector("#generateBtn");
var btnCategory = document.querySelector("#SearchBtn");
var divHeader = document.querySelector("#header");
var doc = document.body;
var i = 0;

/*****************************************************************************************/

/*********************************** Functions *******************************************/

var changeBg = function() {
  var color = ["#a5d2ff", "#aed6ff" , "#b7dbff", "#c0dfff", "#c9e4ff", 
                "#d2e8ff", "#dbedff","#bedfff", "#d8ebff", "#f1f8ff"];  
  divHeader.style.backgroundColor = color[i];
  doc.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
};

/*****************************************************************************************/

/*********************************** Execution *******************************************/

setInterval(changeBg, 750);

// adding listener for random restaurant


// adding listener for category restaurant


/*****************************************************************************************/

var divHeader = document.querySelector("#header");
var doc = document.body;
var i = 0;

var changeBg = function() {
  var color = ["#a5d2ff", "#aed6ff" , "#b7dbff", "#c0dfff", "#c9e4ff", "#d2e8ff", "#dbedff","#bedfff", "#d8ebff", "#f1f8ff"];  
  divHeader.style.backgroundColor = color[i];
  doc.style.backgroundColor = color[i];
  i++;
  
  if(i > color.length - 1) {
    i = 0;
  }
};

setInterval(changeBg, 1000);
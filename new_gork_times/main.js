
$(document).ready(function(){
  $("#lizard").click(function(){
    location.assign("index_lizard.html")
  });
  $("#human").click(function(){
    location.assign("index.html")
  });
});

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("todays_date").innerHTML = months[d.getMonth()] + ' ' + d.getDate() + ',' + ' ' + d.getFullYear();

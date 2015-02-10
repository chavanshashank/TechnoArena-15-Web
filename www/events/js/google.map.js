//// Start Google Maps ////
function initialize() {
  var myOptions = {
	zoom: 16,
	center: new google.maps.LatLng(21.002803,75.5495031),
	mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyDju6j9eNrXKGAHRlj_PdcZM3abAFuPeE8";
  document.body.appendChild(script);
}
window.onload = loadScript;
//// End Google Maps ////
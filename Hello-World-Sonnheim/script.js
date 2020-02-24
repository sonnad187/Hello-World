var newleftside = "<p>Goodbye</p> \n <img id = 'map' src = 'map.jpg' alt = 'Map'>";
var newrightside = "<p>Planet!</p> \n <img id = 'earth' src = 'earth.jpg' alt = 'Earth'>";
var oldleftside = "";
var oldrightside = "";

function toggle() {
  oldleftside = document.getElementById("leftside").innerHTML;
  console.log(oldleftside);
  document.getElementById("leftside").innerHTML = newleftside;
  console.log(oldleftside);

  oldrightside = document.getElementById("rightside").innerHTML;
  document.getElementById("rightside").innerHTML = newrightside;

  newleftside = oldleftside;
  newrightside = oldrightside;
}

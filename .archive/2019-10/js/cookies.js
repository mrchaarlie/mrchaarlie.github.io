function setCookie (cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie (cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return  c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookies () {
  var lastVisited = getCookie("lastVisited");
  var now = new Date();
  now.getTime();
  if (lastVisited != "") {
    setCookie("lastVisited", now.getTime(), 2);
    console.log("Welcome Back");
    console.log("Take a look at the code, I made it myself :)");
  } else {
    setCookie("lastVisited", now.getTime(), 2);
    console.log("Nice to meet you!");
    console.log("Take a look at the code, I made it myself :)");
  }
}

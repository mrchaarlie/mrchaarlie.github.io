
let isModalExpanded = false;

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
      return c.substring(name.length, c.length);
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
    document.getElementById('showcase-1').classList.remove("fadeIn");
    document.getElementById('showcase-2').classList.remove("fadeIn");
  } else {
    setCookie("lastVisited", now.getTime(), 2);
    console.log("Nice to meet you!");
  }
}


function openModal(e) {
  document.getElementById('modal').classList.add("active");
  isModalExpanded = true;
  let src = e.children[0].src;
  document.getElementById('modal-image').src = src;
}

function closeModal() {
  document.getElementById('modal').classList.remove("active");
  isModalExpanded = false;
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = evt.key == "Escape";
    } else {
        isEscape = evt.keyCode == 27;
    }
    if (isEscape && isModalExpanded) {
        closeModal();
    }
};

window.onscroll = function (e) {
  if (isModalExpanded){
    closeModal();
  }
}
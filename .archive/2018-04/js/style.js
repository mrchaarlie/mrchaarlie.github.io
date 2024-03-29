// Global Variables --------------------------------------------------

var previewContainer = document.getElementById("portfolioPreview");
var mainPreviewImg = document.getElementById("portfolioPreviewImage");
var modalText = document.getElementById("portfolioPreviewText");
var showExtra = document.getElementById("showExtraTextButton");
var aboutDiv = document.getElementById("about");
var isMouseOverModal = false;
var isPreviewExpanded = false;

// Document Events --------------------------------------------------

// Set hover flags for scroll
modalText.addEventListener("touchstart", mouseOverModal);
modalText.addEventListener("touchend", mouseOutModal);
modalText.addEventListener("mouseover", mouseOverModal);
modalText.addEventListener("mouseout", mouseOutModal);

// Toggle about extras
showExtra.addEventListener("touchstart", toggleAboutExtras);
showExtra.addEventListener("click", toggleAboutExtras);

// Close modal on esc press
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = evt.key == "Escape";
    } else {
        isEscape = evt.keyCode == 27;
    }
    if (isEscape &&isPreviewExpanded) {
        minimizePreview();
    }
};


// Check to expand preview
document.body.onclick = function(e) {
    if (window.event) {
        e = event.srcElement;
    }else{
        e = e.target;
    }

    if (e.nodeName != "DIV"){
    	e = e.parentNode;
    }
    // console.log(e);
	var parentNode = e.parentNode;

	// If you click on div with class "item"
    if (parentNode.className && parentNode.className.indexOf('portfolio-item') != -1) {
		togglePreview(parentNode);
    }else if (e.className && e.className == 'close') {
		minimizePreview();
    }else if (e.className && e.className == 'modal') {
		minimizePreview();
    }

}

function mouseOverModal(){
	isMouseOverModal = true;
	document.getElementById("home").style.overflow = "hidden";
}
function mouseOutModal(){
	isMouseOverModal = false;
	document.getElementById("home").style.overflow = "auto";
}
function toggleAboutExtras(){

	if (aboutDiv.className.indexOf('show-extra') != -1){
		aboutDiv.className = aboutDiv.className.replace(" show-extra", "");
		showExtra.innerHTML = "Show more";

	}else{
		aboutDiv.className += " show-extra";
		showExtra.innerHTML = "Show less";
	}
}

window.onscroll = function (e) {
	if (isPreviewExpanded && !isMouseOverModal){
		// check if focus is on modal or not
		minimizePreview();
	}
}

function expandPreview(element){
	isPreviewExpanded = true;
	console.log(element);

	var item = element.className.replace("portfolio-item portfolio-item--", "");
	var title = element.children[0].children[0].innerHTML;
	var shortDesc = element.children[0].children[1].innerHTML;
	var longDesc = element.children[0].children[3].innerHTML;

	// console.log(item);
	// console.log(title);
	previewContainer.className += " expand";
	mainPreviewImg.style.backgroundImage = "url(img/" + item + "-large.jpg)";
	// mainPreviewImg.style.backgroundSize = "contain";url("img/ashcity-large.jpg") center center / contain no-repeat rgba(0, 0, 0, 0.4)
	var textContainer = document.getElementsByClassName("modal__text")[0];
	textContainer.scrollTop = 0;
	textContainer.innerHTML = longDesc;
}

function minimizePreview(element){
	isPreviewExpanded = false;
	previewContainer.className = previewContainer.className.replace(" expand", "");
}


function togglePreview(element){
	if (previewContainer.className.indexOf("expand") != -1 ){
		minimizePreview();
	}else{
		expandPreview(element);
	}
}

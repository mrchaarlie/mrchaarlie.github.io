# Welcome to Framer

# This is all CoffeeScript. Learn here: http://framerjs.com/learn.html#coffeescript

# Drop an image on the preview screen to create an image layer, or use the generator to import assets from Sketch or Photoshop


header = new Layer 
	x:710, y:0, width:58, height:1024, image:"images/header.png", index:20
	
body = new Layer 
	x:0, y:0, width:711, height:1024, image:"images/body.jpg", index:10
	
video = new Layer 
	x:-1000, y:0, width:768, height:1024, image:"images/video.jpg", index:11
	
#

videoHitBox = new Layer
	x: 80
	y: 50
	width: 300
	height: 450
	opacity: 0

videoCloseHitBox = new Layer
	x: 699
	y: 900
	width: 100
	height: 150
	opacity: 0
	
videoHitBox.on Events.Click, ->
	video.animate
		properties: {x:0}
		curve: "bezier-curve"
	videoCloseHitBox.animate

videoCloseHitBox.on Events.Click, ->
	video.animate
		curve: "bezier-curve"
		properties: {x:-1536}

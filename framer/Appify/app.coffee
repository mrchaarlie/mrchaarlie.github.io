# Welcome to Framer

# This is all CoffeeScript. Learn here: http://framerjs.com/learn.html#coffeescript

# Drop an image on the preview screen to create an image layer, or use the generator to import assets from Sketch or Photoshop


header = new Layer 
	x:1536-114, y:0, width:115, height:2048, image:"images/header.png", index:20
	
body = new Layer 
	x:0, y:0, width:1422, height:2048, image:"images/body.png", index:10
	
video = new Layer 
	x:-1536, y:0, width:1536, height:2048, image:"images/video.jpg", index:11
	
#

videoHitBox = new Layer
	x: 198
	y: 125
	width: 520
	height: 859
	opacity: 0

videoCloseHitBox = new Layer
	x: 1446
	y: 1905
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

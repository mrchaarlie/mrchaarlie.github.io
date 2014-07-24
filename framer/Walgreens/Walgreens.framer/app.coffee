
# rows = 4
# cols = 4

# ballSize = 100
# ballMargin = 40
# ballCurve = "spring(300,20,0)"
# startDelta = 200

# [1..rows].map (a) ->
#   [1..cols].map (b) ->
#     ball = new View
#       x: b * (ballSize + ballMargin)
#       y: a * (ballSize + ballMargin) + startDelta
#       width:  ballSize 
#       height: ballSize
#       opacity: 0

#     R1 = 240 / cols * a 
#     G1 = 220 / rows * b 
#     B1 = 200 
    
#     ball.style =
#       backgroundColor: "rgba(#{R1},#{G1},#{B1},1)"
#       borderRadius: "50%"
#       border: "4px solid white"
#       lineHeight: ball.height - 5 + "px"

#     ball.html = "#{a}, #{b}"

#     ball.states.add 'fadein',
#       y: a * (ballSize + ballMargin)
#       opacity: 1

#     ball.states.animationOptions =
#     curve: ballCurve

#     ball.states.animationOptions.delay = 0.05 * a + 0.05 * b
#     ball.states.switch 'fadein'

imageLayer = new Layer 
	x:0, y:0, width:1024, height:768
	, image:"images/detailDrug.png"

# pieBG1 = new View
# 	x:70
# 	y:200
# 	width: 180
# 	height: 180
# 	borderRadius: "50%"
# 	backgroundColor: "#ccc"
# 	scale:1.1
# 	opacity:0

# pieBG2 = new View
# 	x:70
# 	y:200
# 	width: 180
# 	height: 180
# 	borderRadius: "50%"
# 	backgroundColor: "#F47E90"
# 	scale:1
# 	opacity:0
	
# pie1 = new View
# 	x:70
# 	y:200
# 	width: 180
# 	height: 180
# 	borderRadius: "50%"
# 	backgroundColor: "#F47E90"
# 	scale:1

pie1 = new Layer 
	x:28,	y:155, width:198, height:198, image:"images/pie.png"
	scale: 0.9
	
pie2= new Layer 
	x:28,	y:155, width:198, height:198, image:"images/pie2.png"
	scale: 0.55, grayscale: 100
	
whiteCenter = new View
	x:36
	y:164
	width: 180
	height: 180
	borderRadius: "50%"
	backgroundColor: "#ffffff"
	scale:0.5

pie1.states.animationOptions = pie2.states.animationOptions =
	curve: 'bezier-curve'
	time: 0.4

pie2.states.animationOptions =
	curve: 'bezier-curve'
	time: 0.35

pie1.states.add
	second: {scale:1.1, grayscale:100, opacity:0.3}
pie2.states.add
	second: {scale:1, grayscale:0}
	
whiteCenter.on Events.Click, ->
# 	pieBG1.states.next()
# 	pieBG2.states.next()
	pie1.states.next()
	pie2.states.next()
		

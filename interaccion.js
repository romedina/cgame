//example adapted from Jeffrey Thompson
var hit = false;
var poly = new Array(8);
var randomPoly = []
function setup() {
	createCanvas(windowWidth,windowHeight);
	collideDebug(true) //enable debug mode

	//generate a uniform sided polygon
  var angle = TWO_PI / poly.length;
  for (var i=0; i<poly.length; i++) {
    var a = angle * i;
    var x = 300 + cos(a) * 100;
    var y = 200 + sin(a) * 100;
    poly[i] = createVector(x,y);
  }

  // create a random polygon
  var a = 0;
  var i = 0;
  /*
  while (a < 360) {
    var x = cos(radians(a)) * random(30,50);
    var y = sin(radians(a)) * random(30,50);
    randomPoly[i] = createVector(x,y);
    a += random(15, 40);
    i += 1;
  }*/

  var xA = new Array(8);
  var yA = new Array(8);

arenaCordsX[0] = 700;
arenaCordsX[1] = 650;
arenaCordsX[2] = 390;
arenaCordsX[3] = 30;
arenaCordsX[4] = 50;
arenaCordsX[5] = 100;
arenaCordsX[6] = 280;
arenaCordsX[7] = 360;
arenaCordsX[8] = 520;
arenaCordsX[9] = 450;

arenaCordsY[0] = 315;
arenaCordsY[1] = 80;
arenaCordsY[2] = 30;
arenaCordsY[3] = 280;
arenaCordsY[4] = 530;
arenaCordsY[5] = 630;
arenaCordsY[6] = 480;
arenaCordsY[7] = 400;
arenaCordsY[8] = 330;
arenaCordsY[9] = 580;

  for(var i=0; i<8 ; i++)
  {
    var x = arenaCordsX[i];
    var y = arenaCordsY[i];
    randomPoly[i] = createVector(x,y);
    //a += 360/8;
  }


}
function draw() {
	background(255);
	 // update random polygon to mouse position
  var mouse = createVector(mouseX, mouseY);
  var diff = mouse.sub(randomPoly[0]);

  for (i=0; i < randomPoly.length; i++) {
    randomPoly[i].add(diff);
  }

	beginShape();
	//draw the polygon from the created Vectors above.
	for(i=0; i < poly.length; i++){
		vertex(poly[i].x,poly[i].y);
	}
	endShape(CLOSE);

	beginShape();
	for(i=0; i < randomPoly.length; i++){
		vertex(randomPoly[i].x,randomPoly[i].y);
	}
	endShape(CLOSE);

	hit = collidePolyPoly(poly,randomPoly,true);
	print("colliding? " + hit);

}
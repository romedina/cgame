var cnv;
var selecFig = false;

function setup()
{
	cnv = createCanvas(width_cnv,height_cnv);
	collideDebug(true) //enable debug mode

	createArena(); // create multiple arenas
	createOutside();
	createFigs(); // create multiple figs

}

function draw()
{

	mouse = createVector(mouseX,mouseY);//Create mouse vector

	drawArena();
	drawOutside();
	drawFigs();

	verValidPos_A();
	
}



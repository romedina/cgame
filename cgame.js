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

	//cgameArena.js
	drawArena();
	//cgameOutside.js
	drawOutside();
	//cgameFigs.js
	drawFigs();

	//cgameInter.js
	listenCollision();

	//colisionEntrePols();

	//placeFig();

	/*
	console.log(
			"hitA: " + hitarea_A +"\n" +
			"hitB: " + hitarea_B +"\n"  + 
			"hitC: " + hitarea_C +"\n"  +
			"hitO: " + hitarea_O 
		);
	*/
	
}



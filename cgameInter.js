var hitarea_A = false;
var hitarea_B = false;
var hitarea_C = false;
var hitarea_O = false; 

function listenCollision(fig){

	hitarea_A = collidePolyPoly(arenaA.poly,figs[0].poly,true);
	hitarea_B = collidePolyPoly(arenaB.poly,figs[0].poly,true);
	hitarea_C = collidePolyPoly(arenaC.poly,figs[0].poly,true);
	hitarea_O = collidePolyPoly(outsideA.poly,figs[0].poly,true);
	
}

function printColision(fig)
{
	if(hitarea_A)
	{
		console.log("figura: " + fig + " colisiona con A");
	}

	if(hitarea_B)
	{
		console.log("figura: " + fig + " colisiona con B");	
	}

	if(hitarea_C)
	{
		console.log("figura: " + fig + " colisiona con C");	
	}

	if (hitarea_O)
	{
		console.log("figura: " + fig + " colisiona con área externa");	
	}		
}


/*
function placeFig()
{
	if(mouseClk){
		if(hitarea_A)
	}
	mouseClk = false;
}*/

/*
function colisionEntrePols(){

	for(var i = 0; i < numFigs; i++){
		console.log(outsideA.detectPol(figs[i].poly));
	}

}
*/


function mouseClicked()
{
	mouseClk = true;
	
}
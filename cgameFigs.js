//FigA

figA_CordsX = new Array(6);
figA_CordsY = new Array(6);

figA_CordsX[0] = 910;
figA_CordsX[1] = 900;
figA_CordsX[2] = 850;
figA_CordsX[3] = 800;
figA_CordsX[4] = 870;
figA_CordsX[5] = figA_CordsX[0];

figA_CordsY[0] = 100;
figA_CordsY[1] = 80;
figA_CordsY[2] = 60;
figA_CordsY[3] = 130;
figA_CordsY[4] = 160;
figA_CordsY[5] = figA_CordsY[0];

var numLadosFig_A = figA_CordsX.length;


function createFigs()
{
	figA = new Pol(numLadosFig_A,figA_CordsX,figA_CordsY,3);

	figA.createPol();
	figA.selectGroup();
}

function drawFigs()
{
	fill(200,0,0);
	noStroke();
	figA.drawPol();
	figA.dragFig();
}

var collideA = false;

function verValidPos_A(){
	collideA = collidePolyPoly(arenaA.poly,figA.poly,true);
	console.log(collideA);
}

function mouseClicked()
{
	figA.mouseOverFig(collideA);
}






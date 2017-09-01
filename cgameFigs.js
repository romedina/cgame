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

//FigB

figB_CordsX = new Array(10);
figB_CordsY = new Array(10);

figB_CordsX[0] = 970;
figB_CordsX[1] = 965;
figB_CordsX[2] = 950;
figB_CordsX[3] = 955;
figB_CordsX[4] = 938;
figB_CordsX[5] = 930;
figB_CordsX[6] = 940;
figB_CordsX[7] = 950;
figB_CordsX[8] = 960;
figB_CordsX[9] = figB_CordsX[0];

figB_CordsY[0] = 90;
figB_CordsY[1] = 60;
figB_CordsY[2] = 60;
figB_CordsY[3] = 70;
figB_CordsY[4] = 80;
figB_CordsY[5] = 90;
figB_CordsY[6] = 90;
figB_CordsY[7] = 80;
figB_CordsY[8] = 90;
figB_CordsY[9] = figB_CordsY[0];

// Array que contiene todas las figuras
var figs = new Array(9);
var figsCordsX = new Array(9);
var figsCordsY = new Array(9);
var numLadosFigs = new Array(9) 

figsCordsX[0] = figA_CordsX;
figsCordsX[1] = figB_CordsX;


figsCordsY[0] = figA_CordsY;
figsCordsY[1] = figB_CordsY;

numLadosFigs[0]= figA_CordsX.length;
numLadosFigs[1]= figB_CordsX.length;


function createFigs()
{
	for(var i = 0; i < 2; i++){
		figs[i] = new Pol(numLadosFigs[i],figsCordsX[i],figsCordsY[i]);	
	}
	
	for(var i = 0; i < 2;i++){
		figs[i].createPol();	
	}	

	// Grupo A
	figs[0].selectGroup(1);
	figs[1].selectGroup(1);

}

function drawFigs()
{
	fill(200,0,0);
	noStroke();
	for(var i = 0; i < 2;i++){
	figs[i].drawPol();
	figs[i].dragFig();
	}
}








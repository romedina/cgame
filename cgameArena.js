

// Arena A

arenaA_CordsX = new Array(5);
arenaA_CordsY = new Array(5);

arenaA_CordsX[0] = 700;
arenaA_CordsX[1] = 650;
arenaA_CordsX[2] = 520;
arenaA_CordsX[3] = 450;
arenaA_CordsX[4] = arenaA_CordsX[0];

arenaA_CordsY[0] = 315;
arenaA_CordsY[1] = 80;
arenaA_CordsY[2] = 330;
arenaA_CordsY[3] = 580;
arenaA_CordsY[4] = arenaA_CordsY[0];

// Arena B

arenaB_CordsX = new Array(4);
arenaB_CordsY = new Array(4);

arenaB_CordsX[0] = 650;
arenaB_CordsX[1] = 390;
arenaB_CordsX[2] = 520;
arenaB_CordsX[3] = arenaB_CordsX[0];

arenaB_CordsY[0] = 80;
arenaB_CordsY[1] = 30;
arenaB_CordsY[2] = 330;
arenaB_CordsY[3] = arenaB_CordsY[0]; 

// Arena C

arenaC_CordsX = new Array(6);
arenaC_CordsY = new Array(6);

arenaC_CordsX[0] = 390;
arenaC_CordsX[1] = 30;
arenaC_CordsX[2] = 50;
arenaC_CordsX[3] = 360;
arenaC_CordsX[4] = 520;
arenaC_CordsX[5] = arenaC_CordsX[0];

arenaC_CordsY[0] = 30;
arenaC_CordsY[1] = 280;
arenaC_CordsY[2] = 530;
arenaC_CordsY[3] = 400;
arenaC_CordsY[4] = 330;
arenaC_CordsY[5] = arenaC_CordsY[0];

// Arena D

arenaD_CordsX = new Array(5);
arenaD_CordsY = new Array(5);

arenaD_CordsX[0] = 50;
arenaD_CordsX[1] = 100;
arenaD_CordsX[2] = 280;
arenaD_CordsX[3] = 360;
arenaD_CordsX[4] = arenaD_CordsX[0];

arenaD_CordsY[0] = 530;
arenaD_CordsY[1] = 630;
arenaD_CordsY[2] = 480;
arenaD_CordsY[3] = 400;
arenaD_CordsY[4] = arenaD_CordsY[0]; 

var numLadosArena_A = arenaA_CordsX.length;
var numLadosArena_B = arenaB_CordsX.length;
var numLadosArena_C = arenaC_CordsX.length;
var numLadosArena_D = arenaD_CordsX.length;



function createArena()
{
	background(0,0,50);
	

	// arena Objects

	arenaA = new Pol(numLadosArena_A,arenaA_CordsX,arenaA_CordsY,3);
	arenaB = new Pol(numLadosArena_B,arenaB_CordsX,arenaB_CordsY,1);
	arenaC = new Pol(numLadosArena_C,arenaC_CordsX,arenaC_CordsY,2);
	arenaD = new Pol(numLadosArena_D,arenaD_CordsX,arenaD_CordsY,1);

	//arena create polygon, use in setup function
	
	arenaA.createPol();
	arenaB.createPol();
	arenaC.createPol();
	arenaD.createPol();

	arenaA.selectGroup();
	arenaB.selectGroup();
	arenaC.selectGroup();
	arenaD.selectGroup();
}

function drawArena()
{
	//arena draw polygon, use in draw function
	//give different colors to the arenas
	strokeWeight(2);
	stroke(255);
	fill(50,0,0);
	arenaA.drawPol();

	fill(100,100,0);
	arenaB.drawPol();

	fill(50,5,60);
	arenaC.drawPol();

	fill(100,100,0); 
	arenaD.drawPol();
}


// Area Outside of the Arena

//Outside A
outsideA_CordsX = new Array(17);
outsideA_CordsY = new Array(17);

outsideA_CordsX[0] = width_cnv;
outsideA_CordsX[1] = width_cnv;
outsideA_CordsX[2] = 0;
outsideA_CordsX[3] = 0;
outsideA_CordsX[4] = 30;
outsideA_CordsX[5] = 390;
outsideA_CordsX[6] = 650;
outsideA_CordsX[7] = 700;
outsideA_CordsX[8] = 450;
outsideA_CordsX[9] = 520;
outsideA_CordsX[10] = 360;
outsideA_CordsX[11] = 280;
outsideA_CordsX[12] = 100;
outsideA_CordsX[13] = 50;
outsideA_CordsX[14] = 30;
outsideA_CordsX[15] = 0;
outsideA_CordsX[16] = 0;
outsideA_CordsX[17] = outsideA_CordsX[0];

outsideA_CordsY[0] = height_cnv;
outsideA_CordsY[1] = 0;
outsideA_CordsY[2] = 0;
outsideA_CordsY[3] = 280;
outsideA_CordsY[4] = 280;
outsideA_CordsY[5] = 30;
outsideA_CordsY[6] = 80;
outsideA_CordsY[7] = 315;
outsideA_CordsY[8] = 580;
outsideA_CordsY[9] = 330;
outsideA_CordsY[10] = 400;
outsideA_CordsY[11] = 480;
outsideA_CordsY[12] = 630;
outsideA_CordsY[13] = 530;
outsideA_CordsY[14] = 280;
outsideA_CordsY[15] = 280;
outsideA_CordsY[16] = height_cnv;
outsideA_CordsY[17] = outsideA_CordsY[0];

var numLadosOutside_A = outsideA_CordsX.length;

function createOutside()
{
	outsideA = new Pol(numLadosOutside_A,outsideA_CordsX,outsideA_CordsY,"o");
	outsideA.createPol();
	outsideA.selectGroup();
}

function drawOutside()
{
	fill(0,0,50);
	noStroke();
	outsideA.drawPol();
}



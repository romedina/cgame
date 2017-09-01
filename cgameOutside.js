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
	outsideA.selectGroup(4);
}

function drawOutside()
{
	fill(0,0,50);
	noStroke();
	outsideA.drawPol();
}
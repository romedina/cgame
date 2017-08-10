class Pol{
	
	// _sides = number of sides
	//_cordsX = array of X cords
	//_cordsY = array of Y cords

	constructor(_sides,_cordsX,_cordsY,_group)
	{
		this.sides = _sides;
		this.poly = new Array(this.sides);
		this.cordsX = _cordsX;
		this.cordsY = _cordsY;
		this.diff = 0;
		this.mouseOver = false;
		this.over = false;
		this.group = _group;
		this.a = false;
		this.b = false;
		this.c = false;
		this.o = false;
	}

	// create Polygon, use this method in setup function
	createPol()
	{
	  	for (var i=0; i < this.sides; i++) {
	    	var x = this.cordsX[i];
	    	var y = this.cordsY[i];
	    	this.poly[i] = createVector(x,y);
	  	}
	}

	//draw Polygon, use this method in draw function
	drawPol()
	{
		beginShape();
			//draw the polygon from the created Vectors above.
			for(var i=0; i < this.sides; i++)
			{
				vertex(this.poly[i].x,this.poly[i].y);
			}
		endShape();
	}

	detectMouse(){
		this.mouseOver = collidePointPoly(mouseX,mouseY,this.poly,true);
		return(this.mouseOver);
	}
	
	movePol()
	{
		this.diff = mouse.sub(this.poly[0]);
		for (var i = 0; i < this.sides; i++) {
    		this.poly[i].add(this.diff);
  		}
	}

	mouseOverFig(soltar)
	{
		if(this.detectMouse()){
			this.over = true;
		} else if(soltar){
			this.over = false;
		}
	}

	dragFig(){
		if(this.over){
			this.movePol();	
		}
	}

	selectGroup(){
		switch(this.group) {
		    case 1:
		        this.a = true;
		        break;
		    case 2:
		        this.b = true;
		        break;
		    case 3:
		        this.c = true;
		        break;
		    case 4:
		    	this.o = true;
		    	break;

		}
	}

}
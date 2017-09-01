class Pol{
	
	/*
		El constructor contiene los siguientes datos:

		_sides = input numero de lados
		_cordsX = input arreglo de coordenadas X
		_cordsY = input arreglo de coordenadas Y
		this.sides = numero de lados;
		this.poly = arreglo vacío que despues contendra las
					coordenadas de X y Y;
		this.cordsX = arreglo coordenadas X;
		this.cordsY = arreglo coordenadas Y;
		this.diff = diferencia entre el mous y la figura;
		this.mouseOver = booleano de si el mouse esta sobre
						la figura;
		this.over = booleno si el mouse esta sobre, permite
		agarrar y soltar;
		this.group = Conjunto al que pertenece la figura;
		this.a = pertenece al conjunto A booleano;
		this.b = pertenece al conjunto B booleano;
		this.c = pertenece al conjunto C booleano;
		this.o = pertenece al conjunto O booleano;
	*/

	constructor(_sides,_cordsX,_cordsY,_group)
	{
		this.hit = false;
		this.sides = _sides;
		this.poly = new Array(this.sides);
		this.cordsX = _cordsX;
		this.cordsY = _cordsY;
		this.diff = 0;
		this.mouseOver = false;
		this.over = false;
		this.a = false;
		this.b = false;
		this.c = false;
		this.o = false;
	}

	/*
		createPol()

		Asigna lsos valores de entrada al vector
		polyy[i]
	*/
	createPol()
	{
	  	for (var i=0; i < this.sides; i++) {
	    	var x = this.cordsX[i];
	    	var y = this.cordsY[i];
	    	this.poly[i] = createVector(x,y);
	  	}
	}

	/*
		drawPol()
		
		Dibuja en el método draw, el poligono de acuerdo
		al vector de entrada guardado en poly[]. Para ver
		el poligono, este metodo debe ser llamado en el método
		draw().
	*/
	
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

	/*
		detectMouse()

		detecta si el mouse está dentro del area del
		poligono . Regresa un valor booleano.
	*/

	detectMouse(){
		this.mouseOver = collidePointPoly(mouseX,mouseY,this.poly,true);
		return(this.mouseOver);
	}

	detectPol(_poly){

		this.hit  = collidePolyPoly(_poly,this.poly,true);
		return this.hit;

	}

	/*
		movePol()

		Permite mover el vector de aristas del
		poligono sin que se modifique la forma
	*/
	
	movePol()
	{
		this.diff = mouse.sub(this.poly[0]);
		for (var i = 0; i < this.sides; i++) {
    		this.poly[i].add(this.diff);
  		}
	}

	/*
		mouseOverFig(soltar)

		· Permite mover la figura si el mouse esta dentro
		del área del póligo.

		· Permite soltar la figura si el input soltar es
		true. Estoy usando esta condicion para detectar en que
		áreas se puede soltar y en cuales no
	*/

	mouseOverFig(soltar)
	{
		if(this.detectMouse()){
			this.over = true;
		} else if(soltar){
			this.over = false;
		}
	}

	/*
		dragFig()
		si this.over es true, entonces se puede
		arrastrar la figura
	*/

	dragFig(){
		if(this.over){
			this.movePol();	
		}
	}

	/*
		selectGroup()
		asigna el grupo al que pertenece
		el poligono
	*/

	selectGroup(group){
		switch(group) {
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

	/*
		printGroup()

		regresa el valor del conjunto al que pertenece:
			A
			B
			C 

	*/

	printGroup(){
		if(this.a){
			return "a";
		}else if(this.b){
			return "b";
		}else if(this.c){
			return "c";
		}else if(this.o){
			return "area externa";
		}
	}

}
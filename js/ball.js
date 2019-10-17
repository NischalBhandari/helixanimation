function ball(canvas,ctx,position,yposition,color){
	this.canvas=canvas;
	this.ctx=ctx;
	this.color=color;
	this.position=position;
	this.yposition=yposition;
	this.x=this.position*50+10;
	this.y=this.yposition+10;
	this.alternativeCounter=20;
	this.counter=0;
	this.ycounter=0;
	var that=this;
	this.dy=1;
	this.radius=10;
	this.init=function(){
		this.ctx.beginPath();
		this.ctx.fillStyle=this.color;
		this.ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
		this.ctx.fill();

		return this;
	}
	this.collide=function(){
		if(this.radius<1){
			this.dy*=-1;
		}
		if(this.radius>10){
			this.dy*=-1;

	}
		}
	this.move=function(orientation){
		if(orientation){
		that.counter+=1;
		if(that.counter%1000==0){
			that.counter=0;
		}
		if(that.counter>that.position){
		that.radius+=that.dy;
	}
	}
	else if(!orientation){
		that.alternativeCounter-=1;
		if(that.alternativeCounter<-100){
			that.alternativeCounter=-100
		}
		if(that.alternativeCounter<that.position){
		that.radius+=that.dy;
	}
	}

	}
/*			setTimeout	(function(){
				that.radius	+=that.dy;
			},this.yposition*200)*/
		
	}

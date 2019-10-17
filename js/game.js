;(function(){


function MainLoop(){
	this.canvasClass=document.getElementsByClassName('canvas-class');
	this.canvas=this.canvasClass[0];
	this.ctx=this.canvas.getContext('2d');
	this.FPS=60;
	var that=this;
	this.isCos=false;
	this.FRAME_RATE=1000/this.FPS;
	this.array=[];
	this.secondArray=[];
	for(var i=0;i<20;i++){
		for(var j=0;j<5;j++){
				var ballObject=new ball(this.canvas,this.ctx,i,(j+5)*20+Math.sin(i*(1-0.8))*50,'green').init();
	this.array.push(ballObject);
		}

	}
	for(var i=0;i<20;i++){
		for(var j=0;j<5;j++){
				var newObject=new ball(this.canvas,this.ctx,i,(j+5)*20+Math.sin(i*0.8)*50,'green').init();
	this.secondArray.push(newObject);
		}

	}
	setInterval(function(){
		that.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
		for(var j=0;j<100;j++){	

		that.array[j].move(true);
		that.array[j].init();
		that.array[j].collide();
		}
	for(var j=0;j<100;j++){	

		that.secondArray[j].move(false);
		that.secondArray[j].init();
		that.secondArray[j].collide();
		}

	},100);
}
new MainLoop();
})()
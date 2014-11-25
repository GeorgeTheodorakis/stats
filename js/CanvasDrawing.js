var drawOnCanvas = function(canvas, probModel){
	var fillColor = "#44aa22";
	var outlineColor = "#225511";
	
	var context = canvas.getContext("2d");
	context.fillStyle=fillColor;
	context.strokeStyle=outlineColor;
	var width = canvas.width;
	var height = canvas.height;
	context.beginPath();
	context.clearRect(0,0,width,height);
	var uniques = probModel.uniques;
	var maxSize = probModel.maxValue;
	var maxValue = probModel.array.length-1;
	probModel.array.forEach(function(size,value){
		var topy = height*(1-size/maxSize);
		var leftx = width*(value-1)/maxValue;
		var rightx = width*(value)/maxValue;
		context.beginPath();
		context.rect(leftx,topy,rightx-leftx,height-topy);
		context.fill();
		context.stroke();
	});
}
var drawCanvases = function(){
	drawOnCanvas(document.getElementById("canvas1"),dice[0].probModel);
	drawOnCanvas(document.getElementById("canvas2"),dice[1].probModel);
}

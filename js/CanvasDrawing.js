var drawOnCanvas = function(canvas, probModel){
	var fillColor = "#44aa22";
	var outlineColor = "#225511";
	
	var context = canvas.getContext("2d");
	context.fillStyle=fillColor;
	context.strokeStyle=outlineColor;
	var width = canvas.width;
	var height = canvas.height;
	var uniques = probModel.uniques;
	var maxSize = probModel.maxValue;
	var maxValue = probModel.array.length;
	probModel.array.forEach(function(size,value){
		var topy = height*size/maxSize;
		var leftx = width*value/maxValue;
		var rightx = width*(value+1)/maxValue;
		context.rect(leftx,topy,rightx-leftx,height-topy);
		context.fill();
		context.stroke();
	});
}
var drawCanvases = function(){
	drawOnCanvas(document.getElementById("canvas1"),dice[0].probModel);
	drawOnCanvas(document.getElementById("canvas2"),dice[1].probModel);
}

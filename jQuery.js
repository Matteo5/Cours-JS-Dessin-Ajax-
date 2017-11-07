var path= [];
Mymouse = false;
var dernierX = 0;
var dernierY = 0;

function drawPath(){
	var ctx = $('#myCanvas')[0].getContext('2d');
	ctx.moveTo(dernierX,dernierY);
	ctx.lineTo(event.offsetX,event.offsetY);
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = 10;
	ctx.stroke();
	dernierX = event.offsetX;
	dernierY = event.offsetY;
}

$('#myCanvas').mousemove(function (){
	if (Mymouse === true){
		path.push([event.offsetX, event.offsetY]);
		drawPath();
	}

})

.mousedown(function(){
	path = [];
	Mymouse = true;
	dernierX = event.clientX;
	dernierY = event.clientY;
})

.mouseup(function (){

	Mymouse = false ;



	var data= {
		path : path,
		strokeColor: "#FF0000",
		lineWidth: 10
	};

	var query = {
		url: 'http://draw.api.niamor.com/paths/add',
		method : 'POST',
		data : data
		
		
	};
	$.ajax(query);

	path = [];
})



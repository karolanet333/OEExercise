
$( document ).ready(function() {
    var c = document.getElementById("logoCanvas");
	var ctx = c.getContext("2d");

	// define the path to plot
	var vertices=[];
	vertices.push({x:70,y:70});
	vertices.push({x:70,y:50});
	vertices.push({x:245,y:10});
	vertices.push({x:245,y:185});
	vertices.push({x:70,y:150});
	//vertices.push({x:70,y:143});

	// calc waypoints traveling along vertices
	function calcWaypoints(vertices){
		var waypoints=[];
		for(var i=1;i<vertices.length;i++){
			var pt0=vertices[i-1];
			var pt1=vertices[i];
			var dx=pt1.x-pt0.x;
			var dy=pt1.y-pt0.y;
			var skip = false;
			var skip2 = false;
			for(var j=0;j<100;j++){
				var x=pt0.x+dx*j/96;
				var y=pt0.y+dy*j/96;
				skip = !skip;
				if (!skip){
					skip2 = !skip2;
				}
				if(!skip && !skip2){
					waypoints.push({x:x,y:y});
				}
				
			}
			
		}
		return(waypoints);
	}

	// calculate incremental points along the path
	var points=calcWaypoints(vertices);


	// variable to hold how many frames have elapsed in the animation
	// t represents each waypoint along the path and is incremented in the animation loop
	var t=1;

	c.addEventListener("click", on_click, false);

	function on_click(e) {
		window.location = "#";
	}

	// start the animation
	animate();


	// incrementally draw additional line segments along the path
	//ctx.beginPath();
	function animate(){
		if(t<points.length-1)
		{
			requestAnimationFrame(animate); 
		} else
		{
		
			ctx.beginPath();
			ctx.moveTo(70, 70);
			ctx.lineTo(70, 50);
			ctx.lineTo(245, 10);
			ctx.lineTo(245,185);
			ctx.lineTo(70,150);
			ctx.lineTo(70,143);
			ctx.lineWidth = 16;
			ctx.strokeStyle = '#009dff';
			ctx.stroke();
			
			fadeInText('open english');
			
			/*var logoCanvas = document.getElementById('logoCanvas');
			logoCanvas.className += " load";*/
			
		}
		// draw a line segment from the last waypoint
		// to the current waypoint
		
		ctx.moveTo(points[t-1].x,points[t-1].y);
		ctx.lineTo(points[t].x,points[t].y);
		ctx.lineWidth = 12;
		ctx.strokeStyle = '#009dff';
		ctx.stroke();
		// increment "t" to get the next waypoint
		t++;
	}


	function fadeInText(text) {

		var alpha = 0,   // full opacity
			interval = setInterval(function () {
				//c.width = c.width; // Clears the canvas
				//ctx.clearRect(0,72, 230, 68);
				//ctx.clearRect(255,0, 600, 600);
				ctx.clearRect(0,0, c.width, c.height);
				
				ctx.beginPath();
				ctx.moveTo(70, 70);
				ctx.lineTo(70, 50);
				ctx.lineTo(245, 10);
				ctx.lineTo(245,185);
				ctx.lineTo(70,150);
				ctx.lineTo(70,143);
				ctx.lineWidth = 16;
				ctx.strokeStyle = '#009dff';
				ctx.stroke();
			
				ctx.lineWidth = 3;
				ctx.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
				var alpha2 = alpha;
				if(alpha2 > 0.5){
					alpha2 = 0.5;
				}
				ctx.strokeStyle = "rgba(80, 80, 80, " + alpha2+ ")";
				ctx.font = "5.2em 'Arial Black'";
				//ctx.fillStyle = 'white';
				ctx.fillText(text,0, 120);
				ctx.strokeText(text,0, 120);
				alpha = alpha + 0.05; // decrease opacity (fade out)
				
				

				
				//ctx.fillText();
				//ctx.stroke();

			}, 80); 
	}
});


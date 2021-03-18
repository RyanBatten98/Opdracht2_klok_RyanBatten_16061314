
function showTime(){
				var date = new Date();
				var h = date.getHours(); // 0 - 23
				var m = date.getMinutes(); // 0 - 59
				var s = date.getSeconds(); // 0 - 59
				var session = "AM";
				
				if(h >= 23){
					h = h - 23;
					session = "PM";
				}

				if(h == 0){
					h = 23;
				}

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				var time = h + ":" + m + ":" + s + " " + session;
				document.getElementById("MyClockDisplay").innerText = time;
				document.getElementById("MyClockDisplay").textContent = time;

				setTimeout(showTime, 1000);
				
			
			if(h <12){
				var greeting = "Goedemorgen" + " Pluk de dag!";
			}

			if(h >=12 && h <=18){
				var greeting = "Goedemiddag";
			}
			
			if(h >= 18 && h <=24){
				var greeting ="Goede avond" + " Slaapwel";
			}
			document.getElementById("greeting").innerHTML = greeting;
			}

			showTime();
			
	
	
			

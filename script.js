function getTime () { 
			var date = new Date(); 
			var hours = date.getHours(); 
			var minutes = date.getMinutes(); 
			var seconds = date.getSeconds(); 
			hours = ((hours < 10) ? " 0" : " ") + hours;
			minutes = ((minutes < 10) ? ":0" : ":") + minutes; 
			seconds = ((seconds < 10) ? ":0" : ":") + seconds; 
			var myHour = document.getElementById("my-hour");
			myHour.textContent = hours + minutes + seconds;
			setTimeout("getTime()",1000); 
			
		}
		getTime();
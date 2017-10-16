var paused_count =0;
var resumed_count = 0;
var launched_count = 0;
var click_count = window.localStorage.getItem("clicker");

document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
    $("#clicked").text("This text clicked: " + click_count);
    
}


// device APIs are available
//
    function onDeviceReady() {
	
	document.addEventListener("resume", onResume, false);
	document.addEventListener("pause", onPause, false);
	
	launched_count++;
	updateDisplay();
	    
	alert("device ready");
        
        
    }
    
    function clickMe()
    {
        click_count++;
        windows.localStorage.setItem("clicker", click_count);
        updateDisplay();
    }


    function onPause() {
	
	paused_count++;
	updateDisplay();
	    
	alert("pause");
    }
	

    function onResume() {
		
	resumed_count++;
	updateDisplay();
	    
	alert("resume");
    }

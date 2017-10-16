var paused_count = 0;
var resumed_count = 0;
var launched_count = 0;
var click_count = window.localStorage.getItem("clicker");
var marsBar 
{
    "numberOfBars": "9",
    "totalweight": "354.6g",
    "nutritionInformation": 
    {
        "energy": 
        {
            "per100g": "1883kJ", "Per39.4g": "742kJ", "%OfReferenceIntake": "9%"
        }
        "fat": 
        {
            "per100g": "16.7g", "Per39.4g": "6.6g", "%OfReferenceIntake": "9%"
        }
        "carboHydrate": 
        {
            "per100g": "69.3", "Per39.4g": "27.3g", "%OfReferenceIntake": "10%"
        }
        "protein": 
        {
            "per100g": "4.4g", "Per39.4g": "1.7g", "%OfReferenceIntake": "3%"
        }
        "salt": 
        {
            "per100g": "0.42g", "Per39.4g": "0.17g", "%OfReferenceIntake": "3%"
        }
    }
}
var marsBarString = JSON.stringify(marsBar);
window.localStorage.setItem(“chocBar”, marsBarString);



document.addEventListener("deviceready", onDeviceReady, false);
		
	
function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
	$("#resumed").text("Application paused: " + paused_count);
	$("#paused").text("Application resumed: " + resumed_count);
    $("#clicked").text("This text clicked: " + click_count);
    $("#chocoBar").text("My favourite bar is: " + window.localStorage.getItem(“chocBar”));
    
}


// device APIs are available
// Runs after the HTML file has been read fully
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
        window.localStorage.setItem("clicker", click_count);
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

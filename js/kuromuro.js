const dataURL = "https://api.myjson.com/bins/jcmhn"; // just a handler for URL from we get the object text as a JSON
const inputNames = ["var1", "var2", "var3", "var4", "var5", "var6", "speach"]

function handleButton() { 
	$.getJSON(dataURL, handleData);//runs function getJSON, that takes a massive from the link in dataUrl and gives it to the function handleData as an argument "data"
}

function handleData(massiveText) { //takes the massive as an argument massiveText
	let finalText = "";

	
	function textCreate(itemOfMassive) { 
//takes an argument itemOfMassive and creates an object in valuesFromForm variable with this given argument
		let valuesFromForm = {} 
 inputNames.forEach(function(inputName) {
 //creates an object valuesFromForm and takes its keys from massive inputNames 
 //and storing in it values from form
		valuesFromForm[inputName] = $("input[name=" + inputName + "]")[0].value

	});
		for (key in valuesFromForm) {
//replaces the text in the items of massive "massiveText" that corresponds to the 
//names of "valuesFromForm" object's keys
		itemOfMassive = itemOfMassive.replace("{" + key + "}", valuesFromForm[key]); 
		}
		
		finalText = finalText + itemOfMassive + "<br>"; //<br> is needed to start every string after in new line
	}
	massiveText["text"].forEach(textCreate); // takes each element of "text" massive and gives it to the function "textCreate" to log them as strings in finalText
	$("div#result").html(finalText); //shows the value of finalText in the html element with id #result
}

function init() {//after click on html element with #button-fetch id runs the function "handleButton"
	$("#button-fetch").click(handleButton);
}

$(document).ready(init); //runs the "init" function after the page loaded completely

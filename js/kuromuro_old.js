const dataURL = "https://api.myjson.com/bins/jcmhn"; // just a handler for URL from we get the object text as a JSON


function handleButton() { //runs function getJSON, that takes a massive from the link in dataUrl and gives it to the function handleData as an argument "data"
	$.getJSON(dataURL, handleData);
}


function handleData(data) { //takes the massive as an argument data
	let finalText = ""; 
	let var1 = $("input[name=var1]")[0].value; //finds an html input element with "name=var1" and stores its value (that was typed into form by user) in variable "var1"
	let var2 = $("input[name=var2]")[0].value;
	let var3 = $("input[name=var3]")[0].value;
	let var4 = $("input[name=var4]")[0].value;
	let var5 = $("input[name=var5]")[0].value;
	let var6 = $("input[name=var6]")[0].value;
	let speach = $("input[name=speach]")[0].value;

	function textCreate(item) { //takes an argument item and creates a sring in finalText variable with this given argument
		item = item.replace("{var1}", var1);//finds the text {var1} in the string item and replaces it with the text that stored var1
		item = item.replace("{var2}", var2);
		item = item.replace("{var3}", var3);
		item = item.replace("{var4}", var4);
		item = item.replace("{var5}", var5);
		item = item.replace("{var6}", var6);
		item = item.replace("{speach}", speach);
		
		finalText = finalText + item + "<br>"; //<br> is needed to start every string after in new line
	}
	data["text"].forEach(textCreate); // takes each element of "text" massive and gives it to the function "textCreate" to log them as strings in finalText
	$("div#result").html(finalText); //shows the value of finalText in the html element with id #result
}

function init() {//after click on html element with #button-fetch id runs the function "handleButton"
	$("#button-fetch").click(handleButton);
}

$(document).ready(init); //runs the "init" function after the page loaded completely

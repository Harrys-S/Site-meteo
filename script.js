let calleSuccess = function(data) {
	console.log("donnees meteo", data)
	let element = document.getElementById("result");
	let element2 = document.getElementById("result2");
	let element3 = document.getElementById("result3");
	element.innerHTML = "La température est de: "+ data.main.temp + "°C";
	element2.innerHTML = "Dominant: "+ data.weather[0].main;
	element3.innerHTML = "Description: "+ data.weather[0].description;
	let body = document.queryselestor("body");
	let x = data.weather[0].main;
	body.setAttribute("style", "background-image: url('" + x + ".jpg')");
}

function buttonClick() {
	let url = "https://api.openweathermap.org/data/2.5/weather?q=";
	let key = "&lang=fr&units=metric&appid=3f0792fc888059276dc12063b484af4d";
	let ville = document.getElementById("city").value;
	url += ville + key;
	$.get(url, calleSuccess).fail(function() {
		alert("error");
	})
}
let input = document.getElementById("city");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && input.value != ""){
        buttonClick();
        input.focus();
        input.select();
    }
});

function buttonClick() {
	let url = "https://api.openweathermap.org/data/2.5/weather?q=";
	let key = "&lang=fr&units=metric&appid=3f0792fc888059276dc12063b484af4d";
	let ville = document.getElementById("city").value;
	url += ville + key;
    fetch(url)
        .then(response => response.json())
        .then(function callSuccess(data){
            console.log(data);
            let element = document.getElementById("result");
            let element2 = document.getElementById("result2");
            let element3 = document.getElementById("result3");
            element.innerHTML = "La température est de: "+ data.main.temp + "°C";
            element2.innerHTML = "Dominant: "+ data.weather[0].main;
            element3.innerHTML = "Description: "+ data.weather[0].description;
            img_src = data.weather[0].main;
            let body = document.querySelector("body");
            body.setAttribute("style", "background-image: url('" + img_src + ".jpg')");
            console.log(img_src);
        })
        .catch(function (error) {
            console.error(error);
            alert("Ville invalide");
        });
}

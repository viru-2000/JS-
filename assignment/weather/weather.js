"use strict";

document.getElementById("btn").onclick = function () {
    // alert("click")

    const city = document.getElementById("City").value;
    const unit = document.getElementById("unit").value;

    const apikey = "e412eb53c20df98c5a46dd3d20bce46f";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apikey}`;

    document.getElementById("weather").innerHTML = "";
    document.getElementById("error").innerHTML = "";

    const xhr = new XMLHttpRequest();

    xhr.open("GET", apiurl, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            displayWeather(data, unit);
        } else {
            document.getElementById("error").innerHTML = "something went wrong";
        }
    };

    xhr.onerror = function () {
        document.getElementById("error").innerHTML = "An error occurred";
    };
    xhr.send();
};

function displayWeather(data, unit) {
    const container = document.getElementById("weather");
    const tempUnit = unit === "cel" ? "C" : "F";

    const weatherHtml = `
<h2>weather in  ${data.name}</h2>
<p><b>temperature</b>  ${data.main.temp}${tempUnit}</p>
<p><b>Condition</b>  ${data.weather[0].desciption}</p>
p
    
    `;
}

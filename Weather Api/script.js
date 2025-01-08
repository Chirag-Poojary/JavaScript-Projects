const apiKey = 'e2ac926db7c9a1e95372501c52faa71a';
const button = document.getElementById("btnsearch");
button.addEventListener("click", getWeather);

async function getWeather(){
    const city = document.getElementById("bar").value;
    if(!city){
        console.log("Invalid input");
        return;
    }
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    try{
        const response = await fetch(url);
        const data = await response.json();
        if(data.error){
            throw new Error();
        }
        displayWeather(data)
    }
    catch(error){
        document.getElementById("hero").innerHTML=`<p style="color: tomato; font-family: Segoe UI;">Error: ${error.message}</p>`;
    }
}

function getGradient(description) {
    const gradients = {
        "Clear": "linear-gradient(to bottom, #4A90E2, #87CEEB)",
        "Cloudy": "linear-gradient(to bottom, #B0C4DE, #D3D3D3)",
        "Partly cloudy": "linear-gradient(to bottom, #A9A9A9, #D3D3D3)",
        "Partly Cloudy": "linear-gradient(to bottom, #A9A9A9, #D3D3D3)",
        "Rain": "linear-gradient(to bottom, #5F9EA0, #A9A9A9)",
        "Thunderstorm": "linear-gradient(to bottom, #2C3E50, #4B79A1)",
        "Snow": "linear-gradient(to bottom, #E0E4CC, #FFFFFF)",
        "Fog": "linear-gradient(to bottom, #B6B6B4, #DCDCDC)",
        "Haze": "linear-gradient(to bottom, #8C8C8C, #D9D9D9)",
        "Smoke": "linear-gradient(to bottom, #6E6E6E, #A9A9A9)",
        "Overcast": "linear-gradient(to bottom, #A9A9A9, #808080)",
        "Sandstorm": "linear-gradient(to bottom, #C2B280, #E3DAC9)",
    };
    return gradients[description] || "linear-gradient(to bottom, #4A90E2, #87CEEB)";
}

function getEmoji(description){
    const emojis = {
        "Clear": "☀️",
        "Cloudy": "☁️",
        "Partly Cloudy": "⛅",
        "Partly cloudy": "⛅",
        "Rain": "🌧️",
        "Thunderstorm": "🌩️",
        "Snow": "🌨️",
        "Fog": "🌫️",
        "Haze": "🌁",
        "Smoke": "💨",
        "Overcast": "🌥️",
        "Sandstorm": "🌪️",
    };
    return emojis[description] || "☀️";
}

function displayWeather(data){
    const current = data.current;
    const temp = document.getElementById("temp");
    temp.innerHTML= `<div id="emoji"><img src="${current.weather_icons[0]}" alt="weather icon"></div>
                    <div id="tempnum">${current.temperature}</div>
                    <div id="tempunit">°C</div>`;
    const otherspecs = document.getElementById("otherspecs");
    otherspecs.innerHTML= ` <p id="description">${current.weather_descriptions[0]}</p>
                            <div id="feeltemp">Feels Like: ${current.feelslike} °C</div>
                            <p id="humidity">Humidity: ${current.humidity}%</p>
                            <p id="pressure">Pressure: ${current.pressure} mb</p>
                            <p id="precipitation">Precipitation: ${current.precip} mm</p>
                            <p id="wind">Wind Speed: ${current.wind_speed} km/h</p>`;
    const description = current.weather_descriptions[0];
    const gradient = getGradient(description);
    document.getElementById("hero").style.background = gradient;
    const emoji = getEmoji(description);
    document.getElementById("emoji").textContent = emoji;
}

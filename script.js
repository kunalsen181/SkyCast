const apiKey = "9ed446533444ef01d3a90ec75972b7c8";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let input = document.querySelector("#input");
let search = document.querySelector(".search-icon");
let weatherIcon = document.querySelector(".weather-icon")
let weather = document.querySelector(".weather")

let cont = input.innerText;
console.log(input.innerText);

async function checkWeather(city) {
    let response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        weather.style.display = "none";
        document.querySelector(".cover").style.display = "block";
        document.querySelector(".cover").style.display = "flex";
    }

    else {

        let data = await response.json();
        console.log(data);
    
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
            }

        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }

        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        }

        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }

        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        }

        else if(data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }

        weather.style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".cover").style.display = "none";

    }
}

search.addEventListener("click", () => {
    checkWeather(input.value);
})


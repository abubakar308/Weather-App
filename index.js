const apiKey = "9dd7a4c4fbe8cb0488dfc020bac8af0f";
const city = document.getElementsByTagName("input")[0].value || "Dhaka";
document.getElementById("date").innerHTML = new Date().toLocaleDateString();
document.getElementById("search-button").addEventListener("click", function() {
    const city = document.getElementById("cityInput").value || "Dhaka";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById("cityName").innerHTML = data.name;
            document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + `<sup>°C</sup>`;
            document.getElementById("description").innerHTML = data.weather[0].main;
            if (data.weather[0].main == "Clouds") {
                document.getElementById("weatherIcon").src = "asset/clouds.png";
            } else if (data.weather[0].main == "Clear") {
                document.getElementById("weatherIcon").src = "asset/clear.png";
            } else if (data.weather[0].main == "Rain") {
                document.getElementById("weatherIcon").src = "asset/rain.png";
            } else if (data.weather[0].main == "Snow") {
                document.getElementById("weatherIcon").src = "asset/snow.png";
            } else if (data.weather[0].main == "Drizzle") {
                document.getElementById("weatherIcon").src = "asset/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
                document.getElementById("weatherIcon").src = "asset/mist.png";
            }

            document.getElementById("humidity").innerHTML = data.main.humidity + "%";
            document.getElementById("description").innerHTML = data.weather[0].description;
            document.getElementById("windSpeed").innerHTML = data.wind.speed + " km/h";
            document.getElementById("visibility").innerHTML = data.visibility + " m";
        })
        .catch(error => {
            console.error(error);
        });
})

 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

 fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("temperature").innerHTML = Math.round(data.main.temp) + `<sup>°C</sup>`;
        document.getElementById("description").innerHTML = data.weather[0].main;
        if (data.weather[0].main == "Clouds") {
          document.getElementById("weatherIcon").src = "asset/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
          document.getElementById("weatherIcon").src = "asset/clear.png";
        } else if (data.weather[0].main == "Rain") {
          document.getElementById("weatherIcon").src = "asset/rain.png";
        } else if (data.weather[0].main == "Snow") {
          document.getElementById("weatherIcon").src = "asset/snow.png";
        } else if (data.weather[0].main == "Drizzle") {
          document.getElementById("weatherIcon").src = "asset/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
          document.getElementById("weatherIcon").src = "asset/mist.png";
        }
    
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("description").innerHTML = data.weather[0].description;
        document.getElementById("windSpeed").innerHTML = data.wind.speed + " km/h";
        document.getElementById("visibility").innerHTML = data.visibility + " m";
      })
      .catch(error => {
    
        console.error(error);
      });
    
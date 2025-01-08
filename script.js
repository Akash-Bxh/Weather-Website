document.addEventListener("DOMContentLoaded", () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    const getWeather = (city) => {
        document.getElementById("cityName").innerHTML = city;
        fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                document.getElementById("temp").innerHTML = response.temp;
                document.getElementById("max_temp").innerHTML = response.max_temp;
                document.getElementById("min_temp").innerHTML = response.min_temp;
                document.getElementById("feels_like").innerHTML = response.feels_like;
                document.getElementById("humidity").innerHTML = response.humidity;
                document.getElementById("sunrise").innerHTML = response.sunrise;
                document.getElementById("sunset").innerHTML = response.sunset;
                document.getElementById("wind_speed").innerHTML = response.wind_speed;
            })
            .catch(err => console.error(err));
    };

    document.getElementById("submit").addEventListener("click", (e) => {
        e.preventDefault();
        const city = document.getElementById("city").value;
        getWeather(city);
    });

    // Initial call to display weather for Delhi on page load
    getWeather("Delhi");
});

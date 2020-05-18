/**
 * Function to handle the logic
 */

function getData(){
    if (getCity().length == 0 && getZipCode().length == 0){
        alert("Please fill atleast one textfield!");
    }
    else if (getCity().length > 0){
        showDataWithCityName();
    }
    else if (getCity().length > 0 && getZipCode().length > 0){
        showDataWithZIP();
    }
    else{
        showDataWithZIP();
    }
}

/**
 * Function which shows the weather data by city name
 */
function showDataWithCityName(){
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + getCity() + "&units=metric&appid=" + getAPIKey(), showdata = function(data){

    // Getting the icon from the JSON object as String
    var icon = "https:/openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    // Getting the Temperatue from the JSON object
    var temperature = Math.floor(data.main.temp);
    // Getting the weather status from the JSON object
    var weatherStatus = data.weather[0].main;
    // Getting the wind speed from the JSON object
    var windspeed = data.wind.speed;

    // In die class "weather-icon" in der index HTML packen wir das att(src, icon) rein
    $(".weather-icon").attr("src", icon);
    $(".weather-status").text(weatherStatus);
    $(".temperature").text(temperature +" °C");
    $(".city-name").text(getCity());
    $(".wind-speed").text(windspeed);
});
}

/**
 * Function which shows the weather data by ZIP code
 */
function showDataWithZIP(){
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?zip=" + getZipCode() + "," + getCountry() + "&units=metric&appid=" + getAPIKey(), showdata = function(data){
    console.log(data)
        // Getting the icon from the JSON object as String
        var icon = "https:/openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        // Getting the Temperatue from the JSON object
        var temperature = Math.floor(data.main.temp);
        // Getting the weather status from the JSON object
        var weatherStatus = data.weather[0].main;
        // Getting the wind speed from the JSON object
        var windspeed = data.wind.speed;
        // Getting the city name from the JSON object
        var city = data.name;
    
        // In die class "weather-icon" in der index HTML packen wir das att(src, icon) rein
        $(".weather-icon").attr("src", icon);
        $(".weather-status").text(weatherStatus);
        $(".temperature").text(temperature + " °C");
        $(".city-name").text(city);
        $(".wind-speed").text(windspeed + " m/s");
    });
    }

/**
 * Getter
 */

 // Get text from cityname input
function getCity(){
    var city = document.getElementById("cityName").value;
    return city;
}

// Get text from zipcode input
function getZipCode(){
    var zip = document.getElementById("zipCode").value;
    return zip;
}

// Get selected country from dropdown
function getCountry(){
    var country = document.getElementById("country").value;
    return country;
}

// Get APIKey (you can insert your own key in here)
function getAPIKey(){
    var API_KEY = "e907f577e7c0ef5bf8a4f7ea0562fb66";
    return API_KEY;
}
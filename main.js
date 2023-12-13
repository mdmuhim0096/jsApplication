
const ApiKey = "85402666d288b0da487c88708bc437ef";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather (city){
    const respons = await fetch( ApiUrl + city + `&appid=${ApiKey}` );
    if( respons.status == 404 ){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none"
    }
    else{
        
    const data = await respons.json();
    const weather_icon = document.querySelector(".weather_icon");
    console.log(data);
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    
    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "img/cloud.jpeg"
    }else if(data.weather[0].main == "Clear"){
        weather_icon.src = "img/sun.jpeg"
    }
    else if(data.weather[0].main == "Rain"){
        weather_icon.src = "img/rain.jpeg"
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_icon.src = "img/drizzle.jpeg"
    }
    else if(data.weather[0].main == "Mist"){
        weather_icon.src = "img/sun_cloud.jpeg"
    }

    document.querySelector(".weather").style.display ="block";
    document.querySelector(".error").style.display ="none";

    }
}

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    });

 
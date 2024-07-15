const apiKey="API";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchB=document.querySelector(".search button");
const weatheri=document.querySelector(".weather-icon")
async function CheckWeather(city){
    const response =await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    
    }
    else{
        var data=await response.json();
    
    
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

    if (data.weather[0].main=="Clouds"){
    weatheri.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weatheri.src="images/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weatheri.src="images/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weatheri.src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weatheri.src="images/mist.png";
}
    
document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";
} 
}

searchB.addEventListener("click",()=>{
    CheckWeather(searchBox.value);
})

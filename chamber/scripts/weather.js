const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=4e2177ee75d0475bee028ead2270af2d'

const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();

    let temp = kelvinToFahrenheit(jsObject.main.temp);
    document.querySelector('#temp').textContent = temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description.toUpperCase();
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;

    let wind = jsObject.wind.speed;
    document.querySelector('#wind').textContent = wind;

    let temp_int = parseInt(temp);
    let wind_int = parseInt(wind);
    windchill(temp_int, wind_int);
};

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32;
    return f.toFixed(0);
}

const windchill = (temp, wind) => {
    const windchill = document.querySelector('#windchill');
    const windDegree = document.querySelector('#windDegree');

    windchill.textContent = 'N/A';

    if (temp <= 50 && wind >= 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
        windchill.textContent = chill.toFixed(0);
        windDegree.innerHTML = '&#8457;';
    }
    
}

getWeather();

           
const cityName = 'Kampala'
const APIkey = 'ddb620661d0aaf562c78335649c76072'
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=imperial`
const windSpeedHolder =  document.querySelector('.windSpeedHolder')

getData(API_URL)
async function getData(url){
    const res = await fetch(url)
    const data = await(res.json())
    diplayWeatherData(data)
}

function diplayWeatherData(data){
    const imageWeather = document.querySelector('.imageWeather');
    imageWeather.setAttribute('src', `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    const descHolder = document.getElementById('desc')
    const desc = data.weather[0].description;
        words = desc.split(' ')
    let newDesc = words.map((word) => { 
        return word[0].toUpperCase() + word.substring(1); 
    }).join(" ");
    descHolder.innerHTML = newDesc
    const gradesFahrenheit = document.querySelector('#gradesFahrenheit')
    const windChillHolder = document.querySelector('.windChillHolder')
    const temperature = data.main.temp
    const windSpeed = data.wind.speed
    gradesFahrenheit.innerHTML = temperature.toFixed()
    windSpeedHolder.innerHTML = windSpeed 

    if(temperature <= 50.0 && windSpeed >= 3.0){
        const currentWindChillFahrenheit = windChillFahrenheit(temperature, windSpeed)
        windChillHolder.innerHTML = currentWindChillFahrenheit
        windChillHolder.innerHTML += ' mi/h'
    }
    else{
        windChillHolder.innerHTML = 'N/A'
    }
}

function windChillFahrenheit(temperature, windSpeed){
    windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16
    windChill = windChill.toFixed(2)
    return windChill
}   

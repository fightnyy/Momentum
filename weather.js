const API_KEY="78fe649836d5f04374b2ca477ed82e7c";
const COORDS="coords";

const weather=document.querySelector(".js-weather");


function getWeather(lat,lng)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response)
        {
            return response.json()
        })
    .then(function(json)
        {
            console.log(json)
            const region=json.name;
            const degree=Math.floor(parseInt(json.main.temp));
            const seeing=json.weather[0].main;

            weather.innerText=`${region} @ ${degree} @ ${seeing}`

        });
}

function saveCoords(coordsObj)
{
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position)
{
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}


function handleGeoError()
{
    alert("Can't load current Location");
}


function askForCoords()
{
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords()
{
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null)
    {
        askForCoords();
    }
    else
    {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}


function init()
{
    loadCoords();
}


init();
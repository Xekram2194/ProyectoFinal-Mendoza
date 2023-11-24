
function ShowSelected()
{
    /* Para obtener el valor */
    var depa = document.getElementById("departamento").value;
    var prov = document.getElementById("provincia").value;
    var dist = document.getElementById("distrito").value;
    console.log("1: "+depa+prov+dist);
    
}

var search = document.getElementById("buscarWeather")

function apiConnect(){
    
    const apiKey = "fa404ca08174bdd1aec7373b215d4f66"
    let info =[];
    let pais = "PE"
    let departamento = document.getElementById("departamento").value
    let provincia = document.getElementById("provincia").value
    let distrito = document.getElementById("distrito").value

    //conect openweather API in javascript
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${distrito},${departamento},${pais}&lang=sp&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const temperature = data.main.temp
        const description = data.weather[0].description
        const mains = data.weather[0].main
        const humidity = data.main.humidity
        const windSpeed = data.wind.speed
        console.log("Nuevo: "+mains +" "+temperature+" "+description+" "+humidity+" "+windSpeed)

        const image = document.querySelector(".imageWeather img")
        const temperatureBox = document.querySelector(".temp p")
        const descriptionBox = document.querySelector(".description p")
        const humidityBox = document.querySelector(".nose .humidity")
        const wind = document.querySelector(".nose .wind")

        switch (mains){
            case 'Clear':
                image.src = 'img/wheather/clear.png'
                break;
            case 'Cloud':
                image.src = 'img/wheather/cloud.png'
                break;
            case 'Mist':
                image.src = 'img/wheather/mist.png'
                break;
            case 'Rain':
                image.src = 'img/wheather/Rain.png'
                break;
            case 'Snow':
                image.src = 'img/wheather/snow.png'
                break;
            case 'Haza':
                image.src = 'img/wheather/mist.png'
                break;
            default:
                image.src = 'img/wheather/cloud.png'
        }
        temperatureBox.innerHTML = `${parseInt(temperature)}<span>°C</span>`
        descriptionBox.innerHTML = `En <span > ${distrito} </span> hay ${description}`
        humidityBox.innerHTML = `${humidity}<span>%</span>`
        wind.innerHTML = `${windSpeed}<span>km/h</span>`
    })
    .catch(error => {
        console.log('error fetching data: ', error)
    })

}

search.addEventListener("click", apiConnect)

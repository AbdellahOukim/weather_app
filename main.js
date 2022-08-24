let inputText = document.querySelector('input') ;
let button = document.querySelector('button') ;
let countrey = document.querySelector('.countrey') ;
let city = document.querySelector('.city') ;
let weather = document.querySelector('.weather') ;

let key = "37f4ca373498e04120d2758e0bc294ea" ;

function getWeatherInfo(){
    let request = new XMLHttpRequest() ;

    request.onreadystatechange = function (){
        if (this.readyState === 4 && this.status === 200){
            let info = JSON.parse(this.responseText) ;
            countrey.textContent = info.location.country ;
            city.textContent = info.location.name ;
            weather.textContent = info.current.temperature + ' °C' ;
            inputText.value = "" ;
        }
        }

    request.open("GET" , `http://api.weatherstack.com/current?access_key=${key}&query=${inputText.value}`) ;
    request.send() ;
}

button.addEventListener("click" , getWeatherInfo)
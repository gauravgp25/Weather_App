const form = document.querySelector('form')
const searchField = document.querySelector('.searchField')
const tempratureField = document.querySelector('.temp')
const cityField = document.querySelector('.time_location p')
const dateField = document.querySelector(".time_location span");
const emojiField = document.querySelector(".weather-icon img");
const weatherField = document.querySelector(".weather_condition span");
const feelsLikeField = document.querySelector('.weather-details .detail-item:nth-child(1) .value');
const humidityField = document.querySelector('.weather-details .detail-item:nth-child(2) .value');
const windField = document.querySelector('.weather-details .detail-item:nth-child(3) .value');
const visibilityField = document.querySelector('.weather-details .detail-item:nth-child(4) .value');
const uvIndexField = document.querySelector('.weather-details .detail-item:nth-child(5) .value');
const pressureField = document.querySelector('.weather-details .detail-item:nth-child(6) .value');

let target = 'Mumbai'




form.addEventListener('submit' , search)


function search(e){
    e.preventDefault()
    target = searchField.value
    console.log(target)
    fetchData(target)
    
}



async function fetchData(target){
     let endPoint = `http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${target}&aqi=no`
     let response = await fetch(endPoint)
     let data = await response.json()

     console.log(response)
     console.log(data)

     let currTemp = data.current.temp_c
     let cityName = data.location.name
     let localTime = data.location.localtime
     let condition = data.current.condition.text
     let conditionIcon = data.current.condition.icon
     let feelsLike = data.current.feelslike_c
     let humidity = data.current.humidity
     let wind = data.current.wind_kph
     let visibility = data.current.vis_km
     let uvIndex = data.current.uv
     let pressure = data.current.pressure_mb
     feelsLikeField.innerText = feelsLike + '°'
     humidityField.innerText = humidity + '%'
     windField.innerText = wind + ' km/h ' + data.current.wind_dir
     visibilityField.innerText = visibility + ' km'
     uvIndexField.innerText = uvIndex
     pressureField.innerText = pressure + ' mb'
//      const location = document.querySelector('.location');
//      console.log(location.textContent);
//      console.log(location.textContent.length);
// if (location.textContent.length > 7) {
//   location.style.fontSize = '1.2rem';
// }

     updateWeather(currTemp , cityName , localTime , condition , conditionIcon)
}

function updateWeather(currTemp , cityName , localTime , condition , conditionIcon){
    tempratureField.innerText = currTemp + '°' 
    cityField.innerText = cityName
    dateField.innerText = localTime
    weatherField.innerText = condition
    emojiField.src = conditionIcon

    

    searchField.value=' '

    


}

fetchData(target)
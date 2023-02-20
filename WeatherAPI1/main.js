// object
let weather = {
    apiKey : '8fbae8d3911a9dac6f7c9b5653f4833d',
    fetchWeather : (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            weather.displayWeather(data)
        })
        .catch(error => {
            console.error(error)
        })
    },
    displayWeather : (data) => {
        ////same as the code below, those are just shorter and cleaner
        // const name  = data.name
        // const icon = data.weather[0].icon
        // const description = data.weather[0].description
        // const temp = data.main.temp 
        // const humidity = data.main.humidity
        // const speed = data.wind.speed
        // console.log(name, icon, description, temp, humidity, speed)

        const { name } = data
        const { icon, description } = data.weather[0]
        const { temp, humidity} = data.main 
        const { speed } = data.wind
        // console.log(name, icon, description, temp, humidity, speed)

        document.querySelector('.city').innerText = `Weather in ${name}`
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.description').innerText = `${description}`
        document.querySelector('.temp').innerText = `${temp}°C`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`
        document.querySelector('.weather').classList.remove('loading')
        document.body.style.backgroundImage = 'url(https://source.unsplash.com/1600x900/?'+ name +')'
    },
    search : () => {
        weather.fetchWeather(document.querySelector('.search-bar').value)
    }
}

document.querySelector('.search button').addEventListener('click', function(){
    weather.search()
})

document.querySelector('.search-bar').addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        console.log('I am here')
        weather.search()
    }
})

weather.fetchWeather('Bulacan')
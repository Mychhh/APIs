// weather object
let weather = {
    apiKey: '8fbae8d3911a9dac6f7c9b5653f4833d',
    fetchWeather: (city) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weather.apiKey}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                weather.displayWeather(data)
            })
            .catch(error => {
                document.querySelector('.loading_message').classList.remove('no_location')
                document.querySelector('.invalid_message').classList.add('no_location')
                document.querySelector('.weather').classList.add('loading')
                document.querySelector('.blurred').classList.remove('active')
                console.error(error)
            })
    },
    displayWeather: (data) => {
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
        const { temp, humidity } = data.main
        const { speed } = data.wind
        // console.log(name, icon, description, temp, humidity, speed)

        document.querySelector('.city').innerText = `Weather in ${name}`
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.description').innerText = `${description}`
        document.querySelector('.temp').innerText = `${temp}°C`
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`
        document.querySelector('.weather').classList.remove('loading')

        document.querySelector('.loading_message').classList.remove('no_location')
        document.querySelector('.invalid_message').classList.remove('no_location')
        document.querySelector('.blurred').classList.remove('active')

        weatherBackground(temp)
    },
    search: () => {

        if (document.querySelector('.search-bar').value === '') {
            document.querySelector('.invalid_message').classList.remove('no_location')
            document.querySelector('.weather').classList.add('loading')
            document.querySelector('.loading_message').classList.add('no_location')
            document.querySelector('.blurred').classList.remove('active')
        } else {
            weather.fetchWeather(document.querySelector('.search-bar').value)
        }

    }
}

document.querySelector('.search button').addEventListener('click', function () {
    document.querySelector('.blurred').classList.add('active')
    weather.search()
})

document.querySelector('.search-bar').addEventListener('keypress', function (event) {
    if (event.key === "Enter") {
        document.querySelector('.blurred').classList.add('active')
        weather.search()
    }
})

const weatherBackground = (temperature) => {

    let backGroundImage = ''

    if (temperature < 0) {
        backGroundImage = 'url(images/0.jfif)'
    }
    else if (temperature < 5) {
        backGroundImage = 'url(images/1.jfif)'
    }
    else if (temperature < 10) {
        backGroundImage = 'url(images/2.jfif)'
    }
    else if (temperature < 15) {
        backGroundImage = 'url(images/3.jfif)'
    }
    else if (temperature < 20) {
        backGroundImage = 'url(images/4.jfif)'
    }
    else if (temperature < 25) {
        backGroundImage = 'url(images/5.jfif)'
    }
    else if (temperature < 30) {
        backGroundImage = 'url(images/6.jfif)'
    }
    else if (temperature < 35) {
        backGroundImage = 'url(images/7.jfif)'
    }
    else if (temperature > 35) {
        backGroundImage = 'url(images/8.jfif)'
    }

    document.body.style.backgroundImage = backGroundImage
}

weather.fetchWeather('Bulacan')
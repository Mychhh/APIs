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

        document.querySelector('.weather__city').innerText = `Weather in ${name}`
        document.querySelector('.weather__icon').src = `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.weather__description').innerText = `${description}`
        document.querySelector('.weather__temp').innerText = `${temp}°C`
        document.querySelector('.weather__humidity').innerText = `Humidity: ${humidity}%`
        document.querySelector('.weather__wind').innerText = `Wind speed: ${speed} km/h`
        
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

//geolocation object
let geocode = {
    reverseGeocode: (latitude, longitude) => {
        var api_key = '2e86df76549f45f28cea2729ad70a012';
        // var latitude = '51.0';
        // var longitude = '7.0';

        var api_url = 'https://api.opencagedata.com/geocode/v1/json'

        var request_url = api_url
            + '?'
            + 'key=' + api_key
            + '&q=' + encodeURIComponent(latitude + ',' + longitude)
            + '&pretty=1'
            + '&no_annotations=1';

        // see full list of required and optional parameters:
        // https://opencagedata.com/api#forward

        // http request
        var request = new XMLHttpRequest();
        request.open('GET', request_url, true);

        request.onload = function () {
            // see full list of possible response codes:
            // https://opencagedata.com/api#codes

            if (request.status === 200) {
                // Success!
                var data = JSON.parse(request.responseText);
                //alert(data.results[0].formatted); // print the location
                // console.log(data.results[0])
                // gets the current city location
                weather.fetchWeather(data.results[0].components.city)
            } else if (request.status <= 500) {
                // We reached our target server, but it returned an error

                console.log("unable to geocode! Response code: " + request.status);
                var data = JSON.parse(request.responseText);
                console.log('error msg: ' + data.status.message);
            } else {
                console.log("server error");
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
            console.log("unable to connect to server");
        };

        request.send();  // make the request
    },
    getLocation : function () {
        // gets the data from success return value in getCurrentPosition
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, console.error)
        }else{
            weather.fetchWeather('Philippines')
        }
        function success (data){
            geocode.reverseGeocode(data.coords.latitude, data.coords.longitude)
        }
        
    }
}

geocode.getLocation()

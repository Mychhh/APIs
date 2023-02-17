// returns a promise
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data)
    }, error => {
        console.log(error)
    })
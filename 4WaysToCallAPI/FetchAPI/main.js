// #1
// fetch returns a promise
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    //returns a promise and converts the data into json format
    // return response.json() 
})
.then(json => {
    //gets the data in to json format
    // console.log(json) 
})
.catch( error =>{
    console.error(error)
})

// #2
// Async await
async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let data = await response.json()
    return data
}

getData()
.then(response => {
    console.log(response)
})
.catch(error => {
    console.error(error)
})
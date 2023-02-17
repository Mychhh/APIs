const request = new XMLHttpRequest()

request.open('GET', 'https://jsonplaceholder.typicode.com/posts')
request.send()
request.onload = () => {
    if(request.status === 200){
        // console.log(request)
        console.log(JSON.parse(request.response))
    }else{
        // console.log(request)
        console.log('error ' + request.status)
    }
}
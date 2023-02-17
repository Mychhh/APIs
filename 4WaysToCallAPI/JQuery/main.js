$(document).ready(function (){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        success: function(result){
            console.log(result)
        },
        error: function(error){
            console.log(error)
        }
    })    
})
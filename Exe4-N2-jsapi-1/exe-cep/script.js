fetch()
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log("SUCESSO!!")
    console.log(data)
}
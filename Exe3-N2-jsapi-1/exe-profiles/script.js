// const profile = document.getElementById('root');
// const authors = document.createElement('div');
// authors.setAttribute('class', 'authors');
// profile.appendChild(authors);

// const request = new XMLHttpRequest();

// request.open("GET","https://randomuser.me/api/?results=10", true)
// request.onload = function(){
//     const data = JSON.parse (this.response);
    
//     console.log(data.results)
    
//     data.results.forEach(pessoa=>{
//         const card = document.createElement('div')
//         card.setAttribute('class','card')

//         const nome = document.createElement('p');
//         nome.textContent = pessoa.name.first;

//         authors.appendChild(card) 
//         card.appendChild(nome)

//         const img = document.createElement('img');
//         img.src = pessoa.picture.medium;
//         card.appendChild(img)

//     })
// }
// request.send() 

const koko = document.getElementById('root');
const authors = document.createElement('div');
authors.setAttribute('class', 'authors');
koko.appendChild(authors);

// const request = new XMLHttpRequest();
// request.open('GET', 'https://randomuser.me/api/?results=10', true);
// request.onload = function(){
//     const data = JSON.parse(this.response);
//     console.log(data)



fetch('https://randomuser.me/api/?results=10')
.then(fuction(response){
    return response.json();
})
.then(function(data){
    console.log('SUCESSO!!')
    console.log(data)
})
.catch(function(erro){
    console.log(erro)
})
    if (request.status >=200 && request.status < 400){
        console.log('Ok')

        data.results.forEach(person => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const image = document.createElement('img');
            image.setAttribute('src', person.picture.large);
        
            
            const p = document.createElement('p');
            p.textContent = person.location.city;
          
            const h1 = document.createElement('h1');
            h1.textContent = person.name.title + " " + person.name.first + " " + person.name.last;
          
            const h2 = document.createElement('h2');
            h2.textContent = person.username;

          
            authors.appendChild(card);
            card.appendChild(image)
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(h2)
        
          });
        
    }else{
        console.log('not ok')
    }
}
request.send()


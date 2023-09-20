function showCharacters(){
    /* URL del API */
    const API_URL="https://rickandmortyapi.com/api/character"

    //Hide button
    document.getElementById('btn-characters').classList.add('hide-btn');

    /* Cosume the API. if you don't specify method GET will be default*/
    fetch (API_URL, {method: 'GET'})
    .then((response)=>{
        return response.json()
    })
    .then((jsonReponse)=>{ 
        console.log(jsonReponse)
    


    const template= jsonReponse.results.map((character)=>{
        return (`
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src= ${character.image} alt="${character.name}">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Specie: ${character.species}</li>
          <li class="list-group-item">Status: ${character.status}</li>
          <li class="list-group-item">Gender: ${character.gender}</li>
        </ul>
        <div class="card-body">
          <a href="${character.url}" class="card-link">See more</a>
        </div>
      </div>
        `)
    })

    //We add this to the HTML
    let container = document.getElementById('container');

    for (let i=0; i<template.length; i++){
        container.innerHTML += template[i];
    }
}); 
};  
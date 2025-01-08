document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn").addEventListener("click", fetchData);
});

async function fetchData(){
    try{
        const pokemonName=document.getElementById("name").value.toLowerCase();
        const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if(!response.ok){
            throw new Error("Couldn't fetch!");
        }
        const data=await response.json();
        console.log(data);
        const imageApi=data.sprites.front_default;
        const pokemonimg=document.getElementById("pokeimg");
        pokemonimg.src=imageApi;
        pokemonimg.style.display="block";

    }
    catch(error){
        console.error(error);
    }
}
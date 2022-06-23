const baseURL = 'https://pokeapi.co/api/v2/pokemon/'
const pokemon = document.getElementById('pokemonName')
const buttonSearch = document.getElementById('searchPokemon')
const buttonDelete = document.getElementById('deletePokemon')
const appNode = document.getElementById('app')

buttonSearch.addEventListener('click', insertPokemon)
buttonSearch.addEventListener('touchstart', insertPokemon) //móviles


buttonDelete.addEventListener('click', deletePokemon)
buttonDelete.addEventListener('touchstart', deletePokemon)
//móviles


function insertPokemon(){
    window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`) //pedir al navegador hacer una petición a una página web
    .then(response => {
        if(response.status === 404) {
            alert('This pokemon is not available. Try with another one!')
        } else{
            return response.json()
        }
    })
    .then(responseJSON => {
        const allItems = []

        const result = []

        for(let pokemonInfo in responseJSON){
            result.push([pokemonInfo , responseJSON[pokemonInfo]])
        }

        console.table(result)

        //Crear imagen
        const pokemonImage = document.createElement('img')
        pokemonImage.src = result[14][1].front_shiny

        //Nombre e ID
        const pokemonName = document.createElement('h2')
        pokemonName.innerText = `Name: ${result[10][1]} - ${result[6][1]}`

        const pokemonType = document.createElement('h2')
        pokemonType.innerText = `Type: ${result[16][1][0].type.name}`

        //Contenedor
        const container = document.createElement('div')
        container.append(pokemonImage , pokemonName , pokemonType)

        allItems.push(container)

        appNode.append(...allItems)
    })
}

function deletePokemon(){
    let allPokemon = appNode.childNodes // lista de nodos
    allPokemon = Array.from(allPokemon) // transforme nodelist en un array

    allPokemon.forEach(pokemon => {
        pokemon.remove(pokemon)
    })
}

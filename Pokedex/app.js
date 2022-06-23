let search_input = document.getElementById("search_input")
let container = document.getElementById("container")

let json = JSON.parse(file)
let personajes = json.results


function search() {
  console.log(search_input.value)
  let personaje = search_personaje(search_input.value)
  
  container.innerHTML = `
  <p>
    Nombre: ${personaje.name}<br/>
    Tamaño: ${personaje.height}<br/>
    Género: ${personaje.gender}
  </p>
  
  `
}

function search_personaje(personaje_name) {
  for(let i = 0; i<personajes.length; i++) {
    //console.log(personajes[i].name)
    
    if(personajes[i].name == personaje_name) {
      return personajes[i]
    }
  }
}

console.log(personajes)
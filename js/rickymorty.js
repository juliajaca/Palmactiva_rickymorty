// DEFINIMOS LAS CONSTANTES-> la url de la api, y las opciones (las opciones no se muy bien por qué, Toni no ha explicado mucho)
const API_URL = "https://rickandmortyapi.com/api/character/";
const OPCIONES = { crossDomain: true };


// esta función se va a convertir en un callback
const PERSONAJE = function (personaje) {
  document.write(
    `Hola mi nombre es ${personaje.name}, mi especie es ${
      personaje.species
    }, soy originario de ${personaje.origin.name} ${"<br></br>"}`
  );
};

// LLAMADA A LA API CON JQUERY
function pedirPersonaje(id) {
    //Creamos la URL del personaje a buscar con la URl de la api y la ID introducida por el usuario
  const URL = `${API_URL}${id}`;
  // Traemos la info de la API
  $.get(URL, OPCIONES, PERSONAJE);
}

// FUNCIÓN de interacción con el usuario y comprobación de entrada válida de datos
function pedirPersonajeId() {
  var requestedId = Number(prompt("Escribe la Id del personaje (De 1 a 592)"));
  if (isNaN(requestedId) || requestedId > 592 || requestedId < 1) {
    document.write("Escribe un número en el rango indicado,por favor");
  } else {
    pedirPersonaje(requestedId);
  }
}

//EJECUTAMOS
pedirPersonajeId();
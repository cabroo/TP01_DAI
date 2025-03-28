import axios from "axios";
const APIKEY = "568b3ac0"; 
const OMDBSearchByPage = async (searchText, page = 1) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};



// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
const OMDBSearchComplete = async (searchText) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : []
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
const OMDBGetByImdbID = async (imdbID) => {
let returnObject = {
respuesta : false,
cantidadTotal : 0,
datos : {}
};
// No seas vago, acá hay que hacer el cuerpo de la función!!!
return returnObject;
};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};





let respuesta = await Test();
console.log('respuesta', respuesta);
const Test = async (searchText) => {
const requestString = `http://www.omdbapi.com/?apikey=7c62gb5e&s=cars`;
const apiResponse = await axios.get(requestString);
return apiResponse.data;
};
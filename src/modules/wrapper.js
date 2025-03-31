import axios from "axios";
const APIKEY = "568b3ac0"; 
const OMDBSearchByPage = async (searchText, page = 1) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };


    const requestString = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`;
    const apiResponse = await axios.get(requestString);

    if (apiResponse.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = apiResponse.data.totalResults;
      returnObject.datos = apiResponse.data.Search;
    } else 
    {
      returnObject.respuesta = false;
    }
    } 
    catch (error) 
    {
        console.error("Error al hacer la solicitud:", error);
    }

    return returnObject;

};


const OMDBSearchComplete = async (searchText) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : []

    };


  // No seas vago, acá hay que hacer el cuerpo de la función!!!

  return returnObject;

};


const OMDBGetByImdbID = async (imdbID) => {

  let returnObject = {

      respuesta     : false,

      cantidadTotal : 0,

      datos         : {}

    };


  // No seas vago, acá hay que hacer el cuerpo de la función!!!

  return returnObject;

};


// Exporto todo lo que yo quiero exponer del módulo:

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};
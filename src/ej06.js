let miUrl = null;
let miObjeto = null;
let error = "Error";
// miUrl = 'http://ww.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl (miUrl);
console.log(miObjeto);

function parsearUrl(laURL) 
{ 
    try 
    {
        let urlObj = new URL(laURL);    
        return { 
            host: urlObj.host, 
            pathname: urlObj.pathname, 
            parametros: Object.fromEntries(urlObj.searchParams)
        }
    } 
    catch(error)
    {
        console.log(error.message)
    }

}
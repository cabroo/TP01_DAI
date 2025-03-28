let textoEntrada01 = "Escuela", textoEntrada02 = "ORT"; 
let textoSalida = ""; 

textoSalida = concatInvert(textoEntrada01,textoEntrada02); 
console.clear(); 
console.log(`Texto de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`); 
console.log(`Texto de salida: "${textoSalida}"`); 

function concatInvert (texto1, texto2)
{
    let returnValue = '';
    let cadenaJunta = texto1 + texto2; 
    var separarCadena = cadenaJunta.split(""); 
    var invertirArreglo = separarCadena.reverse(""); 
    returnValue = invertirArreglo.join(""); 
    return returnValue 
}
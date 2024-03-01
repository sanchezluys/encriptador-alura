//  Desarrollador: Luis Sánchez
//  Sanchezluys@gmail.com
//  versión 1.0 Feb 2024
//  Proyecto: encriptador      
//  archivo: app.js
//********************** */
console.log('log: Se inicia app.js sin problemas...');

// declaramos las variables y constantes

const campoTexto    =   document.querySelector("#textoAencriptar");
const campoMensaje  =   document.querySelector("#textoMensaje");


// se inicializa la vista
inicializar();

console.log(campoTexto, campoMensaje);

//** Se define la matriz */
const matriz=
    [
        ["a","ai"],         //indice 0
        ["e","enter"],      //indice 1
        ["i","imes"],       //indice 2
        ["o","ober"],       //indice 3
        ["u","ufat"],        //indice 4
    ];

console.log(matriz);

function btnEncriptar()
{
    const texto= encriptar(campoTexto.value);
    console.log(texto);
    campoMensaje.value=texto;

}

function btnDesencriptar() {
    const texto = desencriptar(campoTexto.value);
    console.log(texto);
    campoMensaje.value = texto;

}

function encriptar(fraseEncriptada)
{
    for(let i=0; i< matriz.length; i++)
    {
        console.log(`Barriendo la matriz, i=${i}`);
        if(fraseEncriptada.includes(matriz[i][0]))
        {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz[i][0],
                matriz[i][1]
            );
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada) {
    for (let i = 0; i < matriz.length; i++) {
        console.log(`Barriendo la matriz, i=${i}`);
        if (fraseEncriptada.includes(matriz[i][1])) {
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz[i][1],
                matriz[i][0]
            );
        }
    }
    return fraseEncriptada;
}

function inicializar(){
    // cada vez que inicialice se hacen los ajustes
}
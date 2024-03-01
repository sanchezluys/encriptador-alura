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
        ["e","enter"],         //indice 0
        ["i","imes"],      //indice 1
        ["a","ai"],       //indice 2
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
    // limpiamos lo dos campos de texto
    texto1 = document.getElementById('textoMensaje');
    texto2 = document.getElementById('textoAencriptar');
    texto1.value="";
    texto2.value="";
    // se inicializan los placeholders
    texto1.placeholder=".....";
    texto2.placeholder = "Ingrese el texto a encriptar";

}

function btnCopiar() {
    //
    console.log('ingreso a copiar');
    const elementoTexto = document.getElementById('textoMensaje');

    if (elementoTexto) {
        // Copia el valor del elemento al portapapeles
        const valor = elementoTexto.value;
        navigator.clipboard.writeText(valor)
            .then(() => {
                alert(`¡Valor "${valor}" copiado al portapapeles!`);
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles:', error);
            });
    } else {
        alert('No se encontró ningún elemento con el ID "textoCampo".');
    }
}
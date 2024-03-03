//  Desarrollador: Luis Sánchez
//  Sanchezluys@gmail.com
//  versión 1.0 Feb 2024
//  Proyecto: encriptador      
//  archivo: app.js
//********************** */
// DECLARACION DE VARIABLES Y CONSTANTES
/******************************** */
const campoTexto    =   document.querySelector("#textoAencriptar");
const campoMensaje  =   document.querySelector("#textoMensaje");
/********************************* */
/**** SE INICIALIZA LA VISTA **** */
/******************************** */
inicializar();
//** Se define la matriz */
const matriz=
    [
        ["e","enter"],          //indice 0
        ["i","imes"],           //indice 1
        ["a","ai"],             //indice 2
        ["o","ober"],           //indice 3
        ["u","ufat"],           //indice 4
    ];
function btnEncriptar()
{
    const texto= encriptar(campoTexto.value);
    campoMensaje.value=texto;
    campoMensaje.hidden=false;
    campoMensaje.rows=10;
    // se oculta el muñeco
    muneco=document.querySelector("#muneco"); 
    muneco.hidden=true;
    // se oultan los mensajes
    mensajeTitulo = document.querySelector("#mensajeSalidaTitulo"); 
    mensajeTexto = document.querySelector("#mensajeSalidaTexto"); 
    mensajeTitulo.hidden=true;
    mensajeTexto.hidden=true;
    // se habilita el boton de copiar
    botonCopiar = document.getElementById('btnCopiar');
    botonCopiar.style.display = "inline";



}
function btnDesencriptar() {
    const texto = desencriptar(campoTexto.value);
    console.log(texto);
    campoMensaje.value = texto;
    campoMensaje.hidden = false;
    muneco = document.querySelector("#muneco");
    muneco.hidden = true;
    // se oultan los mensajes
    mensajeTitulo = document.querySelector("#mensajeSalidaTitulo");
    mensajeTexto = document.querySelector("#mensajeSalidaTexto");
    mensajeTitulo.hidden = true;
    mensajeTexto.hidden = true;
    // se habilita el boton de copiar
    botonCopiar = document.getElementById('btnCopiar');
    botonCopiar.style.display = "inline";

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
    texto2.placeholder = "Ingrese el texto aqui";
    texto2.cols = 5; // 30 columnas
    texto2.rows = 5; // 30 filas

    // se inicializa el titulo
    titulo = document.getElementById('titulo');
    titulo.textContent = "Challenge Alura Encripta G6 One Next Oracle";
    // se inicializa la advertencia
    titulo = document.getElementById('advertencia');
    titulo.textContent = "⚠️ Solo letras minúsculas y sin acentos ";
    // se inicializa el rodapie
    rodapie = document.getElementById('rodapie');
    rodapie.textContent = '\u00A9' + " Copyleft Luis Sánchez sanchezluys 2024";
    // se inicializa el texto titulo de salida
    textoSalidaTitulo = document.getElementById('mensajeSalidaTitulo');
    textoSalidaTitulo.textContent = "Ningún mensaje fue encontrado";
    // se inicializa el texto de salida info
    textoSalidaTexto = document.getElementById('mensajeSalidaTexto');
    textoSalidaTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    // 
    muneco.hidden = false;
    mensajeTitulo = document.querySelector("#mensajeSalidaTitulo");
    mensajeTexto = document.querySelector("#mensajeSalidaTexto");
    mensajeTitulo.hidden = false;
    mensajeTexto.hidden = false;

    // se esconde el mensaje encriptado
    texto1.hidden=true;
    // se esconde el boton de copiar
    btnCopiar = document.getElementById('btnCopiar');
    btnCopiar.innerText ="Copiar";
    btnCopiar.style.display = "none";
    
}
function CopiarPortapapeles() {
    //
    console.log('ingreso a copiar');
    const elementoTexto = document.getElementById('textoMensaje');

    if (elementoTexto) {
        // Copia el valor del elemento al portapapeles
        const valor = elementoTexto.value;
        navigator.clipboard.writeText(valor)
            .then(() => {
                inicializar();
                alert(`¡Valor "${valor}" copiado al portapapeles!`);
                
            })
            .catch((error) => {
                console.error('Error al copiar al portapapeles:', error);
            });
    } 
    else 
    {
        alert('No se encontró ningún elemento con el ID "textoCampo".');
    }
}
function validarTexto(elemento) {
    var texto = elemento.value;
    var textoSinAcentos = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remueve los acentos
    var textoSoloMinusculas = textoSinAcentos.toLowerCase().replace(/[^a-z\s]/g, ""); // Remueve caracteres especiales excepto espacios y convierte a minúsculas
    elemento.value = textoSoloMinusculas; // Actualiza el valor del textarea
}
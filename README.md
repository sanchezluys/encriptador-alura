<!--Desarrollador: Luis Sánchez
    Sanchezluys@gmail.com
    Versión 1.0 Feb 2024 
    Proyecto: encriptador
    archivo: README.md
-->
# Challenger Alura Encripta G6 One Next Education Oracle

![](https://raw.githubusercontent.com/sanchezluys/encriptador-alura/main/images/Logodesktop.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


### Requisitos del reto


- [x] Partes de la vista funcionales
  - [x] Campo de entrada de texto
  - [x] Campo de salida del texto encriptado
- [x] Validaciones
  - [x] Solo minúsculas
  - [x] Solo letras, nada de caracteres
  - [x] No aceptar encriptación de frase vacía
- [x] Responsivo
  - [x] Versión desktop Grande
  - [x] Versión desktop Mediano
  - [x] Versión Tablet Horizontal
  - [x] Versión Tablet Vertical
  - [x] Versión celular
  - [x] Versión celular pequeño
- [x] Estilos de acuerdo al diseño en Figma
  - [x] Colores de fondo
  - [x] Formas
  - [x] Tipos de letras
  - [x] Estilo de botones
- [x] Extras
  - [x] Favicon con imagen de Sonix
  - [x] Efectos en botones al pasar por ellos
  - [x] Se agrega indicador de tamaño de pantalla en el pie de página
  - [x] Se agrega la librería sweet alert, para mejorar visualmente las alertas
- [x] Busg y errores corregidos
  - [ ] Lógica de desencriptar entra en falla con la palabra james o jaimes
  - [ ] Existen variables declaradas como var


Versiones:

    | Número        |  Fecha        | Observaciones                           |
    | ------------- | ------------- | ----------------------------------      |   
    | 1.0.1         | 3/03/2024     | tiene bugs en desencriptar              |
    | 1.0           | 2/03/2024     |                                         |
    



### Funciones principales del código JavaScript

| Nombre de la Función | Descripción                    |
| ------------- | ------------------------------ |
| `encriptar()`      | Encripta el mensaje.       |
| `desencriptar()`   | Desencripta el Mensaje     |
| `inicializar()`   | Inicializa la vista HTML     |
| `copiarPortapapeles()`   | Copia en resultado de la encriptación o desencriptación en el portapapeles del navegador     |
| `validarTexto(elemento)`   | Válida y solo permite letras minúsculas, sin acentos ni caracteres especiales     |
| `actualizarAnchoPantalla()`   | Calcula el tamaño de la pantalla del usuario, para evaluar el comportamiento responsivo     |
| `validarVacio(texto)`   | Revisa si el texto ingresado esta vacío, para no realizar encriptación o desencriptación     |


### QR de contacto:

![](https://raw.githubusercontent.com/sanchezluys/encriptador-alura/main/images/vcard_luys.png)
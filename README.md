### Challenge Alura Encripta

### Retos cumplidos

- [x] Campo de entrada de texto
- [x] Campo de salida del texto encriptado
- [ ] Validaciones
  - [ ] GFM task list 3-1
  - [ ] GFM task list 3-2
  - [ ] GFM task list 3-3
- [ ] Responsive
  - [ ] GFM task list 4-1
  - [ ] GFM task list 4-2
- [ ] Estilos
  - [ ] GFM task list 4-1
  - [ ] GFM task list 4-2

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**Tabla de Contenidos**

[TOCM]

[TOC]

# H1 header

## H2 header

### H3 header

#### H4 header

##### H5 header

###### H6 header

# Heading 1 link [Heading link](https://github.com/pandao/editor.md "Heading link")

## Heading 2 link [Heading link](https://github.com/pandao/editor.md "Heading link")

### Heading 3 link [Heading link](https://github.com/pandao/editor.md "Heading link")

#### Heading 4 link [Heading link](https://github.com/pandao/editor.md "Heading link") Heading link [Heading link](https://github.com/pandao/editor.md "Heading link")

##### Heading 5 link [Heading link](https://github.com/pandao/editor.md "Heading link")

###### Heading 6 link [Heading link](https://github.com/pandao/editor.md "Heading link")



### Characters

----

~~Strikethrough~~ <s>Strikethrough (when enable html tag decode.)</s>
*Italic*      *Italic*
**Emphasis**  **Emphasis**
***Emphasis Italic*** ***Emphasis Italic***

Superscript: X<sub>2</sub>，Subscript: O<sup>2</sup>

**Abbreviation(link HTML abbr tag)**

The <abbr title="Hyper Text Markup Language">HTML</abbr> specification is maintained by the <abbr title="World Wide Web Consortium">W3C</abbr>.

### Blockquotes

> Blockquotes

Paragraphs and Line Breaks

> "Blockquotes Blockquotes", [Link](http://localhost/)。

### Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

`<link>` : <https://github.com>

[Reference link][id/name]

[id/name]: http://link-url/

GFM a-tail link @pandao

### Code Blocks (multi-language) & highlighting

#### Inline code

`$ npm install marked`

#### Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>

Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### Javascript

```javascript
function test(){
 console.log("Hello world!");
}
 
(function(){
    var box = function(){
        return box.fn.init();
    };

    box.prototype = box.fn = {
        init : function(){
            console.log('box.init()');

   return this;
        },

  add : function(str){
   alert("add", str);

   return this;
  },

  remove : function(str){
   alert("remove", str);

   return this;
  }
    };
    
    box.fn.init.prototype = box.fn;
    
    window.box =box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```



### Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

----

### Tables

| Function name | Description                    |
| ------------- | ------------------------------ |
| `help()`      | Display the help window.       |
| `destroy()`   | **Destroy your computer!**     |

| Item      | Value |
| --------- | -----:|
| Computer  | $1600 |
| Phone     |   $12 |
| Pipe      |    $1 |

| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

----

#### HTML entities

&copy; &  &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14;  &times;  &divide;   &raquo;

18&ordm;C  &quot;  &apos;

### TeX(LaTeX)

$$E=mc^2$$

$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$
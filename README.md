

## CARTONES - CASI


"empesar de los contornos e ir hacia adentro primero html y despues css y depues JS"

nos vamos a guiar de la **arquitectura  CSS Minimalista(StyleGuides)**

* `CUSTOM PROPERTIES`
* `RESET`
* `COMPONENTS`
* `UTILITIES`
* `SITE STYLES`


### CUSTOM PROPERTIES




### RESET

cuando vamos de seccion en seccion usamos en el css:

```css
    scroll-behavior: smooth;
```

> `https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior`

TEXTO FLUIDO O RESPONSIVO (fragmento de código copiado de Bootstrap)

```css
h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
```

Este fragmento de código CSS está aplicando un estilo a los elementos `<h1>` y a cualquier elemento con la clase `.h1`. La propiedad `font-size` está utilizando la función `calc()` para calcular el tamaño de la fuente de manera dinámica.

La expresión `calc(1.375rem + 1.5vw)` combina dos unidades de medida:
- `rem`: Unidad relativa al tamaño de la fuente raíz (generalmente el tamaño de la fuente del `<html>`).
- `vw`: Unidad relativa al ancho de la ventana gráfica (viewport width), donde 1vw es igual al 1% del ancho de la ventana.

Esto significa que el tamaño de la fuente será una combinación fija de `1.375rem` más un valor que depende del ancho de la ventana (`1.5vw`). Este enfoque permite que el tamaño de la fuente sea **responsivo**, ajustándose automáticamente según el tamaño de la ventana del navegador¹.


```css
    img{
    max-width: 100%;
    height: auto;
    border: none; /*Mudford*/
    display: block;/*mudford -  elimina esapcios*/
}
```

¡Claro! Este código es una regla CSS que se aplica a los elementos `<img>` en una página web. Aquí te explico cada propiedad:

1. **`max-width: 100%;`**: Esta propiedad asegura que la imagen no exceda el ancho del contenedor en el que se encuentra. Si el contenedor es más pequeño que la imagen, la imagen se reducirá para ajustarse al contenedor.

2. **`display: block;`**: Esto hace que la imagen se comporte como un elemento de bloque, lo que significa que ocupará todo el ancho disponible y se alineará con otros elementos de bloque. Esto también elimina cualquier espacio en blanco que podría aparecer debajo de la imagen si se comportara como un elemento en línea.

3. **`height: auto;`**: Mantiene la proporción original de la imagen al ajustar su altura automáticamente en función de su ancho.

4. **`border: none;`**: Elimina cualquier borde que pueda tener la imagen por defecto.

Este conjunto de reglas es útil para hacer que las imágenes sean responsivas y se ajusten adecuadamente a diferentes tamaños de pantalla y contenedores.

```css
    /* *********************** Custom Properties ************************** */

:root{
    --first-color: #6A280F;
    --first-alpha-color: rgba(106, 40, 15, 0.75);
    --second-color: #EDD9C4;
    --second-alpha-color: rgb(237, 217, 196,0.75);
    --third-color: #576751;
    --third-alpha-color: rgba(87, 103, 81, 0.75);
    --white-color: #fff;
    --gray-light-color: #f3f3f3;
    --gray-color:#ccc;
    --gray-dark-color: #666;
    --black-color: #000;
    --link-color: #6EA8FE;
    --title-color: #333;
    --text-color: #222;
    --white-alpha-color: rgba(255, 255, 255, 0.5);
    --black-alpha-color: rgba(0, 0, 0, 0.5);

    /*tipografia -> importar de google Fonts*/
    --font: "Raleway", sans-serif;
    --header-height: 4rem;
    --max-width: 1200px;
}
/* *********************** Reset ************************** */
html{
    /*modelo de caja: vamos hacer que el tamaño de la caja empieze desde el borde
     y no desde el contenido como es por default por que si lo dejamos desde
     el contenido corremos el riesgo de que cuando asignamos paddings o borders
     pues los tamaños no correspondan*/
    box-sizing: border-box;
    font-family: var(--font); /*definimos la familia de fuente*/
    font-size: 16px; /*tamaño de letra del html explicitamente, ¿Por que?  
    por que como voy a estar utilizando la unidad de medida REM (rem es basado
    en el tamaño de la tipografia de la etiqueta html*/

    /*para la transicion*/
    scroll-behavior: smooth;
}




/*con el selector universal todo los elementos su contenido generado dinamicamente
    con after y before que hereden el tamaño de caja y ¿de quien van a heredar
    el tamaño de caja? del nodo principal que es la etiqueta html
*/
*,
*::after,
*::before{
    box-sizing: inherit; /*hereda*/
}
/*por defecto trae 8 pixeles de margin*/
body{
    margin: 0;
    overflow-x: hidden; /*oculta todo lo que desborda en el eje x (horizontal) oculta la barra de desplazamiento*/
    color: var(--text-color);
}

/*Estilo a los links*/
a{
    color: var(--link-color);
    transition: all 0.5s ease-out;
}

a:hover{
    opacity: 0.75;
}

/*todo los encabezados tienen un poco de margen ariba y abajo dependiendo
    del nivel de encabezado van variando los márgenes, lo que me gusta es
    resetar el margen de los encabezados a 0 y ya yo darle la distancia
    adecuada
*/

h6, h5, h4, h3, h2, h1{
    margin: 0;
}

/*la función calc() para calcular el tamaño de la fuente de manera dinámica.*/

/*De bootstrap */
h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }
  
  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }
  
  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem;
    }
  }
  
  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }
  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }
  
  h5 {
    font-size: 1.25rem;
  }
  
  h6 {
    font-size: 1rem;
  }
  

/*Imagenes Responsivas HACK*/
img{
    max-width: 100%;
    height: auto;
    border: none; /*Mudford*/
    display: block;/*mudford -  elimina esapcios*/
}
/*Estilo a los párrafos*/
p{
    line-height: 1.6rem;
}


/* ************************ -Componentes- *************************** */


/* ************************ -Utilities- *************************** */


/*Sombra para cajas*/
.box-shadow-1{
    /* box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25); */
    box-shadow: .25rem .25rem 1rem rgba(0, 0, 0, 0.25);
}

/*contenedor*/

.container{
  margin-left: auto;
  margin-right: auto;
  max-width: var(--max-width);
}


/* ************************ -Site Styles- *************************** */

```

---

**APARTIR DE AQUI COMENZAMOS A DESARROLLAR LA PÁGINA WEB**


para el boton hamburguesa usamos la libreria: `https://jonsuh.com/hamburgers/`

* mandamos a llamar la libreria de 'hamburguer css'

para eso utilizamos un _cdnjs.com_ y buscamos `hamburgers`

* copiamos el link y lo pegamos al head de nuestro index.

tenemos un problema con el header, esque está descentrado

![header-descentrado](/assets/header-descentrado.png)

```css
.hamburger {
    font: inherit;
    display: inline-block;
    overflow: visible;
    margin: 0;
    padding: 15px;
    cursor: pointer;
    transition-timing-function: linear;
    transition-duration: .15s;
    transition-property: opacity, filter;
    text-transform: none;
    color: inherit;
    border: 0;
    background-color: transparent;
}
```

indagando en el inspector de navegador me encontre este fragmento de código css que tiene la hamburguesa.

EL ICONO CON ANIMACIÓN YA PASO DE MODA CREO Y SERIA MÁS PESADO PARA EL NAVEGADOR INTERPRETARLO ADEMAS QUE ES MUY DIFICIL CENTRARLO (referente seria steam)

BOX ICONS ME DA ERROR EN EL HTML. 

este fragmento lo sacamos de studioManchas

```css
    .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    background-image: var(--bs-navbar-toggler-icon-bg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
}
```

solucion: copiamos el CDN de link de bootstrap-icons y despues copiamos el SVG de el icono deseado.
lo copiamos sin modificar nada, todo lo vamos a modificar desde el CSS.


#### haciendo estilos del Header.

![header](/assets/header.png)

En la sección de **_site styles_**

```css
    .header{
  position: fixed;
  left: 0;
  bottom: 0;

  z-index: 999;
  padding: 1rem;
  width: 100%;
  height: var(--header-height); /*4rems*/
  background-color: var(--second-color);

}

.header> .container{
  height: 2rem; /*le puse altura fija*/
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

#### maquetando icono y Menú Mobile.

En la sección de **_Components_**

**estilos al boton menú (icono)**

![btn-menú](/assets/btn-menu.png)

```css

.menu-btn{
  outline: thin solid var(--first-color);
  border: 0;
  cursor: pointer;
  background-color: var(--second-color);
  display: flex;/*con esto centramos el icono*/
  align-items: center;

  width: 2rem;/*tamaño gemelo 1*/
  height: 2rem; /*tamaño gemelo 2*/
  /* vertical-align: middle; */
}

.menu-btn svg{
  fill: var(--first-color); /*aplicamos relleno a los svg's*/
  width: 2rem; /*tamaño gemelo 1*/
  height: 2rem; /*tamaño gemelo 2*/
}
```
**estilos al logo**
![logo](/assets/logo-styles.png)

En la sección de **_site styles_**

```css
    .logo a{
    color: var(--first-color);
    font-weight: bold;
    font-size: 2rem;
    line-height: normal;
    text-decoration: none; /*quitamos la linea de enlace*/
}
```


**aplicando estilos al menú**

![estilos-menú](/assets/menu.png)

en la seccíon de **_Componentes_**

```css
    .menu {
  position: fixed;
  left: 0;
  bottom: var(--header-height);
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--second-color);

  opacity: 0;
  pointer-events: none;
  transition: opacity 0.5s ease;
}

/*¿Cuando precionemos el menú, esta clase lo vamos a activar con JS?*/
.menu.is-active{ /*debe ir junto*/
  opacity: 1;
  pointer-events: auto;
}

.menu a{
  padding: 1rem; /*pading de 1 rem a los 4 lados*/
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: var(--first-color);
}

/*en el estado hover invertimos los colores*/
.menu a:hover{
  color: var(--white-color);
  background-color: var(--first-color);
}
```


añadimos la clase `none` al icono _close_ ❎

```html
    <svg class="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
```

y en la seccion de **_utilities_** añadimos esta clase

```css
    .none{
  display: none;
}
```


#### Programación menú mobil

crea un archivo JS y vinculaló al index

```javascript
        ((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
        $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click", (e)=>{
        //quiero que al primer elemento hijo en su lista de clases
        //le intercambie la clase "None"
        $btnMenu.firstElementChild.classList.toggle("none"); // primer click
        $btnMenu.lastElementChild.classList.toggle("none"); // segundo click
        $menu.classList.toggle("is-active");

    });

    d.addEventListener("click", (e)=>{
        //objeto= e.target
        //método = matches 
        if (!e.target.matches(".menu a")) return false
        // si el evento que origino el click es un enlace que está dentro del menú
        $btnMenu.firstElementChild.classList.remove("none"); 
        $btnMenu.lastElementChild.classList.add("none"); 
        $menu.classList.remove("is-active");

    })
})(document);
```

#### Maquetando HEADER Y MENÚ para escritorio.

usando la posicion fija en la cabecera para PC _FIXED_ 

![FIXED](/assets/usando-fixed.png)

usaremos el posicionamiento pegajoso(_Stiky_)

¿Cual es la ventaja? a diferencia del position fixed no tapa el contenido que está definido en el html.(guarda su espacio?)

![sticky](/assets/sticky.png)

> "PARA EVITAR PROBLEMAS DE MEDIA QUERIS TE RECOMIENDO QUE LOS PONGAS AL FINAL PARA QUE POR CASCADA HAGA LO QUE TIENE QUE HACER SIN PROBLEMAS" 💀💀 ( al final las media querys) 


el la seccion de **_site-Styles_**

añadimos las media querys (ero al final de esta sección.)

```css
  /* @media screen and (min-width:768px){ */
@media screen and (min-width:48em){

}

@media screen and (min-width:64em){
.header{
  position: sticky;
  top: 0;
  /*al Padding y el Height lo heredas de header mobile*/
}
}
```

añadimos media query al final de la sección de **_componenetes_** para el menú.

```css
@media screen and (min-width: 64rem){ /*respeta espacios entre el AND*/
  .menu-btn{
      display: none;
  }
  .menu{
      position: static;
      opacity: 1;
      width: auto;
      flex-direction: row;
      pointer-events: auto;
  }
  .menu a{
      padding: 0 1rem; /*solo costados*/
  }
  .menu a:last-child{
      padding-right: 0; /*por que el header ya tiene un pading*/
  }
  .menu a:hover{
      background-color: transparent; /*solo las letras cambian de color y no el fondo*/
  }
}
```


#### Maquetando sección Home y componenetes Hero Image.
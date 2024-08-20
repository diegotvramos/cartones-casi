

## CARTONES - CASI


"empesar de los contornos e ir hacia adentro primero html y despues css y depues JS"
 
"y empesar por la verción _mobile_, SIEMPRE"

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
/*para quitar cuadro azul al hacer clic en icono o imagen tipo boton*/
/* (*) atributo css que aplica a todo*/
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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


"siempre vamos maquetando de el más grande a los más pequeño"

> ¡Recomendación! reduce el tamaño de la imgen a 1920px de ancho, el largo lo dejas como está. Esto para que tu página web sea más fluida, ya que al pesar casi 3Mb se veia tembloroso.

```html
  <!-- sección inicio -->
    <section id="inicio">
        <article class="hero-image" style="--hero-image: url(../assets/hero-image.jpg); --hero-attachment:fixed;">
            <aside class="hero-image-opacity" style="--hero-opacity-color: var(--black-alpha-color)">
                <!-- <div class="hero-image-content"> -->
                <div>
                    <h2 class="display-1 hero-image-title" style="--hero-text-color: var(--white-color)">
                        Venta al por mayor
                        <br>
                        Cajas de embalaje
                    </h2>
                    <br>
                    <a href="#contacto" class="btn">CONTÁCTAME</a>
                </div>
            </aside>
        </article>
    </section>
```

En la seccion de **_Components_**

```css
/* ***** HeroImage ***** */
.hero-image{
  background-image: var(--hero-image);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: var(--hero-attachment);
}

.hero-image-opacity{
  width: 100%;
  min-height: 100vh;
  display: flex; /*es como si fuerra fiero aldente, puedes dar la forma que tu quieras*/
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: var(--hero-opacity-color);
}

.hero-image-title{
  color:var(--hero-text-color);
}
```


Cuando necesite que un encabezado se destaque, considere usar un encabezado de visualización , un estilo de encabezado más grande y ligeramente más formal. Es un tipo de Texto Fluido/responsivo

este fragmeto lo saque de Bootstrap.

pegamos en la seccion de: **_Utilities_**

```css
  .display-1 {
  font-size: calc(1.625rem + 4.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-1 {
    font-size: 5rem;
  }
}

.display-2 {
  font-size: calc(1.575rem + 3.9vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-2 {
    font-size: 4.5rem;
  }
}

.display-3 {
  font-size: calc(1.525rem + 3.3vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-3 {
    font-size: 4rem;
  }
}

.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}

.display-5 {
  font-size: calc(1.425rem + 2.1vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-5 {
    font-size: 3rem;
  }
}

.display-6 {
  font-size: calc(1.375rem + 1.5vw);
  font-weight: 300;
  line-height: 1.2;
}
@media (min-width: 1200px) {
  .display-6 {
    font-size: 2.5rem;
  }
}
```

resultado: 

![caputura-hero-image](/assets/captura-hero-image.png)

**Dando estilos al boton (button)**

en la sección de **_Utilities_**

```css
.btn{
    border-radius: 0.5rem;
    padding: 1rem;
    /*los enlaces trabajan en linea pero quiero que tenga caracteristicas de linea y bloque*/
    display: inline-block;
    width: 200px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: var(--white-color);
    background-color: var(--first-color);
}
```

#### Marcado HTML seccion Acerca.

Según la **Encuesta Nacional sobre Disponibilidad y Uso de las Tecnologías de la Información y Comunicación en los Hogares (ENDUTIH 2018, INEGI)**, aquí están los porcentajes de uso de dispositivos electrónicos en México:

- **Celular**: El **92.7%** de los usuarios de internet se conecta a través de un smartphone.
- **Computadora portátil**: El **32.6%** utiliza una laptop.
- **Computadora de escritorio**: El **32.0%** se conecta a través de una PC de escritorio.
- **Tablet**: El **17.8%** utiliza una tablet¹.

Es importante mencionar que estos porcentajes pueden variar según la edad y otros factores. Por ejemplo, los grupos más jóvenes tienden a usar más el celular, mientras que las computadoras de escritorio y portátiles son más comunes en adultos². Las laptops suelen ser ideales para trabajos más completos, mientras que las tablets ofrecen portabilidad y aplicaciones en un espacio más pequeño³⁴. ¡Espero que esta información te sea útil! 😊

por eso debemos dar más prioridad al diseño mobil y pc y por último a la tablet.


```html
  <!-- sección Acerca -->
     
    <section id="acerca" class=" section container ">
        <article class="text-center">
            <aside class="">
                <h1>Cartones Casi</h1>
                <h6>Venta de cartones para embalaje</h6>
            </aside>
            <p>Cartones CASI se ha convertido en un socio de confianza para las personas que buscan <b>soluciones</b> de embalaje y materia prima para diversos productos.</p>
            <p>Ofrecemos una amplia gama de cajas, láminas y cartones grandes de segunda mano para todo tipo de uso, también ofrecemos entregas a domicilio.</p>
            <p></p>
        </article>
        <article class="">
            <img src="assets/muchas-cajas.jpg" alt="imagen de muchas cajas">
        </article>
        <article class="about-card">
            
            <h3>Entrega Oportuna</h3>
            <p>Entregamos a tiempo para garantizar que los planes de producción y comercialización del cliente no se vean afectados.</p>
            
            <!--FALTA: SVG -->
            <h3>Material 100% recilado</h3>
            <p>El material que ofrecemos es 100% reciclado y está en un estado muy bueno.</p>
        </article>
    </section>

    <!-- Sección de Fotos -->

    <section class="">
        <div class="container">
            <h3 class="section-title">Fotos de Exibición</h3>

            <article class="photos-card">
                <img src="assets/una-caja.jpg" alt="imágen de una caja">
            </article>
            <article class="photos-card">
                <img src="assets/una-caja.jpg" alt="imágen de una caja">
            </article>
            <article class="photos-card">
                <img src="assets/una-caja.jpg" alt="imágen de una caja">
            </article>
        </div>
    </section>

    <!-- sección card Productos e ¿interesado? -->

    <section class="">
        <div class="container">
            <article class="">
                <img src="assets/productos.jpg" alt="imagen de productos">
                <div class="">
                    <h3>Productos 📦</h3>
                    <p>Proporcionamos una variedad de opciones de materiales para satisfacer las necesidades de embalaje de diferentes productos.</p>
                    <a href="productos.html">Más detalles >></a>
                </div>
            </article>
            <article class="">
                <img src="assets/atencion-cliente (1).jpg" alt="imagen de productos">
                <div class="">
                    <h3>¿interesado? ☎</h3>
                    <p>Envíe su solicitud de cotización y generaremos una cotización completa para el material que usted necesita.</p>
                    <a href="productos.html">Más detalles >></a>
                </div>
            </article>
        </div>
    </section>
```
#### Maquetando la sección Acerca


le damos padding a las secciones, y tambien añadimos las distintas posiciones de texto (centro, izquierda, derecha) .

en la seccion de css llamada **_UTILITIES_** 

agregamos esta clase:

```css
  .section{
  padding: 2rem 1rem;
}

.text-center{
    text-align: center;
}

.text-left{
    text-align: left;
}

.text-right{
    text-align: right;
}

```

en la sección de **_Site Styles_**

```css
  .about-card{
  margin: 1rem auto; /*ariba y a los costado (para que se centre)*/
  padding: 1rem;
  text-align: center;
}

.about-card svg{
  margin-bottom: 1.25rem;
  fill: var(--first-color);
}
.bg-color-main{
  background-color: var(--gray-light-color);
}

```

para aplicar espaciados utilizamos estas clases, lo saqué de bootstrap.

en la sección de **_utilities_**

```css
  /*para aplicar espaciados como en bootstrap*/


/*margin Top*/
.mt-0 {
  margin-top: 0  ;
}

.mt-1 {
  margin-top: 0.25rem  ;
}

.mt-2 {
  margin-top: 0.5rem  ;
}

.mt-3 {
  margin-top: 1rem  ;
}

.mt-4 {
  margin-top: 1.5rem  ;
}

.mt-5 {
  margin-top: 3rem  ;
}

.mt-auto {
  margin-top: auto  ;
}

/*margin bottom*/
.mb-0 {
  margin-bottom: 0  ;
}

.mb-1 {
  margin-bottom: 0.25rem  ;
}

.mb-2 {
  margin-bottom: 0.5rem  ;
}

.mb-3 {
  margin-bottom: 1rem  ;
}

.mb-4 {
  margin-bottom: 1.5rem  ;
}

.mb-5 {
  margin-bottom: 3rem  ;
}

.mb-auto {
  margin-bottom: auto  ;
}

```

#### Maquetando la sección Fotos de exhibición

en la sección de **_utilities_**

```css
  .section-title{
  border-top: thin solid var(--first-color);
  border-bottom: thin solid var(--first-color);
  margin: 2rem auto; /*Con esto se centra y los margenes laterales se adaptan segun el espacio sobrante*/
  padding: 0.5rem 1rem; /*nos sirve para separar el texto de los bordes de la caja*/
  width: 280px;
  text-align: center;
  color: var(--title-color);
}
```

En la sección de **_site Styles_**

```css
  /* fotos de exhibición*/
  .photos-card > img{
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: block; /*para que  estén uno debajo del otro*/
    border-radius: 25% 10%; /*lo saque de mozilla mdn*/
  }
```

#### Maquetando la sección empecemos


en la sección de **_Componentes_**

```css

  /* *card */

.card{
  width: 18rem;
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  /* background-image: linear-gradient(to right, rgb(96, 56, 19), rgb(178, 159, 148)); */
}

.card-container{
  padding: 1rem;
}

.cards-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
```


En la sección de **_Site Styles_**

```css
  /*card*/

.card h3{
  border-bottom: medium solid var(--first-color);
  margin: 1rem auto; /*ariba y bajo, Costados*/
  padding: 0.5rem 0;
  color: var(--title-color);
}

.footer{
  margin-bottom: var(--header-height);
  padding: 0.5rem;
  text-align: center;
  color: var(--white-color);
  background-color: var(--third-color);
}
```
#### Marcado html de la página Productos



```html
          <!-- sección products-cards -->
        <section class="section">
            <div class="container cards-container">
               
    
                <article class="card p-0">
                    <img src="assets/productos.jpg" alt="imagen de productos">
                    <div class="card-container">
                        <h3 class="text-center">Exportación 📦</h3>
                        <small class="color-list">
                            <ul>
                                <li>
                                    <b>Cantidad mínima de pedido:</b> xx
                                </li>
                                <li>
                                    <b>tiempo de entrega:</b> 1-5 días hábiles
                                </li>
                            </ul>
                            <br>    
                        </small>
                        <p class="text-center">
                            <a href="productos.html" class="btn-small"> <b>Contactar Ahora</b></a>
                        </p>
                    </div>
                </article>
```

la UL tiene por defecto 40px de padding inicial y nosotros lo vamos a reducir a 1rem

![padding-ul](/assets/padding-ul.png)
en la sección de **_site Stiles_**

```css
  .color-list b{
  color:var(--first-color);
}

.color-list ul{
  padding-inline-start: 1rem;
}
```
en la sección de **_utilities_** usamos estas utilidades de Bootstrap para quitar o agrear paddigs

```css
  /*aplica margen a los 4 lados*/

.m-0 {
  margin: 0  ;
}

.m-1 {
  margin: 0.25rem  ;
}

.m-2 {
  margin: 0.5rem  ;
}

.m-3 {
  margin: 1rem  ;
}

.m-4 {
  margin: 1.5rem  ;
}

.m-5 {
  margin: 3rem  ;
}

.m-auto {
  margin: auto  ;
}


/*aplica padding a los 4 lados*/

.p-0 {
  padding: 0  ;
}

.p-1 {
  padding: 0.25rem  ;
}

.p-2 {
  padding: 0.5rem  ;
}

.p-3 {
  padding: 1rem  ;
}

.p-4 {
  padding: 1.5rem  ;
}

.p-5 {
  padding: 3rem  ;
}
```


en la sección de componentes por que un boton es un componente **_components_**

```css
  .btn-small{
  border-radius: 0.5rem;
  padding: 0.5rem;
  /*los enlaces trabajan en linea pero quiero que tenga caracteristicas de linea y bloque*/
  display: inline-block;
  width: 10rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: var(--white-color);
  background-color: var(--first-color);
}
```

#### Maquetando especificaciónes de Cada Producto. (incluye fotos) las que faltan

Hacemos que las imagenes sean un enlace que nos lleve a otra página.

y le damos un efecto Zoom a las imágenes. todo esto en la sección: **_My Styles_**

```css
/*Efecto Zoom  las imágenes*/
.img-card-container{
width: 18rem;
height: 18rem;
display: block; /*la etiqueta es una A y se comporta en linea, yo quiero que se comporte en bloque.*/
overflow: hidden;/*esto para que cuando agrandemos la imagen no se vea sobresalido*/
}

.img-zoom{
  width: 100%;
  height: 100%;
  transition: 0.4s ease;
 /* object-fit: cover; */
  /* cursor: pointer; */
}

.img-zoom:hover{
  transform: scale(1.2);
}
```

> Para el carousel usé el componente carousel de Bootstrap.

Maquetando Uno de los productos

```html
   <section class="section container p-3">

            <article>
                <!-- añadimo para que comienze a corer automáticamente despues de la primera interracion -->
                <div id="carousel-img" class="carousel slide tamaño-800" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carousel-img" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carousel-img" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carousel-img" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carousel-img" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="assets/exportación-men.jpg" class="d-block w-100" alt="primera imágen">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/exportacion-women-1.jpg" class="d-block w-100" alt="segunda imágen">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/exportacion-women-2.jpg" class="d-block w-100" alt="Tercera imágen">
                      </div>
                      <div class="carousel-item">
                        <img src="assets/producto-women-3.jpg" class="d-block w-100" alt="Cuarta Imagen">
                      </div>
                    </div>
                    <!-- control de izquierda y derecha -->
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel-img" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel-img" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
            </article>

            <article class="">
                <h3 class="text-center Subtitle">Cartón Exportación</h3>
                <p>
                    Las cajas de embalaje <b>Exportación</b> ofrecen una solución de embalaje para una variedad de productos.
                </p>
                <p>
                    Fabricadas con cartón resistente de doble hoja, estas cajas garantizan durabilidad y proteccion del contenido durante el almacenamiento y el transporte.
                </p>
            </article>

            <article class="">
                <h3 class="text-center Subtitle"><b>Especificaciones</b></h3>
                <!-- <span> se comporta en linea, P: se comporta en bloque -->
                <span class="color-list">
                    <ul >
                        <li class="mb-2"><b>Dimenciones: </b>L= , A= .</li>
                        <li class="mb-2"><b>Uso: </b>industrial, prendas de vestir, mudanzas, almacenamiento.</li>
                        <li class="mb-2"><b>Precio Final: </b> se adaptará a la cantidad que necesite.</li>
                    </ul>
                </span>
                <br>
                <!-- podemos colocar un pequeño formulario con el nombre preselecíonado más un correo o telefono -->
                <p class="text-center">
                    <a href="contacto.html" class="btn-small"> Contactar Ahora</a>
                </p>
            </article>
        </section>
```

en la sección de **_Components_** creamos el estilo para los subtitulos

```css
  .Subtitle{
    /* border-bottom: medium solid var(--first-color); */
    margin: 1rem auto;
    padding: 0.5rem 0;
    color: var(--first-color);
  }
```


#### maquetando para cada producto y maquetando la seccion de CONTACTENOS/CONTACTOS

vamos a copiar el Svg loader y le cambiamos el color.

En la sección de **_Componentes_**

damos estilos al formulario contacto.
```css
  /* ***** Contact Form ***** */

.contact-form {
  margin: 2rem auto;
  padding: 1rem;
  max-width: 800px;
  background-color: var(--white-color);
}
/*oye, todo los elementos que son hijos directos de contact form sin 
importar que tipo de etiqueta o selector es, le vas a aplicar lo siguiente
*/
.contact-form > *{
  padding: 0.5rem;
  margin: 1rem auto;/*arriba y abajo, automático a los lados*/
  display: block;
  width: 100%; /*le damos el 100% de su contenedor*/
}

/*todo los imputs que están dentro del contact form y toda las text-areas
que estén dentro del contar-form aplicales:*/

.contact-form input,
.contact-form textarea{
  font-size: 0.85rem;
  font-family: var(--font);
}

.contact-form input{
  border: 0;/*quitamos todo los bordes*/
  padding-left: 0; /*esto es para que el texto se alinea al borde asé está en figma*/
  border-bottom: thin solid var(--first-color);

}

.contact-form textarea {
  border: thin solid var(--first-color);
  resize: none; /*para desaparecer el triangulito*/
}

/*el boton SUBMIT- Enviar*/
.contact-form input[type="submit"]{
  margin-top: 0;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

/*btn Es el nombre de los botones en bootstrap y hay incompatibilidad Con BTN de nuestros estilos propios*/
  border-radius: 0.5rem;
  padding: 1rem;
  /*los enlaces trabajan en linea pero quiero que tenga caracteristicas de linea y bloque*/
  display: inline-block;
  width: 200px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: var(--white-color);
  background-color: var(--first-color);
}
.contact-form input[type="submit"]:hover{
  opacity: 0.75;
}

/*dentro de contact-form a todo los elementos hijos pero que tengan
la pseudoclase Placeholder ponele:*/
.contact-form *::placeholder{
  color: var(--gray-dark-color);
}

.contact-form-response{
  padding: 1rem;
  width: 400px;
  text-align: center;
  background-color: var(--white-color);
}
/*rellenamos el svg*/
.contact-form-response svg{
  margin-top: 2rem;
  width: 4rem;
  height: 4rem;
  fill: var(--first-color);
}

/*El elmento que tenga la clase modal y que enta el Id = gracias 
cuando sea target de la página aplicale:*/
.modal#gracias:target{
  opacity: 1;
  pointer-events: auto;
}
```



_Aspect-ratio_ en Bootstrap nos permite agregar un video de Youtube o un Mapa de google maps con tamaños proporcionales si el orden no te gusta lo puedes invertir con la clase de bootstrap: _`order-lg-1`_

queda de esta manera:

```html
   <article>
            <div class="ratio ratio-16x9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1491.3245519512043!2d-68.20594800723673!3d-16.483140265966842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915ede25cd741f53%3A0x8a8ee4fb45790868!2sPlaza%20Villa%20Ingenio!5e1!3m2!1ses!2sbo!4v1722997174457!5m2!1ses!2sbo" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </article>
```
#### Añadiendo modal y sus estilos para el Gracias al enviar mensaje.

```css
  /**** Modal ****/

.modal{
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black-alpha-color);
  opacity: 0;
  pointer-events: none;
  transition: all 1s;
}

.modal-container{ /*modal-content es el mismo nombre que usa Bootstrap y tiene preferencia.*/
  position: relative;
  pointer-events: none;
}

.modal-close{
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.modal-close svg{
  width: 3rem;
  height: 3rem;
  fill: var(--first-color);
}
```


#### Arquitectura para ordenar mis archivos JavaScript.


no olvides referenciar correctamente el archivo js a el archivo Html, de esta manera:

```html
  <script src="js/app.js" type="module"></script>
```


para modularizar borra el antiguo: 

```js
  ((d) => {})(document);

```

Y reemplazalo por esto:

```js
  const d = document;

export default function slider() {}
```



Las buenas prácticas para estructurar mis archivos javaScript son:



1. Modularización

```js
  // math.js
export function sum(x, y) {
    return x + y;
}

// app.js
import { sum } from './math.js';
console.log(sum(2, 3));

```
2. Convenciones de Nombres: Usa camelCase para variables y funciones, PascalCase para clases, y kebab-case para nombres de archivos.

```js
  // good-practice.js
class UserAccount {
    constructor(userName) {
        this.userName = userName;
    }
}
```

3. Estructura de carpetas.

/src
    /components
    /models
    /services
    app.js
    index.html

4. Separación de Responsabilidades:
  
```js
    // dataAccess.js
export function getData() {
    // Fetch data from an API or database
}

// logic.js
import { getData } from './dataAccess.js';
export function processData() {
    // Process the data
}

```
5. Uso de Herramientas de Construcción y Linters

6. Manejo de Errores:

```js
  try {
    // Código que puede lanzar un error
} catch (error) {
    console.error("Se produjo un error:", error);
}
```
Estas prácticas te ayudan a mantener tu código organizado.


Si el archivo carousel.js está en el mismo directorio que tu archivo actual, deberías usar:

a este código añade un slider infinito con intervalos de 3segundos.

**Usando Copilot**

a este fragmento de código quiero que cuando el usuario comienze a precionar el boton de next o prev, el intervalo de los 3 segundos se reinicie:

Para reiniciar el intervalo de 3 segundos cuando el usuario presione los botones “next” o “prev”, puedes usar clearInterval y setInterval dentro del evento de clic. Aquí tienes cómo podrías modificar tu código:

```js
  const d = document;

export default function slider() {
    const $nextBtn = d.querySelector(".slider-btns .next"),
          $prevBtn = d.querySelector(".slider-btns .prev"),
          $slides = d.querySelectorAll(".slider-slide");

    let i = 0;
    let interval;

    const changeSlide = (direction) => {
        $slides[i].classList.remove("active");
        i = (i + direction + $slides.length) % $slides.length;
        $slides[i].classList.add("active");
    };

    const startInterval = () => {
        interval = setInterval(() => {
            changeSlide(1);
        }, 3000);
    };

    const resetInterval = () => {
        clearInterval(interval);
        startInterval();
    };

    d.addEventListener("click", (e) => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            changeSlide(-1);
            resetInterval();
        }
        if (e.target === $nextBtn) {
            e.preventDefault();
            changeSlide(1);
            resetInterval();
        }
    });

    startInterval();
}

```
quiero que sin un modulo falla, los demás sigan ejecutandose de este fragmento de código:

```js
("DOMContentLoaded", (e) => {
    menu();
    slider();
    contact();
});
```

¡Claro! Para asegurarte de que si un módulo falla, los demás sigan ejecutándose, puedes usar bloques try...catch alrededor de cada llamada de función. 

```js
d.addEventListener("DOMContentLoaded", (e) => {
    try {
        menu();
    } catch (error) {
        console.error("Error en menu:", error);
    }

    try {
        slider();
    } catch (error) {
        console.error("Error en slider:", error);
    }

    try {
        contact();
    } catch (error) {
        console.error("Error en contact:", error);
    }
});

```

♥💞💞💞💞♥

#### ESTILOS AL SLIDER.

quise copiar el icono de bootstrap pero veo que el click no reconoce al Svg solo reconoce el contenedor:

```css
  .carousel-control-prev,
.carousel-control-next {
  /* position: absolute; */
  top: 0;
  bottom: 0;
  z-index: 1;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 15%;
  padding: 0;
  color: #2acb95;
  text-align: center;
  background: none;
  border: 1;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
```

En la sección de **_Components_** vamos a dar estilos al carousel Artesanal elegante, minimalista y moderno

```css
  /**    Responsive Slider    **/


.slider{
  position: relative;
  width: 100%;
  margin: 1rem auto;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.slider-content{
  position: relative;
  height: 60vh;
}
/*el siguiente elemento hijo dentro del slider son los botones las flechitas se apilan a la imagen 
  las demas diapositivas se va desbordando
*/

.slider-slide{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s ease;
}

.slider-slide img{
  height: inherit; /*la altura lo hereda*/
  width: inherit;
  object-fit: cover;
  object-position: 50% 30%;
}/*"contain"= la adapta a la altura. buena opcion
  "cover"= la imagen se adapta al ancho del contenedor.
*/

.slider-slide.active{
  opacity: 1;
  visibility: visible;
}

.slider-btns{
  position: absolute;
  width: 100%;
  /* top: 0%; */
  top: 50%; /* Mueve el contenedor al centro vertical */
  transform: translateY(-50%); /* Ajusta para centrar exactamente */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3em;
  font-weight: bold;
}

.slider a{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 2.5rem;
    color: rgb(255, 255, 255);
    text-decoration: none;
    transition: all 0.3s ease;
}

.slider a:hover {
  color: 	rgb(106, 40, 15);
}
```

#### Maquetando para la version tablet:

Para centrar un elemento horizontalmente en un contenedor con `display: grid`, puedes usar la propiedad `justify-items`. Aquí tienes un ejemplo de cómo podrías ajustar tu código:

```css
.container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center; /* Esta propiedad centra los elementos horizontalmente */
}
```

Si necesitas centrar el contenido dentro de un elemento específico, puedes usar `justify-self` en lugar de `justify-items`:

```css
.item {
  justify-self: center; /* Centra este elemento específico horizontalmente */
}
```
creame un grid para cuando pase de los 600 px el primer item ocupe el 100% de la pantalla, y los otros 2  esten abajo y juntos, ocupando el 50% de la pantalla, haslo con Grid de css: te mando el html: 
¡Claro! Aquí tienes el CSS para lograr el diseño que mencionas usando CSS Grid:

```css
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.item1 {
  grid-column: 1 / -1;
}

@media (min-width: 600px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }

  .item1 {
    grid-column: 1 / -1;
  }

  .item2, .item3 {
    grid-column: span 1;
  }
}
```

Este CSS hará que el primer elemento ocupe el 100% del ancho de la pantalla cuando la ventana sea mayor a 600px, y los otros dos elementos se coloquen abajo, cada uno ocupando el 50% del ancho de la pantalla.


#### Maquetando para la version Descktop

Para adaptar la página web al tamaño del escritorio reutilicé varias clases y los renombre con el prefijo `-LG` al final de la clase reutilizada. 

> recuerda; el tamaño minimo para que sea considerada pc es de 64rems. 1024px

En la sección de: **_site-styles_** creamos las siguientes clases para el tamaño de monitor 1024px o superior.

```css
  @media screen and (min-width:64em){
.header{
  position: sticky;
  top: 0;
  /*al Padding y el Height lo heredas de header mobile*/
}

.about-lg{
  height: 85vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  /* display: flex; */
  align-content: center;
  
}


.about-card{
  margin: 0rem auto; /*ariba y a los costado (para que se centre)*/
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: left;
  background-color: var(--white-color);
  width: 100%;
}

.about-card-lg{
  margin: 0rem auto;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
  background-color: var(--white-color);
  width: 100%;
}


.cards-container-lg {
  /* gap: 0rem; */
  /* align-items: start; */
  
  grid-template-columns: repeat(3, 1fr);
  /* align-items: center; */
  /* align-content: start; */
  /* justify-content: center; */
  justify-items: center;
  row-gap: 2rem;
  column-gap: 0rem;
}

.contact-lg{
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  column-gap: 1rem;
}

.ratio {
  position: relative;
  width: 100%;
  height: 40vh;
}

.contact-form {
  margin: 0rem auto;
  padding: 1rem;
  max-width: 800px;
  background-color: var(--white-color);
}




.service-cards {
  /* display: grid; */
  grid-template-columns: 1fr;
  /* justify-content: space-between; */
  /* align-content: center; */
  margin-top: 0rem;
}

.service-cards-lg {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: center;
  justify-items: center;
  column-gap: 1rem;
  margin-top: 2rem;
}


.slider {
  position: relative;
  width: 60%;
  margin: 1rem auto;
  text-align: center;
}

.slider-slide img{
  height: inherit; /*la altura lo hereda*/
  width: inherit;
  object-fit: cover;
  object-position: 50% 50%;
}

.slider-content{
  position: relative;
  height: 80vh;
}


.container-product {
  height: 100vh;
  align-content: center;
  display: grid;
  /* grid-template-columns: 1fr; */
  column-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
.item1, .item2, .item3 {
  grid-column: span 1;
}


.footer{
  margin-bottom: 0rem;
  padding: 0.5rem;
  text-align: center;
  color: var(--white-color);
  background-color: var(--third-color);
}

.section{
  padding: var(--header-height) 1rem;
}

}
```

tambien hicimos mejoras a las cards de "index.html"

#### Añadiendo productos a la página + fotos.

Recomendacion para el tamaño de las fotos.

para las targetas: el tamaño tiene que ser cuadrado, es decir 1 x 1.

El tamaño de las targetas para la sección de "fotos de exhibición" debern ser de tamaño rectangular, es decir: 16 x 9.

El tamaño para la "hero image" debe ser tambien de 16 x 9.

para el carousel de productos deben ser de tamaño cuadrado: 1 x 1.

Para la descripción podemos ayudarnos de la IA.

> hazme una descripción corta para vender en linea acerca de las Láminas de Cartón Corrugado y también menciona los posibles usos que se le puede dar.

hacer la 140

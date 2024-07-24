

## CARTONES - CASI

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

---

**APARTIR DE AQUI COMENZAMOS A DESARROLLAR LA PÁGINA WEB**


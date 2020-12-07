# Irontec | Prueba técnica
![frontend](https://res.cloudinary.com/drcjcovjy/image/upload/v1607303560/irontec/preview_sqsshl.png)

## Demo

Se puede ver la app en producción en el siguiente [enlace](https://sergiocrol.github.io/irontec-assessment/)

## ¿En qué consiste?

Esta aplicación te permite obtener las *issues* del repositorio que indiques mediante una url válida.
Te proporciona información básica de cada issue, distribuida mediante paginación, así como una gráfica mostrando 
el número de issues abiertas durante los últimos 6 meses en caso de que haya.

## Para comenzar

### Clona el repositorio

Clona este repositorio a tu máquina local

```bash
git clone git@github.com:sergiocrol/irontec-assessment.git
```

### Instalación

Instala las dependencias

```
npm install
```

### Ejecuta la app

Inicia la aplicación en un servidor local y navega a la siguiente dirección *http://localhost:4200/*

```
ng serve (ó npm start)
```

## ¿Qué puedo hacer?

-  **Listar issues:** Proporcionando una url válida, la app te ofrece el resultado de las issues y las muestra con paginación. El número máximo de resultados mostrados por página es de 8. Para reducir el número de *requests* generadas a la API, cada *response* te devuelve un máximo de 80 issues. Una vez que llegamos a la página con la última issue proporcionada por la primera request, se realizará una sucesiva si aún quedaran más resultados.

-  **Gráficas:** Si el repositorio buscado tiene issues abiertas, se generará una gráfica con el número de issues generadas por mes durante los seis últimos meses. Se podrá alternar entre gráfica de barras y gráfica lineal.

-  **Dark mode:** Se puede cambiar el tema entre *light* y *dark*.

### Ejemplos de urls válidas

- https://github.com/valor-software/ng2-charts
- github.com/tailwindlabs/tailwindcss
- https://github.com/angular/angular

La aplicación no admite urls con el símbolo **/** al final. Las urls desconocidas y las que no tengan issues para mostrar ofrecerán el mensaje de error correspondiente.
         

## Librerías adicionales

- **@ngrx/store & @ngrx/effects:** Para el manejo de estados, y manejo de estados de *success*, *loading* y *error* de las requests.
- **tailwindcss:** Como framework para los estilos de la app
- **ng2-charts & chart,js:**  Para las gráficas

## Git

[Link del repositorio](https://github.com/sergiocrol/irontec-assessment)

## Producción

[Link de la app en producción](https://sergiocrol.github.io/irontec-assessment/)

## Autor

[Sergio Cordero Rol](https://github.com/sergiocrol)
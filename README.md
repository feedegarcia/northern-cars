# Northern Cars — showroom digital (demo)

Sitio estático (HTML/CSS/JS) publicado en Firebase Hosting.

## Estructura
- `public/index.html` — todo el sitio (diseño, filtros, ficha, tasación)
- `public/cars.js` — configuración (`NC_CONFIG`) y listado de autos (`NC_CARS`)
- `public/details.js` — fichas técnicas, equipamiento y fotos por auto (`NC_DETAILS`)
- `public/img/` — logo, favicon, imagen de vista previa (y `cars/` si se descargan las fotos)
- `tools/descargar-fotos.js` — baja las fotos de MercadoLibre a `public/img/cars/`

## Cambiar datos
Editar `public/cars.js` (WhatsApp, redes, `gaId`, `localPhotos`) o los autos, y publicar.

## Publicar
```
npm i -g firebase-tools
firebase login
firebase deploy
```

## Fotos propias (opcional)
```
node tools/descargar-fotos.js
```
Luego `localPhotos: true` en `public/cars.js` y `firebase deploy`.

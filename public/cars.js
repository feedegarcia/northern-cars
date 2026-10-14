// ============================================================
// INVENTARIO — Unidades reales de la tienda de Northern Cars en MercadoLibre
// price = precio publicado (número) · cur = moneda de la publicación ("USD" por defecto o "ARS") · km = kilómetros (número) · tag = tipo de carrocería (filtro)
// image = foto de la publicación (hotlink). Para producción: bajar las fotos a public/img/.
// ml = link a la publicación puntual en MercadoLibre.
// ============================================================
window.NC_CONFIG = {
  whatsapp: "5491163723734", // formato internacional sin + ni espacios
  mlStore: "https://www.mercadolibre.com.ar/pagina/northerncars",
  facebook: "https://www.facebook.com/p/northerncars-100050372481807/",
  instagram: "https://instagram.com/northern.cars",
  localPhotos: false, // true = usar las fotos descargadas en img/cars/ (correr tools/descargar-fotos.js)
  gaId: ""            // ID de medición de Google Analytics 4 (ej. "G-XXXXXXXXXX") para contar clics
};

window.NC_CARS = [
  { brand: "Mercedes-Benz", model: "GLE 450 4MATIC", year: 2023, km: 19000, price: 138000, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_618026-MLA117699323929_092026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4045203180-mercedes-benz-clase-gle-30-gle450-4matic-367cv-_JM" },
  { brand: "Mercedes-Benz", model: "GLE 400 Coupé 4MATIC", year: 2019, km: 89000, price: 78000, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_708273-MLA116212159230_092026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-3954360174-mercedes-benz-clase-gle-30-gle400-sport-coupe-4matic-333cv-_JM" },
  { brand: "Jeep", model: "Grand Cherokee SRT 6.4", year: 2019, km: 69000, price: 75000, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_961145-MLA119266373149_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4034964786-jeep-grand-cherokee-64-srt-atx-465hp-at-_JM" },
  { brand: "Audi", model: "S3 Sportback Quattro", year: 2025, km: 7000, price: 67000, tag: "Hatchback",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_988024-MLA119266722005_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4032447000-audi-s3-sportback-20-tfsi-stronic-quattro-333cv-_JM" },
  { brand: "Audi", model: "Q3 Sportback 40 TFSI Quattro", year: 2026, km: 1111, price: 59999, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_913187-MLA118062335221_092026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-3982577050-audi-q3-sportback-20-40tfsi-quattro-190cv-_JM" },
  { brand: "Audi", model: "Q7 3.0 TFSI Quattro", year: 2019, km: 89000, price: 55000, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_742366-MLA116554788698_092026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-2116330201-audi-q7-30-tfsi-333cv-tiptronic-quattro-_JM" },
  { brand: "Volkswagen", model: "Amarok V6 Extreme", year: 2023, km: 33000, price: 40000, tag: "Pickup",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_674993-MLA117658400870_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4035297724-volkswagen-amarok-30-v6-extreme-_JM" },
  { brand: "Volkswagen", model: "Amarok V6 Extreme 258cv", year: 2022, km: 20000, price: 38000, tag: "Pickup",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_654409-MLA117654238184_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4034933494-volkswagen-amarok-30-v6-extreme-258cv-_JM" },
  { brand: "RAM", model: "1500 Laramie 5.7 V8", year: 2016, km: 138000, price: 31000, tag: "Pickup",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_853013-MLA117653285200_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-2157547669-ram-1500-57-laramie-atx-v8-_JM" },
  { brand: "Volkswagen", model: "Taos 250 TSI Highline", year: 2024, km: 17000, price: 30600, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_774296-MLA117308639886_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4045322200-volkswagen-taos-14-250-tsi-highline-tiptronic-_JM" },
  { brand: "Ford", model: "Ranger 2.0 CD 4x2 XL", year: 2025, km: 15000, price: 29800, tag: "Pickup",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_701162-MLA117256139462_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4045296692-ford-ranger-20-cd-4x2-xl-170cv-_JM" },
  { brand: "BMW", model: "X3 xDrive28i xLine", year: 2017, km: 100000, price: 26999, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_718398-MLA118011933793_092026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4031451182-bmw-x3-20-xdrive-28i-xline-245cv-_JM" },
  { brand: "Audi", model: "A3 Sportback 1.4 TFSI S tronic", year: 2018, km: 30000, price: 22500, tag: "Hatchback",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_963174-MLA119272851697_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4035318192-audi-a3-sportback-14-tfsi-150-cv-s-tronic-_JM" },
  { brand: "Mercedes-Benz", model: "Clase A 200 Urban", year: 2013, km: 70000, price: 18000, tag: "Hatchback",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_773299-MLA117649835986_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-2157340789-mercedes-benz-clase-a-16-a-200-urban-befficiency-156cv-_JM" },
  { brand: "Volkswagen", model: "CC 2.0 Luxury TSI", year: 2013, km: 75000, price: 17000, tag: "Sedán",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_880825-MLA119269898239_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-2157173247-volkswagen-cc-20-luxury-tsi-211cv-_JM" },
  { brand: "MINI", model: "Countryman S 1.6", year: 2013, km: 97000, price: 15500, tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_947718-MLA118844658253_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4034968272-mini-cooper-countryman-16-s-184cv-at-_JM" },
  { brand: "Peugeot", model: "208 1.6 Active", year: 2018, km: 39000, price: 13000, tag: "Hatchback",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_826490-MLA117439849104_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4022072230-peugeot-208-16-active-_JM" },
  { brand: "Jeep", model: "Renegade 1.8 Longitude AT6", year: 2018, km: 75000, price: 24200000, cur: "ARS", tag: "SUV",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_753729-MLA116553965056_092026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-2154695457-jeep-renegade-18-longitude-at6-_JM" },
  { brand: "Nissan", model: "March 1.6 Active", year: 2018, km: 130000, price: 12500000, cur: "ARS", tag: "Hatchback",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_905789-MLA117262262182_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4045203256-nissan-march-16-active-107cv-_JM" },
  { brand: "Citroën", model: "C4 1.6 X", year: 2011, km: 160000, price: 9000000, cur: "ARS", tag: "Hatchback",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_999970-MLA119270734993_102026-F.webp",
    ml: "https://auto.mercadolibre.com.ar/MLA-4068230392-citron-c4-16-x-am71-_JM" }
];

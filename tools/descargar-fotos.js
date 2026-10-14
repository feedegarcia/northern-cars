// Descarga las fotos de cada auto a public/img/cars/<id>/ para no depender de MercadoLibre.
// Uso (desde la carpeta del proyecto):  node tools/descargar-fotos.js
// Luego poné  localPhotos: true  en public/cars.js y hacé  firebase deploy
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..', 'public');
const ctx = { window: {} }; ctx.self = ctx.window; vm.createContext(ctx);
const load = f => vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);
load('cars.js'); load('details.js');
const cars = ctx.window.NC_CARS, det = ctx.window.NC_DETAILS;
const base = process.env.NC_BASE || 'https://http2.mlstatic.com';
const url = (p, s, q) => `${base}/D_NQ_NP_2X_${p}${s}-${q}.webp`;
const id = c => (c.ml.match(/MLA-(\d+)/) || [])[1] || null;
async function get(u, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) return 'ok';
  const r = await fetch(u); if (!r.ok) throw new Error(r.status + ' ' + u);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer())); return 'new';
}
(async () => {
  let n = 0, fail = 0;
  for (const c of cars) {
    const k = id(c), d = k && det[k]; if (!d) { console.log('sin detalle:', c.brand, c.model); continue; }
    for (let i = 0; i < d.p.length; i++) {
      const dir = path.join(root, 'img', 'cars', k);
      try {
        await get(url(d.p[i], d.s, 'F'), path.join(dir, i + '.webp'));
        await get(url(d.p[i], d.s, 'V'), path.join(dir, i + '-s.webp'));
        if (i === 0) await get(url(d.p[i], d.s, 'O'), path.join(dir, '0-m.webp'));
        n++;
      } catch (e) { fail++; console.log('error', e.message); }
    }
    console.log('listo', k, c.brand, c.model);
  }
  console.log(`\n${n} fotos descargadas, ${fail} errores.\nAhora poné localPhotos: true en public/cars.js y corré: firebase deploy`);
})();

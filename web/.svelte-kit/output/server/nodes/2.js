import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.DdI5CyG2.js","_app/immutable/chunks/CiqWNc0f.js","_app/immutable/chunks/BXuGztmM.js","_app/immutable/chunks/BxwpRFjF.js","_app/immutable/chunks/BoAOqg2u.js","_app/immutable/chunks/CIW5eMXY.js","_app/immutable/chunks/D1H2LNBl.js","_app/immutable/chunks/f8c8nhW2.js","_app/immutable/chunks/DCa4C1qh.js"];
export const stylesheets = ["_app/immutable/assets/Metadata.D8Oq64Vd.css","_app/immutable/assets/2.DB1UBJSm.css"];
export const fonts = [];

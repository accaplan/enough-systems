import * as universal from '../entries/pages/_slug_/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/3.F2FlQYul.js","_app/immutable/chunks/CiqWNc0f.js","_app/immutable/chunks/BXuGztmM.js","_app/immutable/chunks/BxwpRFjF.js","_app/immutable/chunks/BoAOqg2u.js","_app/immutable/chunks/CIW5eMXY.js","_app/immutable/chunks/D1H2LNBl.js"];
export const stylesheets = ["_app/immutable/assets/Metadata.D8Oq64Vd.css","_app/immutable/assets/3.0jAJaq5-.css"];
export const fonts = [];

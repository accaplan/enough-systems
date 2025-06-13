export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","app.css","favicon.png","fonts/AUTHENTIC-Sans.woff","fonts/FKRaster/FKRasterRomanCompact-Rounded-1.woff2","fonts/Gerstner-Programm-Light.woff","fonts/Gerstner-Programm-Medium.otf","fonts/GerstnerProgrammFSL-Bold.woff","fonts/GerstnerProgrammFSL-Italic.woff","fonts/Suisse/SuisseIntl-Medium-WebM.woff","fonts/Suisse/SuisseIntl-Medium-WebM.woff2","fonts/gt-america-extended.woff2","fonts/index.css","fonts/knif-mono.woff","robots.txt"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".woff":"font/woff",".woff2":"font/woff2",".otf":"font/otf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.WFyHI7jT.js",app:"_app/immutable/entry/app.DeXPCGh9.js",imports:["_app/immutable/entry/start.WFyHI7jT.js","_app/immutable/chunks/DWqbefEu.js","_app/immutable/chunks/BXuGztmM.js","_app/immutable/chunks/f8c8nhW2.js","_app/immutable/entry/app.DeXPCGh9.js","_app/immutable/chunks/D1H2LNBl.js","_app/immutable/chunks/BXuGztmM.js","_app/immutable/chunks/CIW5eMXY.js","_app/immutable/chunks/BxwpRFjF.js","_app/immutable/chunks/f8c8nhW2.js","_app/immutable/chunks/DCa4C1qh.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

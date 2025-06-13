import { q as escape_html, t as bind_props, l as pop, p as push, v as ensure_array_like, w as attr, u as fallback, A as head } from "./index.js";
import truncate from "lodash/truncate.js";
import { t as toPlainText, u as urlFor } from "./sanity.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function formatDateTime(dateTime) {
  const myDate = new Date(dateTime);
  const dateArray = myDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).split("/");
  const formattedTime = myDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    timeZone: "CET"
  });
  return `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}, ${formattedTime}`;
}
function LastUpdated($$payload, $$props) {
  push();
  let siteLastUpdated = $$props["siteLastUpdated"];
  $$payload.out += `<div class="last-updated svelte-19xzre0">Site last updated at ${escape_html(formatDateTime(siteLastUpdated))}</div>`;
  bind_props($$props, { siteLastUpdated });
  pop();
}
function Header($$payload, $$props) {
  let pageList = $$props["pageList"];
  let siteLastUpdated = $$props["siteLastUpdated"];
  const each_array = ensure_array_like(pageList);
  $$payload.out += `<header class="svelte-1sjt0ht"><div class="svelte-1sjt0ht"><h1 class="svelte-1sjt0ht"><a href="/" data-sveltekit-preload-data="" class="svelte-1sjt0ht">Enough Systems</a></h1> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out += `<a${attr("href", page.slug?.current ?? "")} data-sveltekit-preload-data="" class="svelte-1sjt0ht">${escape_html(page.title)}</a>`;
  }
  $$payload.out += `<!--]--></div> `;
  LastUpdated($$payload, { siteLastUpdated });
  $$payload.out += `<!----></header>`;
  bind_props($$props, { pageList, siteLastUpdated });
}
function Metadata($$payload, $$props) {
  push();
  let page = fallback($$props["page"], () => ({}), true);
  let globalPage = $$props["globalPage"];
  const BASE_TITLE = "Neuparadise";
  const DEFAULT_DESCRIPTION = truncate(toPlainText(globalPage.content?.content ?? ""), { length: 240, separator: /.? +/ });
  const DEFAULT_IMAGE = urlFor(globalPage?.featuredImage).width(800).url() || "";
  const BASE_URL = "https://calsbo.com/";
  const getTitle = (p) => {
    return (p.title ? p.title + " | " : "") + BASE_TITLE;
  };
  const getDescription = (p) => {
    let d = p.content?.content ? toPlainText(p.content.content) : DEFAULT_DESCRIPTION;
    return truncate(d, { length: 240, separator: /.? +/ });
  };
  const getUrl = (p) => {
    return BASE_URL + (p.slug?.current || "");
  };
  const getImage = (p) => {
    if (p.featuredImage) return urlFor(p.featuredImage).width(800).url();
    return DEFAULT_IMAGE;
  };
  let title = getTitle(page);
  let description = getDescription(page);
  let url = getUrl(page);
  let image = getImage(page);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(title)}</title>`;
    $$payload2.out += `<meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:url"${attr("content", url)}/> <meta property="og:url"${attr("content", url)}/> <meta property="og:type" content="article"/> <meta property="twitter:title"${attr("content", title)}/> <meta property="twitter:description"${attr("content", title)}/> <meta property="og:title"${attr("content", title)}/> <meta property="description"${attr("content", description)}/> <meta property="og:description"${attr("content", description)}/> <meta property="image"${attr("content", image)}/> <meta property="og:image"${attr("content", image)}/> <meta property="twitter:image"${attr("content", image)}/> <meta property="og:site_name"${attr("content", BASE_TITLE)}/>`;
  });
  bind_props($$props, { page, globalPage });
  pop();
}
export {
  Header as H,
  LastUpdated as L,
  Metadata as M,
  html as h
};

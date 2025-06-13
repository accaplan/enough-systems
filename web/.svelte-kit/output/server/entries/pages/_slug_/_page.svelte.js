import { v as ensure_array_like, w as attr, q as escape_html, t as bind_props, l as pop, p as push } from "../../../chunks/index.js";
import { r as renderBlockText } from "../../../chunks/sanity.js";
import { L as LastUpdated, M as Metadata, H as Header, h as html } from "../../../chunks/Metadata.js";
function Footer($$payload, $$props) {
  let pageList = $$props["pageList"];
  let siteLastUpdated = $$props["siteLastUpdated"];
  const each_array = ensure_array_like(pageList);
  $$payload.out += `<footer class="svelte-1uwxdgn"><div class="svelte-1uwxdgn"><h1 class="svelte-1uwxdgn"><a href="/" data-sveltekit-preload-data="" class="svelte-1uwxdgn">Neuparadise</a></h1> <!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out += `<a${attr("href", page.slug?.current ?? "")} data-sveltekit-preload-data="" class="svelte-1uwxdgn">${escape_html(page.title)}</a>`;
  }
  $$payload.out += `<!--]--></div> `;
  LastUpdated($$payload, { siteLastUpdated });
  $$payload.out += `<!----></footer>`;
  bind_props($$props, { pageList, siteLastUpdated });
}
function _page($$payload, $$props) {
  push();
  let data = $$props["data"];
  const { pageList, siteLastUpdated } = data;
  let currentPost = data.post;
  currentPost = data.post;
  $$payload.out += `<!---->`;
  {
    Metadata($$payload, { page: currentPost, globalPage: pageList });
  }
  $$payload.out += `<!----> `;
  Header($$payload, { pageList: pageList.pages, siteLastUpdated });
  $$payload.out += `<!----> <h1 class="svelte-pq90h1">${escape_html(currentPost.title)}</h1> <div class="content svelte-pq90h1">${html(renderBlockText(currentPost.content?.content ?? []))}</div> `;
  Footer($$payload, { pageList: pageList.pages, siteLastUpdated });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};

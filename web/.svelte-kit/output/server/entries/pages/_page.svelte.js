import { q as escape_html, t as bind_props, u as fallback, v as ensure_array_like, l as pop, p as push, w as attr, x as attr_class, y as attr_style, z as stringify } from "../../chunks/index.js";
import { h as html, M as Metadata, H as Header } from "../../chunks/Metadata.js";
import { r as renderBlockText } from "../../chunks/sanity.js";
function Tag($$payload, $$props) {
  let tag = $$props["tag"];
  $$payload.out += `<span class="tag">${escape_html(tag)}</span>`;
  bind_props($$props, { tag });
}
function Tags($$payload, $$props) {
  push();
  let tags = fallback($$props["tags"], () => [], true);
  const each_array = ensure_array_like(tags);
  $$payload.out += `<!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let tag = each_array[index];
    Tag($$payload, { tag });
    $$payload.out += `<!---->${escape_html(index < tags.length - 1 ? ", " : "")}`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { tags });
  pop();
}
function Item($$payload, $$props) {
  push();
  let link;
  let item = $$props["item"];
  function getLink(_item) {
    if (_item.type === "article") {
      return { url: _item.slug?.current ?? "", target: "" };
    } else if (_item.type === "link") {
      return { url: _item.link ?? "", target: "_blank" };
    } else if (_item.type === "file") {
      return { url: _item.fileUrl ?? "", target: "_blank" };
    } else {
      return { url: "", target: "" };
    }
  }
  link = getLink(item);
  $$payload.out += `<a${attr("href", link.url)}${attr("target", link.target)}${attr_class("row svelte-1mhwtv7", void 0, { "linked": link.url })}><div class="cell title svelte-1mhwtv7">${escape_html(item.title)}</div> <div class="cell what svelte-1mhwtv7">`;
  Tags($$payload, { tags: item.what ?? [] });
  $$payload.out += `<!----></div> <div class="cell with svelte-1mhwtv7">`;
  Tags($$payload, { tags: item.with ?? [] });
  $$payload.out += `<!----></div> <div class="cell where svelte-1mhwtv7">${escape_html(item.where ?? "")}</div> <div class="cell when svelte-1mhwtv7">${escape_html(item.when ?? "")}</div></a>`;
  bind_props($$props, { item });
  pop();
}
function IntroText($$payload, $$props) {
  push();
  let pageList = $$props["pageList"];
  $$payload.out += `<div class="intro-text svelte-1lafvjw">${html(renderBlockText(pageList?.introText?.content ?? []))}</div>`;
  bind_props($$props, { pageList });
  pop();
}
function BannerSpeed($$payload, $$props) {
  push();
  let text = fallback($$props["text"], "sufficiency in nature");
  let repeatCount = 2;
  let upperText = text.toUpperCase();
  const each_array = ensure_array_like(Array(repeatCount - 1));
  $$payload.out += `<div class="banner-speed svelte-1unxtlt"><div class="banner-speed__track svelte-1unxtlt"${attr_style(`animation-play-state: ${stringify("running")};`)}><span class="svelte-1unxtlt">${escape_html(upperText)}</span> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    each_array[i];
    $$payload.out += `<span class="svelte-1unxtlt">${escape_html(upperText)}</span>`;
  }
  $$payload.out += `<!--]--></div></div> <div class="banner-spacer svelte-1unxtlt"></div>`;
  bind_props($$props, { text });
  pop();
}
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { siteLastUpdated, pageList, itemList } = data;
  BannerSpeed($$payload, {});
  $$payload.out += `<!----> `;
  Metadata($$payload, { globalPage: pageList });
  $$payload.out += `<!----> `;
  Header($$payload, { pageList: pageList.pages, siteLastUpdated });
  $$payload.out += `<!----> `;
  IntroText($$payload, { pageList });
  $$payload.out += `<!----> `;
  Item($$payload, { itemList });
  $$payload.out += `<!---->`;
  bind_props($$props, { data });
}
export {
  _page as default
};

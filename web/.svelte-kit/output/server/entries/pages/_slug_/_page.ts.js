import { l as loadData } from "../../../chunks/sanity.js";
async function load({ params }) {
  const post = await loadData("*[slug.current == $slug][0]", { slug: params.slug });
  const pageListDoc = await loadData("*[_id == 'page-list'][0] {..., pages[]->{...}}", {});
  const lastUpdatedPost = await loadData("*[] | order(_updatedAt desc)[0]", {});
  const siteLastUpdated = lastUpdatedPost._updatedAt;
  const pageList = pageListDoc;
  return {
    pageList,
    siteLastUpdated,
    post
  };
}
export {
  load
};

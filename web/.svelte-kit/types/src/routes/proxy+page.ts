// @ts-nocheck
import { loadData } from "$lib/modules/sanity"

/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ url }) {
    const pageListDoc = await loadData("*[_id == 'page-list'][0] {..., pages[]->{...}}", {})
    const itemList = await loadData("*[_type == 'item'] {..., 'fileUrl': file.asset->url}", {})
    const lastUpdatedPost = await loadData("*[] | order(_updatedAt desc)[0]", {})

    const siteLastUpdated = lastUpdatedPost._updatedAt
    const pageList = pageListDoc

    return {
        siteLastUpdated,
        pageList,
        itemList
    };
}
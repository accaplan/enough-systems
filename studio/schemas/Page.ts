import {
    MdTextFields,
} from "react-icons/md"

export default {
    name: 'page',
    title: 'Page',
    icon: MdTextFields,
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Featured Image",
            name: "featuredImage",
            type: "image",
        },
        {
            name: 'content',
            title: 'Content',
            type: 'contentEditor',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required()
        }
    ],
}

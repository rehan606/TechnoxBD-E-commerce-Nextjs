import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";


export const categoryType = defineType({
    name: "category",
    title: "Category",
    type: "document",
    icon:TagIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 200,
            },
        }),
        defineField({
            name: "range",
            type: "number",
            description: "Starting from",
        }),
        defineField({
            name: "featured",
            type: "boolean",
            initialValue: false,
        }),
        defineField({
            name: "image",
            title: "Category Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),

    ],
    preview: {
        select: {
            title: "title",
            subtitle: "range",
            media: "image",
        },
    },
})
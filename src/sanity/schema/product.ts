import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
            },
        },
        {
            name: "category",
            type: "string",
            title: "Category",
            validation: (rule) => rule.required(),
            options: {
                list: [
                    { title: "Stylish Cafe Chair", value: "Stylish Cafe Chair" },
                    { title: "Luxury Big Sofa", value: "Luxury Big Sofa" },
                    { title: "Outdoor bar table and stool", value: "Outdoor bar table and stool" },
                    { title: "Night lamp", value: "Night lamp" },
                    { title: "Small mug", value: "Small mug" },
                    { title: "Cute bed set", value: "Cute bed set" },
                    { title: "Minimalist flower pot", value: "Minimalist flower pot" }
                ]
            }
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'text',
            validation: (rule) => rule.required(),
            description: 'Summary of the product'
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})
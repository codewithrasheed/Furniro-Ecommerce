import { defineType } from "sanity"

export const order = defineType({
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name:"lastName",
            title:"Last Name",
            validation: (rule) => rule.required(),
            type:"string",
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "country",
            title: "Country",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "address",
            title: "Address",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "city",
            title: "City",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "province",
            title: "Province",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "zipCode",
            title: "Zip Code",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "info",
            title: "Info",
            type: "text"
        },
        {
            name: "cartItem",
            title: "Cart Item",
            type: "array",
            of: [{ type: "reference", to: [{ type: "product" }] }],
            validation: (rule) => rule.required(),
        },
        {
            name: "total",
            title: "Total",
            type: "number",
            validation: (rule) => rule.required()
        },
        {
            name: "orderStatus",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Dispatched", value: "dispatched" },
                    { title: "Completed", value: "completed" },
                ],
                layout: "radio",
            },
            initialValue: "pending"
        },
        {
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
        },
        {
            name: 'orderNumber',
            title: 'Order Number',
            type: 'number',
        }

    ]
})
import { defineType } from "sanity";

export const customer = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "orders",
      title: "Orders",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "order" }], // Reference to the 'order' schema
        },
      ],
    },
  ]
});
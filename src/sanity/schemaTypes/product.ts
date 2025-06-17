
import { defineType } from "sanity";
export const product= defineType( {
  name: "product",
  title: "product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "product Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
   
]
});
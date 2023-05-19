const values = {
  name: "values",
  title: "Careers - Values",
  type: "document",
  fields: [
    {
      name: "value",
      title: "Value",
      type: "string",
    },
    // {
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: { source: "title" },
    // },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Image description",
          type: "string",
        },
      ],
    },
    {
      name: "valueDesc",
      title: "Value Description",
      type: "string",
    },
  ],
};

export default values;

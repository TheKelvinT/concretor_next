const blogHero = {
  name: "blogHero",
  title: "Blog - Main Banner",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: `For your own reference. Will not rendered on page.
       `,
    },
    {
      name: "image",
      title: "Banner Image",
      type: "image",
      options: { hotspot: true },
      description: `Single image.`,
    },
    {
      name: "header",
      title: "Blog Section Header",
      type: "string",
      description: `Single sentence
       `,
    },
    {
      name: "blogDesc",
      title: "Blog Section Description",
      type: "string",
      description: `Blog section description text
       `,
    },
  ],
};

export default blogHero;

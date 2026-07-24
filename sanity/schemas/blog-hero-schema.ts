const blogHero = {
  // NOTE: `name`/`_type` stays "blogHero" so existing Sanity documents keep loading.
  name: "blogHero",
  title: "Newsletter - Main Banner",
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
      title: "Newsletter Section Header",
      type: "string",
      description: `Single sentence
       `,
    },
    {
      name: "blogDesc",
      title: "Newsletter Section Description",
      type: "string",
      description: `Newsletter section description text
       `,
    },
  ],
};

export default blogHero;

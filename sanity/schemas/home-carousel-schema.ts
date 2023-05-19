const homeCarousel = {
  name: "homeCarousel",
  title: "Home - Carousel",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: `For your own reference.
       `,
    },
    {
      name: "carousel",
      title: "Carousel",
      type: "array",
      of: [{ type: "image" }],
      options: { hotspot: true },
      sortable: true,
      description: `Images for Hero carousel on Home Page. 
       `,
    },
    // {
    //   name: "aboutSectionOne",
    //   title: "Section One",
    //   type: "document",
    //   fields: [
    //     {
    //       name: "image",
    //       title: "Image/Logo",
    //       type: "image",
    //       options: { hotspot: true },
    //     },
    //     {
    //       name: "title",
    //       title: "Title",
    //       type: "string",
    //     },
    //     {
    //       name: "description",
    //       title: "Description",
    //       type: "array",
    //       of: [{ type: "block" }],
    //     },
    //     {
    //       name: "buttonText",
    //       title: "Button Text",
    //       type: "string",
    //     },
    //   ],
    // },
    // {
    //   name: "aboutSectionTwo",
    //   title: "Section Two",
    //   type: "document",
    //   fields: [
    //     {
    //       name: "Images",
    //       title: "Images",
    //       type: "array",
    //       of: [{ type: "image" }],
    //       options: { hotspot: true },
    //     },
    //     {
    //       name: "title",
    //       title: "Title",
    //       type: "string",
    //     },
    //     {
    //       name: "description",
    //       title: "Description",
    //       type: "array",
    //       of: [{ type: "block" }],
    //     },
    //   ],
    // },
    // {
    //   name: "aboutSectionThree",
    //   title: "Section Three",
    //   type: "document",
    //   fields: [
    //     {
    //       name: "title",
    //       title: "Title",
    //       type: "array",
    //       of: [{ type: "image" }],
    //       options: { hotspot: true },
    //     },

    //     {
    //       name: "description",
    //       title: "Description",
    //       type: "array",
    //       of: [{ type: "block" }],
    //     },
    //   ],
    // },
    // {
    //   name: "summary",
    //   title: "Summary",
    //   type: "array",
    //   of: [{ type: "block" }],
    // },
    // {
    //   name: "content",
    //   title: "Content",
    //   type: "array",
    //   of: [
    //     { type: "block" },
    //     {
    //       type: "image",
    //       fields: [
    //         {
    //           type: "text",
    //           name: "alt",
    //           title: "Alternative text",
    //           description: `Some of your visitors cannot see images,
    //         be they blind, color-blind, low-sighted;
    //         alternative text is of great help for those
    //         people that can rely on it to have a good idea of
    //         what\'s on your page.`,
    //           options: {
    //             isHighlighted: true,
    //           },
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default homeCarousel;

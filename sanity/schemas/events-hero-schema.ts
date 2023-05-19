import callToAction from "./callToAction-schema";
const events = {
  name: "events",
  title: "Events - Content",
  type: "document",
  fields: [
    {
      name: "banner",
      title: "Banner",
      type: "image",
      options: { hotspot: true },
      description: `Single image.`,
    },
    {
      name: "sectionOne",
      title: "Section One",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Page Header",
          type: "string",
          description: `Page header
       `,
        },
        {
          name: "desc",
          title: "Section Description",
          type: "string",
          description: `Short Description Text
       `,
        },
        {
          title: "Button Text ",
          name: "callToAction",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
      ],
    },
    {
      name: "sectionTwo",
      title: "Section Two ",
      type: "document",
      fields: [
        {
          name: "image",
          title: "image",
          type: "image",
          options: { hotspot: true },
          description: `Single image.`,
        },
        {
          name: "title",
          title: "Page Header",
          type: "string",
          description: `Page header
       `,
        },

        {
          name: "Sectioncontent",
          title: "Section content",
          type: "array",
          of: [
            { type: "block" },
            {
              type: "image",
              fields: [
                {
                  type: "text",
                  name: "alt",
                  title: "Alternative text",
                  description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
          ],
        },
        {
          title: "Button Text ",
          name: "callToAction",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
      ],
    },
    {
      name: "sectionThree",
      title: "Section Three ",
      type: "document",
      fields: [
        {
          name: "title",
          title: "Section Header",
          type: "string",
          description: `Section header
       `,
        },

        {
          name: "Sectioncontent",
          title: "Section content",
          type: "array",
          of: [
            { type: "block" },
            {
              type: "image",
              fields: [
                {
                  type: "text",
                  name: "alt",
                  title: "Alternative text",
                  description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what\'s on your page.`,
                  options: {
                    isHighlighted: true,
                  },
                },
              ],
            },
          ],
        },
        {
          title: "Button Text",
          name: "callToAction",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
        {
          name: "carousel",
          title: "Carousel",
          type: "array",
          of: [{ type: "image" }],
          options: { hotspot: true },
          sortable: true,
          description: `Images for carousel on Events Page. 
       `,
        },
      ],
    },
  ],
};

export default events;

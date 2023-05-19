import callToAction from "./callToAction-schema";
const homeSectionContent = {
  name: "homeContent",
  title: "Home - Content",
  type: "document",
  fields: [
    {
      name: "homeSectionOne",
      title: "Home - Section One",
      type: "document",
      fields: [
        {
          name: "Logo",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          description: `Single image above title`,
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          description: `One sentence text.
       `,
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          description: `Description text. Use Shift + Enter to start a new paragraph.`,
        },
        {
          title: "Button Text",
          name: "callToAction",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
      ],
    },
    {
      name: "homeSectionTwo",
      title: "Home - Section Two",
      type: "document",
      fields: [
        {
          name: "Images",
          title: "Images",
          type: "array",
          of: [{ type: "image" }],
          options: { hotspot: true },
          sortable: true,
          validation: (Rule: {
            required: () => {
              (): any;
              new (): any;
              length: {
                (arg0: number): {
                  (): any;
                  new (): any;
                  error: { (arg0: string): any; new (): any };
                };
                new (): any;
              };
            };
          }) =>
            Rule.required().length(3).error("Maximum 3 images can be uploaded"),

          description: `Images to showcase (Max 3 Images). 
       `,
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          description: `One sentence text.
       `,
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          description: `Description text. Use Shift + Enter to start a new paragraph.`,
        },
      ],
    },

    {
      name: "homeMidBanner",
      title: "Home - Mid Banner",
      type: "document",
      fields: [
        {
          name: "banner",
          title: "Banner",
          type: "image",
          options: { hotspot: true },
          description: `Single image.`,
        },
      ],
    },
  ],
};

export default homeSectionContent;

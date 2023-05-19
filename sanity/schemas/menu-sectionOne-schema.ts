import callToAction from "./callToAction-schema";

const menuSectionOne = {
  name: "menuSectionOne",
  title: "Menu - Section One",
  type: "document",
  fields: [
    {
      name: "banner",
      title: "Hero Banner",
      type: "image",
      options: { hotspot: true },
      description: `Single image.`,
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
      }) => Rule.required().length(3).error("Maximum 3 images can be uploaded"),

      description: `Images to showcase (Max 3 Images). 
       `,
    },
    {
      name: "image",
      title: "Menu Image",
      type: "image",
      options: { hotspot: true },
      description: `Upload a single Image, located right of Menu List.`,
    },
  ],
};

export default menuSectionOne;

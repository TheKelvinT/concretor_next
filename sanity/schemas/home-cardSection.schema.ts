import callToAction from "./callToAction-schema";
const homeCardSection = {
  name: "homeCardSection",
  title: "Home - Card Section",
  type: "document",
  fields: [
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
      name: "image",
      title: "Image",
      type: "image",
      description: `Upload a single Image`,
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
};

export default homeCardSection;

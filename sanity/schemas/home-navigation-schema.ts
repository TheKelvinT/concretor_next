import callToAction from "./callToAction-schema";

const homeNavigation = {
  name: "homeNavigation",
  title: "Home - Navigation",
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
      type: "string",
      description: `Description text.`,
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

export default homeNavigation;

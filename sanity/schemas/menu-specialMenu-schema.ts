import callToAction from "./callToAction-schema";

const specialMenu = {
  name: "specialMenu",
  title: "Menu - Special",
  type: "document",
  fields: [
    {
      name: "intro",
      title: "Sub Title",
      type: "string",
      description: `One sentence text.
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
      name: "time",
      title: "Serving Time",
      type: "string",
      description: `eg: Serving from 10am - 9pm.
       `,
    },
    {
      name: "date",
      title: "Serving Date",
      type: "string",
      description: `eg: 'From 12 February to 28 February 2023'
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
      name: "specialImage",
      title: "Special Menu Image",
      type: "image",
      description: `Upload a single Image, located right of Special Menu`,
    },
  ],
};

export default specialMenu;

import callToAction from "./callToAction-schema";

const menus = {
  name: "menus",
  title: "Menu - Menu List",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: `Main Description
       `,
    },
    {
      name: "time",
      title: "Serving Time",
      type: "string",
      description: `eg: 'Serving from 10am - 9pm'
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
  ],
};

export default menus;

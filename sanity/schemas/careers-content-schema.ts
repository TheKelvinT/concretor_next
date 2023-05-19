import callToAction from "./callToAction-schema";
const careerContent = {
  name: "careerContent",
  title: "Careers - Content",
  type: "document",
  fields: [
    {
      name: "sectionOne",
      title: "Section One",
      type: "document",
      description: ` First section of the page.
       `,
      fields: [
        {
          name: "pageHeader",
          title: "Main Page Header",
          type: "string",
          description: `
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
          title: "Button One",
          name: "callToAction1",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
        {
          title: "Button Two",
          name: "callToAction2",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
      ],
    },

    {
      name: "sectionTwo",
      title: "Section Two",
      type: "document",
      description: ` Second section of the page.
       `,
      fields: [
        {
          name: "pageHeader",
          title: "Section Two Header",
          type: "string",
          description: `
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
          title: "Button",
          name: "callToAction1",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
      ],
    },

    {
      name: "lastSection",
      title: "Final Section",
      type: "document",
      description: `Last section of the page 
       `,
      fields: [
        {
          name: "pageHeader",
          title: "Final Section Header",
          type: "string",
          description: `
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
          title: "Button One",
          name: "callToAction1",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
        {
          title: "Button Two",
          name: "callToAction2",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
        },
      ],
    },
  ],
};

export default careerContent;

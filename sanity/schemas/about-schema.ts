import callToAction from "./callToAction-schema"

const aboutSectionContent = {
  name: "aboutContent",
  title: "About - Content",
  type: "document",
  fields: [
    {
      name: "aboutSectionOne",
      title: "About - Section One",
      type: "document",
      fields: [
        {
          name: "banner",
          title: "Banner",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          description: "One sentence text",
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          description: "One sentence text",
        },
        {
          name: "callToAction",
          title: "Button Text",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: "Select Call to Action.",
        },
      ],
    },
    {
      name: "aboutSectionTwo",
      title: "About - Section Two",
      type: "document",
      fields: [
        {
          name: "titleTop",
          title: "Title - Top",
          type: "string",
          description: "One sentence text",
        },
        {
          name: "descriptionTop",
          title: "Description - Top",
          type: "array",
          of: [{ type: "block" }],
          description:
            "Description text. Use Shift + Enter to start a new paragraph.",
        },
        {
          name: "imageTop",
          title: "Image - Top",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
        },
        {
          name: "titleBottom",
          title: "Title - Bottom",
          type: "string",
          description: "One sentence text",
        },
        {
          name: "descriptionBottom",
          title: "Description - Bottom",
          type: "array",
          of: [{ type: "block" }],
          description:
            "Description text. Use Shift + Enter to start a new paragraph.",
        },
        {
          name: "imageBottom",
          title: "Image - Bottom",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
        },
      ],
    },
    {
      name: "aboutSectionThree",
      title: "About - Section Three",
      type: "document",
      fields: [
        {
          name: "titleLeft",
          title: "Title - Left",
          type: "string",
          description: "One sentence text",
        },
        {
          name: "descriptionLeft",
          title: "Description - Left",
          type: "array",
          of: [{ type: "block" }],
          description:
            "Description text. Use Shift + Enter to start a new paragraph.",
        },
        {
          name: "titleRight",
          title: "Title - Right",
          type: "string",
          description: "One sentence text",
        },
        {
          name: "descriptionRight",
          title: "Description - Right",
          type: "array",
          of: [{ type: "block" }],
          description:
            "Description text. Use Shift + Enter to start a new paragraph.",
        },
      ],
    },
  ],
}

export default aboutSectionContent

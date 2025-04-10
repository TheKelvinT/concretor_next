import callToAction from "./callToAction-schema"

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
          name: "banner",
          title: "Banner",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          description: "One sentence text",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          description:
            "Description text. Use Shift + Enter to start a new paragraph.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "callToActionLeft",
          title: "Button text - Left",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: "Select Call to Action",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "callToActionRight",
          title: "Button text - Right",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: "Select Call to Action",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "homeSectionTwo",
      title: "Home - Section Two",
      type: "document",
      fields: [
        {
          name: "image",
          title: "Image",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "title",
          title: "Title",
          type: "string",
          description: "One sentence text",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "description",
          title: "Description",
          type: "array",
          of: [{ type: "block" }],
          description:
            "Description text. Use Shift + Enter to start a new paragraph.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "callToActionLeft",
          title: "Button text - Left",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: "Select Call to Action",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "callToActionRight",
          title: "Button text - Right",
          type: "reference",
          to: [{ type: "callToAction" }],
          description: "Select Call to Action",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: "homeSectionThree",
      title: "Home - Section Three",
      type: "document",
      fields: [
        {
          name: "imageleft",
          title: "Image - Left",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "titleLeft",
          title: "Title - Left",
          type: "string",
          description: "Number displayed.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "descriptionLeft",
          title: "Description - Left",
          type: "string",
          description: "Short one sentence desription.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "imageMiddle",
          title: "Image - Middle",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "titleMiddle",
          title: "Title - Middle",
          type: "string",
          description: "Number displayed.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "descriptionMiddle",
          title: "Description - Middle",
          type: "string",
          description: "Short one sentence desription.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "imageRight",
          title: "Image - Right",
          type: "image",
          options: { hotspot: true },
          description: "Single image.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "titleRight",
          title: "Title - Right",
          type: "string",
          description: "Number displayed.",
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: "descriptionRight",
          title: "Description - Right",
          type: "string",
          description: "Short one sentence desription.",
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
}

export default homeSectionContent

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
                    name: "banner",
                    title: "Banner",
                    type: "image",
                    options: {hotspot: true},
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
                    of:[{type: "block"}],
                    description: "Description text. Use Shift + Enter to start a new paragraph.",
                },
                {
                    name: "callToActionLeft",
                    title: "Button text - Left",
                    type: "reference",
                    to: [{type: "callToAction"}],
                    description: "Select Call to Action",
                },
                {
                    name: "callToActionRight",
                    title: "Button text - Right",
                    type: "reference",
                    to: [{type: "callToAction"}],
                    description: "Select Call to Action",
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
                    options: {hotspot: true},
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
                    of:[{type: "block"}],
                    description: "Description text. Use Shift + Enter to start a new paragraph.",
                },
                {
                    name: "callToActionLeft",
                    title: "Button text - Left",
                    type: "reference",
                    to: [{type: "callToAction"}],
                    description: "Select Call to Action",
                },
                {
                    name: "callToActionRight",
                    title: "Button text - Right",
                    type: "reference",
                    to: [{type: "callToAction"}],
                    description: "Select Call to Action",
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
                    options: {hotspot: true},
                    description: "Single image.",
                },
                {
                    name: "titleLeft",
                    title: "Title - Left",
                    type: "string",
                    description: "Number displayed."
                },
                {
                    name: "descriptionLeft",
                    title: "Description - Left",
                    type: "string",
                    description: "Short one sentence desription.",
                },
                {
                    name: "imageMiddle",
                    title: "Image - Middle",
                    type: "image",
                    options: {hotspot: true},
                    description: "Single image.",
                },
                {
                    name: "titleMiddle",
                    title: "Title - Middle",
                    type: "string",
                    description: "Number displayed."
                },
                {
                    name: "descriptionMiddle",
                    title: "Description - Middle",
                    type: "string",
                    description: "Short one sentence desription.",
                },
                {
                    name: "imageRight",
                    title: "Image - Right",
                    type: "image",
                    options: {hotspot: true},
                    description: "Single image.",
                },
                {
                    name: "titleRight",
                    title: "Title - Right",
                    type: "string",
                    description: "Number displayed."
                },
                {
                    name: "descriptionRight",
                    title: "Description - Right",
                    type: "string",
                    description: "Short one sentence desription.",
                },
            ],
        },
    ],
};

export default homeSectionContent;
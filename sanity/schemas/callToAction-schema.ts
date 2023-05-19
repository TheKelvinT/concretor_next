const callToAction = {
  name: "callToAction",
  title: "Call To Action",
  type: "document",
  fields: [
    {
      name: "cta",
      title: "Call To Action",
      type: "string",
      description: `or your own Reference
       `,
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },

    {
      name: "routes",
      title: "Path To/href",
      type: "string",
    },
  ],
};

export default callToAction;

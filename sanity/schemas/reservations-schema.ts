const reservations = {
  name: "reservations",
  title: "Reservations - Description",
  type: "document",
  fields: [
    {
      name: "banner",
      title: "Banner",
      type: "image",
      options: { hotspot: true },
      description: `Single image.`,
    },
    {
      name: "title",
      title: "Page Header",
      type: "string",
      description: `Reservation page header
       `,
    },

    {
      name: "desc",
      title: "Page Description",
      type: "string",
      description: `Short Description Text
       `,
    },
    {
      name: "openingHours",
      title: "Operating Hours",
      type: "document",
      description: `Operating Hours Infomation
       `,
      fields: [
        {
          name: "openingHoursTitle",
          title: "Title",
          type: "string",
          description: `Operating Hours Title
       `,
        },
        {
          name: "openingHour",
          title: "Main Operating Hours ",
          type: "string",
          description: `Line One description text
       `,
        },
        {
          name: "closeHoursTitle",
          title: "None Operating Days ",
          type: "string",
          description: `Line Two description text
       `,
        },
        {
          name: "lastCall",
          title: "last call ",
          type: "string",
          description: `Last call description text
       `,
        },
      ],
    },
    {
      title: "Button Text under FAQ",
      name: "callToAction",
      type: "reference",
      to: [{ type: "callToAction" }],
      description: `Select 'Call To Action'. Refer to 'Call To Action' for more info.
       `,
    },
  ],
};

export default reservations;

const openings = {
  name: "openings",
  title: "Careers - Openings",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      title: "Lower Salary Range",
      name: "lowSalaryRange",
      type: "string",
    },
    {
      title: "Higher Salary Range",
      name: "highSalaryRange",
      type: "string",
    },
    {
      title: "Job Description",
      name: "jobDescription",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Job Requirements",
      name: "jobReq",
      type: "array",
      of: [{ type: "string" }],
    },
    // {
    //   name: "contact",
    //   title: "Contact Info",
    //   type: "string",
    //   description: `One Sentence of contact info.
    //    `,
    // },
  ],
};

export default openings;

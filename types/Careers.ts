export type Careers = {
  _id: string;
  _createdAt: Date;
  title: string;
  banner: string;
  desc: string;
  callToAction: string;
};

export type opening = {
  jobReq: string[];
  jobDescription: string[];
  summary: string;
  highSalaryRange: string;
  lowSalaryRange: string;
  _id: string;
  position: string;
  // Add other properties as needed
};

import { PortableTextBlock } from "sanity";

export type Faq = {
  _id: string;
  _createdAt: Date;
  question: string;
  answer: string;
};

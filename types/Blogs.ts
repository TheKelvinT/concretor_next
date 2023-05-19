import { PortableTextBlock } from "sanity";

export type Blog = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  image: string;
  summary: PortableTextBlock[];
  content: PortableTextBlock[];
};

export type BlogHero = {
  banner: string;
  _id: string;
  _createdAt: Date;
  title: string;
  header: string;
  image: string;
  blogDesc: string;
};

import { PortableTextBlock } from "sanity";

export type IBlogPost = {
  title: string;
  slug: string;
  image: {url: string};
  tags: string[];
  content: {
    _key: string;
    markDefs: {
      _type: "link";
      href: string;
      _key: string;
    }[];
    children: {
      _type: "span";
      marks: string[];
      text: string;
      _key: string;
    }[];
    _type: "block";
    style: string;
  }[];
  _id: string;
  _createdAt: string;
  summary: {
    children: {
      _type: "span";
      marks: string[];
      text: string;
      _key: string;
    }[];
    _type: "block";
    style: string;
    _key: string;
    markDefs: {
      _key: string;
      _type: "link";
      href: string;
    }[];
  }[];
};

export type SingleBlogModel = {
  author?: string;
  title?: string;
  image?: string;
  content?: PortableTextContent[] | any[];
  _createdAt?: Date | undefined;
};

export type PortableTextContent = {
  _key: string;
  _type: "block";
  children: PortableTextSpan[];
  markDefs?: PortableTextMarkDef[];
  style: string;
};

export type PortableTextSpan = {
  _key: string;
  _type: "span";
  text: string;
  marks?: string[];
};

export type PortableTextMarkDef = {
  _type: "link";
  href: string;
  _key: string;
};
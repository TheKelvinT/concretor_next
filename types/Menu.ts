export type Menu = {
  _id: string;
  _createdAt: Date;
  title: string;
  time: string;
  date: string;
  description: string;
  callToAction: {
    buttonText: string;
    routes: string;
  };
  banner: string;
  desc: string;
  image: string;
};

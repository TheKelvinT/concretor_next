export type Events = {
  _id: string;
  _createdAt: Date;
  title: string;
  banner: {
    image: string;
  };
  time: string;
  date: string;
  description: string;
  callToAction: {
    buttonText: string;
    routes: string;
  };

  desc: string;
  image: string;
};

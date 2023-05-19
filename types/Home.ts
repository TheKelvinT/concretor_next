export type Home = {
  homeMidBanner: {
    bannerURL: string;
  };

  homeSectionTwo: {
    title: string;
    Images: {
      imageURL: string;
    }[];
  };
};

export type navigation = {
  title: string;
  image: string;
  description: string;
  _id: string;
  callToAction: {
    routes: string;
    buttonText: string;
  };

  // Add other properties as needed
};

// Add other properties as needed

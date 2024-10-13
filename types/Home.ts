type HomeSection = {
  image?: string
  title: string
  description: {
    _key: string
    markDefs: any[]
    children: {
      marks: any[]
      text: string
      _key: string
      _type: string
    }[]
    _type: string
    style: string
  }[]
  callToActionLeft: {
    buttonText: string
    routes: string
  }
  callToActionRight: {
    buttonText: string
    routes: string
  }
}

type HomeSectionThree = {
  imageMiddle: string
  imageRight: string
  imageLeft: string
  titleRight: string
  titleLeft: string
  titleMiddle: string
  descriptionLeft: string
  descriptionMiddle: string
  descriptionRight: string
}

export type IHomePageContent = {
  homeSectionOne: HomeSection
  homeSectionTwo: HomeSection
  homeSectionThree: HomeSectionThree
}

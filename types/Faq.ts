type ImageAsset = {
  _ref: string
  _type: "reference"
}

type TextSpan = {
  _type: "span"
  marks: string[]
  text: string
  _key: string
}

type Block = {
  style: string
  _key: string
  markDefs: any[]
  children: TextSpan[]
  _type: "block"
}

type CallToAction = {
  buttonText: string
  routes: string
}

type AboutSectionOne = {
  banner: { asset: { url: string } }
  title: string
  description: Block[]
  callToAction: CallToAction
}

type AboutSectionTwo = {
  descriptionTop: Block[]
  imageTop: { asset: { url: string } }
  titleTop: string
  titleBottom: string
  descriptionBottom: Block[]
  imageBottom: { asset: { url: string } }
}

type AboutSectionThree = {
  titleLeft: string
  descriptionLeft: Block[]
  titleRight: string
  descriptionRight: Block[]
}

export type IAboutPage = {
  aboutSectionOne: AboutSectionOne
  aboutSectionTwo: AboutSectionTwo
  aboutSectionThree: AboutSectionThree
}

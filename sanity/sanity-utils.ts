import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"

import { Careers } from "@/types/Careers"
import { Reservations } from "@/types/Reservations"
import { Menu } from "@/types/Menu"
import { Events } from "@/types/Events"
import axios from "axios"

export const fetchBlogPost = async () => {
  const response = await axios.get(
    " https://say9s8oc.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D%7B%0A%20%20%20%20%20%20_id%2C%0A%20%20%20%20%20%20_createdAt%2C%0A%20%20%20%20%20%20summary%2C%0A%20%20%20%20%20%20title%2C%0A%20%20%20%20%20%20%22slug%22%3A%20slug.current%2C%0A%20%20%20%20%20%20%22image%22%3A%20image.asset%20-%3E%20url%2C%0A%20%20%20%20%20%20content%0A%7D"
  )
  return response.data.result
}

export async function getReservations(): Promise<Reservations[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "reservations" ] {_id,_createdAt,"banner": banner.asset -> url,desc,callToAction,openingHours,title}`
  )
}

export async function getCareerContent(): Promise<Careers[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "careerContent" ]{
 sectionTwo{
        pageHeader,
  description,
    callToAction1 -> {
    cta,
      buttonText,
      routes
  
    }},
   lastSection{
      pageHeader,
  description,
   callToAction1 -> {
     cta,
      buttonText,
      routes
    },
    callToAction2 -> {
    cta,
      buttonText,
      routes
  
    }
   },
  sectionOne {
     pageHeader,
  description,
    callToAction1 -> {
     cta,
      buttonText,
      routes
    },
    callToAction2 -> {
    cta,
      buttonText,
      routes
  
    }
  }
}`)
}

export async function getOpenings(): Promise<Careers[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "openings" ] | order(_createdAt asc) `
  )
}

export async function getValues(): Promise<Careers[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "values" ]{_id,_createdAt,"image": image.asset -> url,valueDesc,value} `
  )
}

// Menu

export async function getMenuSectionOne(): Promise<Menu[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "menuSectionOne"] {
  "banner": banner.asset->url,
    title,
  _id,
  "image": image.asset->url,
  description,
  callToAction->{
    cta,
    buttonText,
    routes
  },
  "images": Images[].asset->url
}`)
}

export async function getMenus(): Promise<Menu[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "menus"] {
  
    title,
    time,
  _id,
  "image": image.asset->url,
  description,
  callToAction->{
    cta,
    buttonText,
    routes
  },
  "images": Images[].asset->url
}`)
}

export async function getSpecialMenu(): Promise<Menu[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "specialMenu"] {
  title,
    intro,
    time,
    date,
  _id,
  description,
  callToAction->{
    cta,
    buttonText,
    routes
  },
  "image": specialImage.asset->url
}`)
}

export async function getEvents(): Promise<Events[]> {
  return createClient(clientConfig).fetch(groq`*[_type == "events"]{
  banner{"image": asset->url},
sectionOne{
  title,
desc,
callToAction->{
    cta,
    buttonText,
    routes
  },
},
sectionTwo{
  "image": image.asset->url,
    title,
      callToAction->{
    cta,
    buttonText,
    routes
  },
Sectioncontent,
      
},
sectionThree{
       carousel[]{
    "image": asset->url
  },
  title,
  Sectioncontent,
  callToAction->{
    cta,
    buttonText,
    routes
  }
}
}`)
}

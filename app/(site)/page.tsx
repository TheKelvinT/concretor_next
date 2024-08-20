"use client"
import Image from "next/image"

import MainCarousel from "@/components/MainCarousel"

import ContactSection from "@/components/ContactSection"
import {
  getCardSection,
  getCarousel,
  getHomeContent,
  getHomeNavigation,
} from "@/sanity/sanity-utils"
import { useEffect } from "react"
import axios from "axios"

export default async function Home() {
  useEffect(() => {
    getCharacter()
  }, [])
  const getCharacter = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character")
    console.log(res)
  }
  return <div className="">Home</div>
}

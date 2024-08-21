"use client"

import axios from "axios"

export default async function Home() {
  const getCharacter = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character")
    console.log(res)
  }
  return <div className="">Home</div>
}

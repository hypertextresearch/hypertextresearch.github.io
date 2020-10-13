import React from "react"
import Navbar from "../components/navbar"
import Hero from "../components/hero"

import "../styles/globals.scss"
import { Helmet } from "react-helmet"

export default function Home() {
  return <div>
    <Helmet>
      <title>Hypertext Research | Home</title>
    </Helmet>

    <Navbar />
    <Hero />
  </div>
}

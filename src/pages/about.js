import React from "react"
import Navbar from "../components/navbar"

import styles from "../styles/about.module.scss"
import { Helmet } from "react-helmet"

export default function About() {
  return <div>
    <Helmet>
      <title>Hypertext Research | About</title>
    </Helmet>

    <Navbar />

    <main className={styles.contentContainer}>
      <h1 className={styles.heading}>
        about hypertext research
      </h1>

      <p className={styles.paragraph}>
        Hypertext Research is a research firm based in Cambridge, Massachusetts. Topics of interest include geometric deep learning, model-based reinforcement learning, and infrastructure design.
      </p>
    
      <p className={styles.paragraph}>
        Please send any inquiries to <code>hello /at/ hypertext.sh</code>.
      </p>
    </main>

  </div>
}

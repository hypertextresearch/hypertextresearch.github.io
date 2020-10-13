import React from "react"

import name from "../images/name-offwhite.svg"
import map from "../images/map.svg"
import styles from "../styles/hero.module.scss"

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <object type="image/svg+xml" data={map} className={styles.map}>
        </object>


        <div className={styles.mainContent}>
          <object type="image/svg+xml" data={name} className={styles.name}></object>

          <p className={styles.message}>Unlocking the secrets of intelligence</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
import React from "react"

import styles from "../styles/hero.module.scss"

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContainer}>
        <object type="image/svg+xml" data="/map.svg" className={styles.map}>
        </object>


        <div className={styles.mainContent}>
          <object type="image/svg+xml" data="/name-offwhite.svg" className={styles.name}></object>

          <p className={styles.message}>Unlocking the secrets of intelligence</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
import { Link } from "gatsby"
import React, { useState } from "react"
import classNames from "classnames"
import styles from "../styles/navbar.module.scss"
import logo from "../images/logo-white.svg"

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logoContainer}>
            <object data={logo} className={styles.logo}></object>
            <span className={styles.logoText}>Hypertext</span>
          </Link>

          <ul className={
            classNames(
              styles.navMenu, {
                [styles.active]: clicked
              })
          }>
            <li className={styles.navItem}>
              <Link to="#" className={styles.navLinks}>Research</Link>
            </li>

            <li className={styles.navItem}>
              <Link to="#" className={styles.navLinks}>Infra</Link>
            </li>

            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLinks}>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
import { Link } from "gatsby"
import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import classNames from "classnames"
import styles from "../styles/navbar.module.scss"

function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.logoContainer}>
            <object data="/logo-white.svg" className={styles.logo}></object>
            Hypertext
          </Link>

          {/* <div className="menu-icon" onClick={handleClick}>
            { clicked ? <FaTimes /> : <FaBars /> }
          </div> */}

          <ul className={
            classNames(
              styles.navMenu, {
                [styles.active]: clicked
              })
          }>
            <li className={styles.navItem}>
              <Link to="/research" className={styles.navLinks}>Research</Link>
            </li>

            <li className={styles.navItem}>
              <Link to="/infra" className={styles.navLinks}>Infra</Link>
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

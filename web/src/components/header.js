import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import {faFacebookSquare,faInstagram,faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo2x from "../images/logo@2x.png"

import styles from './header.module.css'

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>

      <Link className={styles.logo} to='/'>
        <img src={Logo2x} title="Grapevine Tattoo" alt="Grapevine Tattoo" />
      </Link>
      <div className={styles.social}>
        <a href="https://www.instagram.com/grapevinetattoo/" rel="noreferrer" target="_blank" className={styles.socialLink}>
          <FontAwesomeIcon title="instagram link" icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com/watch?v=7xCTAqcATx8" rel="noreferrer" target="_blank" className={styles.socialLink}>
          <FontAwesomeIcon title="youtube link" icon={faYoutubeSquare} />
        </a>
        <a href="https://www.facebook.com/grapevinetattoo/" rel="noreferrer" target="_blank" className={styles.socialLink}>
          <FontAwesomeIcon title="facebook link" icon={faFacebookSquare} />
        </a>
      </div>
    </div>
  </div>
)

export default Header

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
        <img src={Logo2x} />
      </Link>
      <div className={styles.social}>
        <Link to='/' className={styles.socialLink}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link to='/' className={styles.socialLink}>
          <FontAwesomeIcon icon={faYoutubeSquare} />
        </Link>
        <Link to='/' className={styles.socialLink}>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </Link>
      </div>
    </div>
  </div>
)

export default Header

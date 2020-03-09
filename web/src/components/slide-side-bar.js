import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './slide-side-bar.module.css'

const SlideSideBar = ({ onHideNav, onShowNav, showNav }) => (
  <aside className={styles.sideBar}>
    <button title="Navigation Menu" name="Navigation Menu" className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav className={cn(styles.nav, showNav && styles.showNav)}>
      <ul>
        <li>
          <Link to='/artists/'>Artists</Link>
        </li>
        <li>
          <Link to='/guest-artists/'>Guest Artists</Link>
        </li>
        <li>
          <Link to='/about/'>About</Link>
        </li>
        <li>
          <Link to='/blog/'>News</Link>
        </li>
        <li>
          <Link to='/contact/'>Contact</Link>
        </li>
        <li>
          <Link to='/faq/'>FAQ</Link>
        </li>
      </ul>
    </nav>
  </aside>
)

export default SlideSideBar

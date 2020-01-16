import React from 'react'
import Header from './header'
import SlideSideBar from './slide-side-bar'

import '../styles/layout.css'
import styles from './layout.module.css'
import Subscribe from './subscribe'
import Footer from './footer'
const Layout = ({ children, companyInfo, onHideNav, onShowNav, showNav, siteTitle }) => (
  <>
    <Header siteTitle={siteTitle} />
    <SlideSideBar onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <Footer/>
  </>
)

export default Layout

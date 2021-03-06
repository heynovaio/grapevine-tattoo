import React from "react"
import SocialFeed from "./socialFeed"
import { cn, buildImageObj } from '../../lib/helpers'
import { headline, heading, headlineBg2, paragraph, gridTitle } from '../../components/typography.module.css'
import {faFacebookSquare,faInstagram,faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'gatsby'
import Container from './../container'

import styles from './social.module.css'

export const SocialContainer = ({ nodes }) => {
  return (
    <section className={styles.socialContainer}>
      <Container>
        <div className={styles.title}>
          <h2 className={cn(headline, styles.h2headline)}>
            <span role="presentation" className={cn(headlineBg2, styles.h2headlineBg)}>
              Social Media</span>
            <span className={cn(heading, styles.h2heading)}>
                Follow Us</span>
          </h2>
        </div>
        <ul className={styles.social}>
          <li>
            <a href="https://www.youtube.com/watch?v=7xCTAqcATx8" rel="noreferrer" target="_blank" className={styles.socialLink}>
              <FontAwesomeIcon icon={faYoutubeSquare} />
              <span>Youtube Video</span>
            </a>
          </li>

          <li>
            <a href="https://www.instagram.com/grapevinetattoo/" rel="noreferrer" target="_blank" className={styles.socialLink}>
              <FontAwesomeIcon icon={faInstagram} />
              <span>@grapevinetatoo</span>
            </a>
          </li>

          <li>
            <a href="https://www.facebook.com/grapevinetattoo/" rel="noreferrer" target="_blank" className={styles.socialLink}>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <span>/grapevinetattoo</span>
            </a>
          </li>
        </ul>
        </Container>
      <SocialFeed nodes={nodes} />
    </section>
  )
}
export default SocialContainer

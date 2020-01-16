import React from 'react'
import { Link } from 'gatsby'
import { cn, buildImageObj } from '../lib/helpers'
import BlockContent from './block-content'
import Container from './container'

import { headline, heading, headlineBg, paragraph } from '../components/typography.module.css'
import styles from './become-guest.module.css'

function BecomeGuest ({  }) {
  return (
    <section className={styles.subscribe}>
      <Container>
        <div className={styles.box}>
          <div className={styles.title}>
            <h2 className={cn(headline, styles.h2headline)}>
              <span role="presentation" className={cn(headlineBg, styles.h2headlineBg)}>
                Wanted</span>
              <span className={cn(heading, styles.h2heading)}>
                  Become Our Next Guest Star</span>
            </h2>
          </div>
          <p className={cn(paragraph, styles.text)}>
            There’s a reason the best guest artists come from all over the globe to do a creative residency at Grapevine: we will treat you like the star that you are. We are actively seeking applications for new guest artists!
          </p>
          <button className={styles.primary} >
           Apply Here
          </button>
        </div>
      </Container>
    </section>
  )
}

export default BecomeGuest

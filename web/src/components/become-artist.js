import React from 'react'
import { Link } from 'gatsby'
import { cn, buildImageObj } from '../lib/helpers'
import BlockContent from './block-content'
import Container from './container'

import { headline, heading, headlineBg, paragraph } from '../components/typography.module.css'
import styles from './become-guest.module.css'

function BecomeArtist ({  }) {
  return (
    <section className={styles.subscribe}>
      <div className={styles.box}>
        <div className={styles.title}>
          <h2 className={cn(headline, styles.h2headline)}>
            <span role="presentation" className={cn(headlineBg, styles.h2headlineBg)}>
              Wanted</span>
            <span className={cn(heading, styles.h2heading)}>
                Become Our Next Artist</span>
          </h2>
        </div>
        <p className={cn(paragraph, styles.text)}>
         We are always actively seeking applications for more star artists to join us!
        </p>
        <a href="https://form.jotform.com/grapevinetattoo/new-artist-form" target="_blank" className={styles.primary} >
         Apply Here
        </a>
      </div>
    </section>
  )
}

export default BecomeArtist

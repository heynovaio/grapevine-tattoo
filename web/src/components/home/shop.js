import React from 'react'
import { Link } from 'gatsby'
import { cn, buildImageObj } from '../../lib/helpers'
import BlockContent from './../block-content'
import Container from './../container'

import { headline, heading, headlineBg, paragraph, gridTitle } from '../../components/typography.module.css'
import styles from './shop.module.css'

function Shop ({  }) {
  return (
    <section className={styles.shop}>
      <Container>
        <div className={styles.box}>
          <div className={styles.title}>
            <h2 className={cn(headline, styles.h2headline)}>
              <span role="presentation" className={cn(headlineBg, styles.h2headlineBg)}>
                Studio</span>
              <span className={cn(heading, styles.h2heading)}>
                  Inside Grapevine Tattoo</span>
            </h2>
          </div>
          <h3 className={gridTitle}>Our Vision</h3>
          <p className={cn(paragraph, styles.shopCopy)}>Grapevine tattoo is all about connection. We bring artists into our shop from all over the world, just as we draw in clients from all walks of life. Through breathtaking art and shared vision, we want to connect you with your best self.</p>
          <p className={cn(paragraph, styles.shopCopy)}>Tattooing a transformative process, and we appreciate the incredible trust all of our clients place in us. From our spa-like atmosphere to our client-centered approach, we want your experience at Grapevine to be like no other studio. We are absolutely committed to ensuring every part of your experience, from the initial consultation to aftercare, is exactly what you need.</p>
          <h3 className={gridTitle}>A Look Inside</h3>
          <p className={cn(paragraph, styles.shopCopy)}>
            The moment you step inside our shop, you’ll know that Grapevine is different. Is it the warm and welcoming ambience, the impeccable taste in decor, or the enigmatic and alluring personality that sets us apart? Whatever it is that first draws you in, you’ll find something that lets you know you’ve finally come to the right place.
          </p>
          <Link className={styles.link} to='/about/'>Read More About Us</Link>
        </div>
      </Container>
    </section>
  )
}

export default Shop

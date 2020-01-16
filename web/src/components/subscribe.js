import React from 'react'
import { Link } from 'gatsby'
import { cn, buildImageObj } from '../lib/helpers'
import BlockContent from './block-content'
import Container from './container'

import { headline, heading, headlineBg, paragraph } from '../components/typography.module.css'
import styles from './subscribe.module.css'

function Subscribe ({  }) {
  return (
    <section className={styles.subscribe}>
      <Container>
      	<div className={styles.box}>
      		<div className={styles.title}>
	          <h2 className={cn(headline, styles.h2headline)}>
	            <span role="presentation" className={cn(headlineBg, styles.h2headlineBg)}>
	              Subscribe</span>
	            <span className={cn(heading, styles.h2heading)}>
	                Connect With Grapevine</span>
	          </h2>
	        </div>
	        <p className={cn(paragraph, styles.text)}>
	        	Become a part of the Grapevine community, and never miss a guest artists announcement, convention appearance or gallery showing.
	        </p>
          <form className={styles.mailchimp}>
            <label>Email Address:</label>
            <input type="text" placeholder="" />
            <button className={styles.primary}>Subscribe</button>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Subscribe

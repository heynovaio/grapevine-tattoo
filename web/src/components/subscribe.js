import React from 'react'
import { Link } from 'gatsby'
import { cn, buildImageObj } from '../lib/helpers'
import BlockContent from './block-content'
import Container from './container'
import Mailchimp from 'react-mailchimp-form'


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
            <label to="EMAIL">Email Address:</label>
            <Mailchimp
              action='https://grapevinetattoo.us4.list-manage.com/subscribe/post?u=af4b47905d3a9071566b719cf&amp;id=c93a240ec4'
              fields={[
                {
                  name: 'EMAIL',
                  type: 'email',
                  required: true
                }
              ]}
               // Change predetermined language
              messages = {
                {
                  sending: "Sending...",
                  success: "Thank you for subscribing!",
                  error: "An unexpected internal error has occurred.",
                  empty: "You must write an e-mail address.",
                  duplicate: "Too many subscribe attempts for this email address",
                  button: "Subscribe"
                }
              }
            />
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Subscribe

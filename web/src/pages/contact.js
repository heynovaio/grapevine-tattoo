import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Subscribe from '../components/subscribe'

import { cn, buildImageObj } from '../lib/helpers'
import { responsiveTitle1 } from '../components/typography.module.css'
import {faFacebookSquare,faInstagram,faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import {faMapMarkedAlt, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { headline, headline2, heading, headlineBg, paragraph, gridTitle } from '../components/typography.module.css'
import faqlink from './faq'
import styles from './../components/contact.module.css'

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      title
      _rawBody
    }
  }
`

const ContactPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data.page

  if (!page) {
    throw new Error(
      'Missing "Contact" page data. Open the studio at http://localhost:3333 and add "Contact" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <Container>
        <div className={styles.title}>
          <h2 className={cn(headline, styles.h2headline)}>
            <span role="presentation" className={cn(headlineBg, styles.h2headlineBg)}>
              Contact Us</span>
            <span className={cn(heading, styles.h2heading)}>
                Contact Us</span>
          </h2>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <div className={styles.question}>
              <h2 className={cn(headline2, styles.subtitle)}>
                Have a question?
              </h2>
              <p className={cn(paragraph, styles.text)}>
                We might already have the answer!
              </p>
              <Link className={styles.primary} to='/faq'>
                Check Our FAQ
              </Link>
            </div>
            <div className={styles.messageform}>
              <h2 className={cn(headline2, styles.subtitle)}>
                Still have a question?
              </h2>
              <p className={cn(paragraph, styles.text)}>
                We’d love to hear from you! Drop us a line and we’ll get back to you as soon as we can. If there’s a specific artist you’d like to hear from, be sure to let us know!
              </p>
              <form action="https://formspree.io/info@grapevinetattoo.com" method="POST">
                <label to="name">Name</label>
                <input id="name" name="name" type="text" className={styles.name}/>
                <label to="email">Email</label>
                <input type="text" id="email" name="_replyto" className={styles.email} maxlength="50"/>
                <label to="message">Message</label>
                <textarea name="message" id="message" className={styles.message} maxlength="1000"/>
                <input type="submit" value="Send Message" className={styles.primary} />
              </form>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.contact}>
              <h2 className={cn(headline2, styles.subtitle)}>
                Other Contact Methods
              </h2>
              <p className={cn(paragraph, styles.text)}>
                We are happy to speak to you over the phone, via email or feel free to drop by the shop in person.
              </p>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                  438 Main St
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:1.604.620.0777">1 604 620 0777</a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:info@grapevinetattoo.com?subject=Contact%20Form%20Message">info@grapevinetattoo.com</a>
                </li>
              </ul>

            </div>
            <div className={styles.follow}>
              <h2 className={cn(headline2, styles.subtitle)}>
                Follow Us
              </h2>
              <ul>
                <li>
                  <a href='https://www.instagram.com/grapevinetattoo/' target="_blank" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faInstagram} />
                    @grapevinetattoo
                  </a>
                </li>
                <li>
                  <a href='https://www.facebook.com/grapevinetattoo/' target="_blank" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                    /grapevinetattoo
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <Subscribe/>
    </Layout>
  )
}
ContactPage.defaultProps = {
  data: {
    page: {
      title: 'No title'
    }
  }
}
export default ContactPage

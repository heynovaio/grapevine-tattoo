import React from 'react'
import SEO from '../components/seo'
import Container from '../components/container'
import Layout from '../containers/layout'
import Subscribe from '../components/subscribe'

import { headline, headlineBg, heading, paragraph} from '../components/typography.module.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <Container>
      <h1 className={headline}>
        <span role="presentation" className={headlineBg}>Uh oh 404!</span>
        <span className={heading}>Page Not Found</span>
      </h1>
      <p className={paragraph}>You just hit a route that doesn&#39;t exist... the sadness.</p>

    </Container>
    <Subscribe/>
  </Layout>
)

export default NotFoundPage

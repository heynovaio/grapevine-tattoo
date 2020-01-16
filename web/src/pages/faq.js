import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import styles from '../components/faq.module.css'
import Subscribe from '../components/subscribe'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import { headline, headlineBg, heading, headline2 } from '../components/typography.module.css'

export const query = graphql`
  query FaqPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)faq/" }) {
      id
      title
      _rawBody
    }
    people: allSanityPerson {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
          }
          name
          _rawBio
        }
      }
    }
    posts: allSanityPost {
      edges {
        node {
          id
          publishedAt
          mainImage {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          _rawBody
          slug {
            current
          }
        }
      }
    }
  }
`

const FaqPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const page = data && data.page

  if (!page) {
    throw new Error(
      'Missing "FAQ" page data. Open the studio at http://localhost:3333 and add "FAQ" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title='FAQ' />
      <Container>
        <a id="faqlink"/>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>FAQ</span>
          <span className={heading}>Frequently Asked Questions</span>
        </h1>
        <div className={styles.faq}>
          <BlockContent blocks={page._rawBody || []} />
        </div>
      </Container>
      <Subscribe/>
    </Layout>
  )
}

export default FaqPage

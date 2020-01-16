import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '../components/block-content'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import PeopleGrid from '../components/people-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Timeline from '../components/about/timeline'
import Subscribe from '../components/subscribe'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { headline, headlineBg, heading, headline2 } from '../components/typography.module.css'

export const query = graphql`
  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
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

const AboutPage = props => {
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
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>{page.title}</span>
          <span className={heading}>Our Story</span>
        </h1>
        <BlockContent blocks={page._rawBody || []} />
        <Timeline/>

      </Container>
      <Subscribe/>
    </Layout>
  )
}

export default AboutPage

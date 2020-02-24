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
    about: sanityAbout(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
      years{
        _key
        _type
        milestones{
          _key
          _type
          value
          milestone {
            _key
            _type
            date
            title
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

  const aboutNodes = data && data.about


  return (
    <Layout>
      <Container>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>{aboutNodes.title}</span>
          <span className={heading}>Our Story</span>
        </h1>
        <BlockContent blocks={aboutNodes._rawBody || []} />

        <Timeline {...aboutNodes} />
      </Container>
      <Subscribe/>
    </Layout>
  )
}

export default AboutPage

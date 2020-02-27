import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ArtistPreviewGrid from '../components/artist-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import Subscribe from '../components/subscribe'

import { headline, headlineBg, heading, headline2 } from '../components/typography.module.css'

export const query = graphql`
  query ArtistsPageQuery {
    artists: allSanityArtist( sort: { fields: [publishedAt], order: ASC }) {
      edges {
        node {
          id
          where
          title
          image {
            asset {
              _id
            }
            alt
          }
          mainImage {
            asset {
              _id
            }
            alt
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const ArtistsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const artistNodes =
    data && data.artists && mapEdgesToNodes(data.artists).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Artists' />
      <Container>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>Community</span>
          <span className={heading}>Resident Artists</span>
        </h1>
        {artistNodes && artistNodes.length > 0 && <ArtistPreviewGrid nodes={artistNodes} />}
      </Container>
      <Subscribe/>
    </Layout>
  )
}

export default ArtistsPage

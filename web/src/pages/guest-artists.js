import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import GuestArtistPreviewGrid from '../components/guest-artist-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Subscribe from '../components/subscribe'

import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

import { headline, headlineBg, heading, headline2 } from '../components/typography.module.css'

export const query = graphql`
  query GuestArtistsPageQuery {
    guestArtists: allSanityGuestArtist(limit: 12, sort: { fields: [appearanceDate], order: DESC }) {
      edges {
        node {
          id
          appearanceDate
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

const GuestArtistsPage = props => {
  const { data, errors } = props
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const guestArtistNodes =
    data && data.guestArtists && mapEdgesToNodes(data.guestArtists).filter(filterOutDocsWithoutSlugs)
  return (
    <Layout>
      <SEO title='Guest Artists' />
      <Container>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>Community</span>
          <span className={heading}>Guest Artists</span>
        </h1>
        {guestArtistNodes && guestArtistNodes.length > 0 && <GuestArtistPreviewGrid nodes={guestArtistNodes} />}
      </Container>
      <Subscribe/>

    </Layout>
  )
}

export default GuestArtistsPage

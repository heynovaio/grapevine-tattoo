import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Artist from '../components/artist'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ArtistTemplateQuery($id: String!) {
    artist: sanityArtist(id: { eq: $id }) {
      id
      publishedAt
      image {
        asset {
          fluid(maxWidth: 270) {
            ...GatsbySanityImageFluid_noBase64
          }
          _id
        }
        alt
      }
      title
      where
      tagline
      slug {
        current
      }
      mainImage {
        asset {
          fluid(maxWidth: 1600) {
            ...GatsbySanityImageFluid_noBase64
          }
          _id
        }
        alt
      }
      bookinglink
      videolink
      _rawBody
      style
      dreamProject
      youtube
      instagram
      facebook
      email
      gallery{
        _key
        _type
        slides{
          asset{
            fixed(width: 600) {
              ...GatsbySanityImageFixed_noBase64
            }
            _id
          }
        }
      }
    }
  }
`

const ArtistTemplate = props => {
  const { data, errors } = props
  const artist = data && data.artist
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {artist && <SEO title={artist.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {artist && <Artist {...artist} />}
    </Layout>
  )
}

export default ArtistTemplate

import React from 'react'
import { graphql } from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import GuestArtist from '../components/guest-artist'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query GuestArtistTemplateQuery($id: String!) {
    guestArtist: sanityGuestArtist(id: { eq: $id }) {
      id
      appearanceDate
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
      bookingLink
      videoLink
      _rawBodyOne
      _rawBodyTwo
      _rawBodyThree
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
            _id
          }
        }
      }
    }
  }
`

const GuestArtistTemplate = props => {
  const { data, errors } = props
  const guestArtist = data && data.guestArtist
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {guestArtist && <SEO title={guestArtist.title || 'Untitled'} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}
      {guestArtist && <GuestArtist {...guestArtist} />}
    </Layout>
  )
}

export default GuestArtistTemplate

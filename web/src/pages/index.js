import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import ArtistPreviewGrid from '../components/artist-preview-grid'
import GuestArtistPreviewGrid from '../components/guest-artist-preview-grid'
import Shop from '../components/home/shop'
import Container from '../components/container'
import AboveTheFold from '../components/home/above-the-fold'
import GraphQLErrorList from '../components/graphql-error-list'
import ProjectPreviewGrid from '../components/project-preview-grid'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Subscribe from '../components/subscribe'

import SocialContainer from "../components/social/socialContainer"

export const query = graphql`
  query IndexPageQuery {

    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }

    projects: allSanityProject(sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
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
          slug {
            current
          }
        }
      }
    }

    artists: allSanityArtist( sort: { fields: [publishedAt], order: ASC }) {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
            alt
          }
          title
          where
          slug {
            current
          }
        }
      }
    }

    guestArtists: allSanityGuestArtist( sort: { fields: [appearanceDate], order: DESC }) {
      edges {
        node {
          id
          image {
            asset {
              _id
            }
            alt
          }
          title
          where
          slug {
            current
          }
        }
      }
    }

    posts: allSanityPost(limit: 2, sort: { fields: [publishedAt], order: DESC }) {
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

    allInstaNode(filter: { username: { eq: "grapevinetattoo" } }) {
      edges {
        node {
          username
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  const { data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }
  const allInstaNode = (data || {}).allInstaNode
  const site = (data || {}).site
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts).filter(filterOutDocsWithoutSlugs)
    : []
  const projectNodes = (data || {}).projects
    ? mapEdgesToNodes(data.projects).filter(filterOutDocsWithoutSlugs)
    : []
  const artistNodes = (data || {}).artists
    ? mapEdgesToNodes(data.artists).filter(filterOutDocsWithoutSlugs)
    : []
  const guestArtistNodes = (data || {}).guestArtists
    ? mapEdgesToNodes(data.guestArtists).filter(filterOutDocsWithoutSlugs)
    : []

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <AboveTheFold />
      <Container>
        {artistNodes && (
          <ArtistPreviewGrid
            title='Community'
            nodes={artistNodes}
            browseMoreHref='/artists/'
          />
        )}

        {guestArtistNodes && (
          <GuestArtistPreviewGrid
            title='Guest Artists'
            nodes={guestArtistNodes}
            browseMoreHref='/guest-artists/'
          />
        )}
      </Container>

      {postNodes && (
        <BlogPostPreviewGrid
          title='Latest blog posts'
          nodes={postNodes}
          browseMoreHref='/blog/'
        />
      )}
      <Subscribe/>
      <Shop />
      <SocialContainer nodes={allInstaNode} />
    </Layout>
  )
}

export default IndexPage

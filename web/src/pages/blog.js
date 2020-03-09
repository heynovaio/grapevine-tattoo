import React from 'react'
import { graphql } from 'gatsby'
import { mapEdgesToNodes } from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Subscribe from '../components/subscribe'

import { headline, headlineBg, heading, headline2 } from '../components/typography.module.css'
import { blogContainer } from '../components/blog-post.module.css'


export const query = graphql`
  query BlogPageQuery {
    posts: allSanityPost(limit: 30, sort: { fields: [publishedAt], order: DESC }) {
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
              fluid(maxWidth: 576) {
                ...GatsbySanityImageFluid_noBase64
              }
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
  }
`

const BlogPage = props => {
  const { data, errors } = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <Layout>
      <SEO title='Blog' />
      <Container>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>News Reel</span>
          <span className={heading}>What’s New</span>
        </h1>
        <div className={blogContainer}>
          {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
        </div>
      </Container>
      <Subscribe/>
    </Layout>
  )
}

export default BlogPage

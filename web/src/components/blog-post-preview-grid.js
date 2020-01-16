import { Link } from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'
import Container from './container'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  return (
    <section className={(styles.blogSection, styles.root)}>
      <Container>
        {props.title && (
          <div>
            <h2 className={styles.headline}>
              <span role="presentation" className={styles.headlineBg}>News Reel</span>
              <Link to={props.browseMoreHref}>What’s New At Grapevine</Link>
            </h2>
            <h3 className={styles.headline2}>Featured News</h3>
          </div>
        )}
        <p className={styles.paragraph}>
          Every day at the studio is its own adventure. Here are some of the exciting things we have coming up next at Grapevine!
          {props.browseMoreHref && (
            <Link to={props.browseMoreHref}>Browse All News</Link>
          )}
        </p>
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map(node => (
              <li key={node.id}>
                <BlogPostPreview {...node} />
              </li>
            ))}
        </ul>
      </Container>
    </section>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid

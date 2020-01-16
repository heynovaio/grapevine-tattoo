import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Container from './container'
import RoleList from './role-list'

import { headline, headlineBg, heading } from '../components/typography.module.css'

import styles from './blog-post.module.css'

function BlogPost (props) {
  const { _rawBody, authors, title, mainImage, publishedAt } = props
  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <h1 className={headline}>
          <span role="presentation" className={headlineBg}>News</span>
          <span className={heading}>{title}</span>
        </h1>
        <div className={styles.metaContent}>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), 'MMMM Do YYYY')}
            </div>
          )}
        </div>
        <div>
          <div className={styles.mainContent}>
            {_rawBody && <BlockContent blocks={_rawBody} />}
          </div>
        </div>
      </Container>
    </article>
  )
}

export default BlogPost

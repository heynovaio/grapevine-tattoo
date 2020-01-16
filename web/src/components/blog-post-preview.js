import { format, distanceInWords, differenceInDays } from 'date-fns'
import { Link } from 'gatsby'
import React from 'react'
import { buildImageObj, cn, getBlogUrl } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'

import styles from './blog-post-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function BlogPostPreview (props) {
  return (
    <Link className={styles.root} to={getBlogUrl(props.publishedAt, props.slug.current)}>
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(338)
              .url()}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <p className={styles.gridTitle}>{props.title}</p>
      {props.publishedAt && (
        <p className={styles.gridSubTitle}>
          {format(new Date(props.publishedAt), 'MMMM Do')}
        </p>
      )}
    </Link>
  )
}

export default BlogPostPreview

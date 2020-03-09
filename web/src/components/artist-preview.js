import { Link } from 'gatsby'
import React from 'react'
import { cn, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockText from './block-text'
import Img from "gatsby-image"

import styles from './artist-preview.module.css'
import { responsiveTitle3 } from './typography.module.css'

function ArtistPreview (props) {
  return (
    <Link className={styles.root} to={`/artist/${props.slug.current}`}>
      <div className={styles.leadMediaThumb}>
        {props.image && props.image.asset && (
          <Img
            width={270}
            height={270}
            alt=""
            role="presentation"
            fluid={props.image.asset.fluid}
          />
        )}
      </div>
      <p className={styles.gridTitle}>{props.title}</p>
      {props.where && (
        <p className={styles.gridSubTitle}>{props.where}</p>
      )}
    </Link>
  )
}

export default ArtistPreview

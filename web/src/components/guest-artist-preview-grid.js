import { Link } from 'gatsby'
import React from 'react'
import GuestArtistPreview from './guest-artist-preview'
import BecomeGuest from './become-guest'

import styles from './artist-preview-grid.module.css'

function GuestArtistPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && (
        <h3 className={styles.headline2}>
          {props.title}
        </h3>
      )}
      <p className={styles.paragraph}>
        At Grapevine, we thrive on learning from new experiences, new expressions, and new connections. We welcome exceptional guest artists from all over the world into our shop regularly, and every one leaves their mark on us.
      </p>
      {props.browseMoreHref && (
        <Link className={styles.link} to={props.browseMoreHref}>Meet Our Current Guest Artists</Link>
      )}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <GuestArtistPreview {...node} />
            </li>
          ))}
      </ul>
      <BecomeGuest />
    </div>
  )
}

GuestArtistPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default GuestArtistPreviewGrid

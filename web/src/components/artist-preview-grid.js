import { Link } from 'gatsby'
import React from 'react'
import ArtistPreview from './artist-preview'
import BecomeArtist from './become-artist'

import styles from './artist-preview-grid.module.css'

function ArtistPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.title && (
        <div>
          <h2 className={styles.headline}>
            <span role="presentation" className={styles.headlineBg}>{props.title}</span>
            {props.browseMoreHref ? (
              <Link to={props.browseMoreHref}>{props.title}</Link>
            ) : (
              props.title
            )}
          </h2>
          <h3 className={styles.headline2}>Resident Artists</h3>
        </div>
      )}
      <p className={styles.paragraph}>
       The team of extraordinary artists call Grapevine home each have a unique style all their own and are exceptional in their field. No matter what vision you have for your tattoo, we have someone on staff who can execute it perfectly.
      </p>
      {props.browseMoreHref && (
        <Link className={styles.link} to={props.browseMoreHref}>Meet our Resident Artists</Link>
      )}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ArtistPreview {...node} />
            </li>
          ))}
      </ul>
      <BecomeArtist />
    </div>
  )
}

ArtistPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ArtistPreviewGrid

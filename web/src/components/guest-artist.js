import { format, distanceInWords, differenceInDays } from 'date-fns'
import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image"
import { cn, cnUrl, buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import BlockContent from './block-content'
import Slideshow from './block-content/slideshow'
import Container from './container'
import RoleList from './role-list'
import Subscribe from '../components/subscribe'

import {faFacebookSquare,faInstagram,faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { headline, heading, headlineBg, gridSubTitle } from '../components/typography.module.css'
import styles from './artist.module.css'

function GuestArtist (props) {
  const { _rawBodyOne,_rawBodyTwo,_rawBodyThree,appearanceDate,title,image,tagline,bookinglink,videolink,mainImage,where,style,dreamProject,youtube,instagram,facebook,email,gallery} = props
  return (
    <div>
      <article className={styles.root}>
        <div className={styles.abovethefold}>
          <div className={styles.mainImage}>
            {props.mainImage && (
              <Img
                alt={mainImage.alt}
                role="presentation"
                fluid={props.mainImage.asset.fluid}
              />
            )}
          </div>
          <div className={styles.text}>
            <div className={styles.wrapper}>
              <h1 className={styles.headline}>
                {props.title}</h1>
              {props.tagline && (
                <p>{props.tagline}</p>
              )}
              {props.bookinglink && (
                <button className={styles.primary}>Book Now</button>
              )}
              {props.videolink && (
                <button href={videolink}>Play Video</button>
              )}
            </div>
          </div>

        </div>
        <Container>
          <div className={styles.aboutartist}>
            <div className={styles.imagebox}>
              {props.image && (
                <Img
                  alt={image.alt}
                  role="presentation"
                  fluid={props.image.asset.fluid}
                />
              )}
            </div>
            <div className={styles.questions}>
              {props.where && (
                <div className={styles.itemPair}>
                  <h3 className={gridSubTitle}>Where I'm From</h3>
                  <p>{props.where}</p>
                </div>
              )}
              {props.style && (
                <div className={styles.itemPair}>
                  <h3 className={gridSubTitle}>Specialization/Style</h3>
                  <p>{style}</p>
                </div>
              )}
              {props.dreamProject && (
                <div className={styles.itemPair}>
                  <h3 className={gridSubTitle}>Dream Project</h3>
                  <p>{dreamProject}</p>
                </div>
              )}
            </div>
            <div className={styles.follow}>
              <h3 className={cn(gridSubTitle, styles.h3Lrg)}>Follow {title}</h3>

              <ul>
                <li>
                {props.youtube && (
                  <a href={cnUrl('https://www.youtube.com/',props.youtube )} className={styles.socialLink}>
                    <p>{props.youtube}</p>
                    <FontAwesomeIcon icon={faYoutubeSquare} />
                  </a>
                )}
                </li>
                <li>
                {props.instagram && (
                  <a href={cnUrl('https://www.instagram.com/',props.instagram )} className={styles.socialLink}>
                    <p>{props.instagram}</p>
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )}
                </li>
                <li>
                {props.facebook && (
                  <a href={cnUrl('https://www.facebook.com/',props.facebook )}  className={styles.socialLink}>
                    <p>{props.facebook}</p>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                )}
                </li>

              </ul>
              {props.email && (
                <a className={styles.primary} href={cnUrl('mailto:',props.email )}>
                  Contact Directly</a>
              )}
            </div>
          </div>
          {_rawBodyOne && <BlockContent blocks={_rawBodyOne || []}/>}
        </Container>
        {props.gallery && (
          <Container>
            <div className={styles.title}>
              <h2 className={cn(headline, styles.h2headline)}>
                <span role="presentation" className={cn(headlineBg, styles.h2headlineBg)}>
                  Tattoos</span>
                <span className={cn(heading, styles.h2heading)}>
                    {props.title}'s work
                </span>
              </h2>
            </div>
            <Slideshow {...props.gallery} />
          </Container>
        )}
      </article>
      <Subscribe />
    </div>

  )
}

export default GuestArtist

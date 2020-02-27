import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import { cn, buildImageObj } from '../../lib/helpers'
import BlockContent from './../block-content'
import Container from './../container'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import { headline, heading, headlineBg, paragraph, gridTitle } from '../../components/typography.module.css'
import styles from './shop-slider.module.css'

const handleOnDragStart = e => e.preventDefault()

function Shop ({  }) {

  let responsive = {
    0: { items: 1 },
    400: { items: 1 },
    600: { items: 2 },
    960: { items: 2 },
    1200: { items: 2 },
    1600: { items: 3 },
  }

  let stagePadding = {
    paddingRight: 80,
  }

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "shop-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img2: file(relativePath: { eq: "shop-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img3: file(relativePath: { eq: "shop-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img4: file(relativePath: { eq: "shop-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img5: file(relativePath: { eq: "shop-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img6: file(relativePath: { eq: "shop-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img7: file(relativePath: { eq: "shop-7.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img8: file(relativePath: { eq: "shop-8.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className={styles.shopList}>
      <AliceCarousel
        mouseDragEnabled
        mouseTrackingEnabled={true}
        buttonsDisabled={true}
        autoPlay={false}
        dotsDisabled={true}
        responsive={responsive}
        stagePadding={stagePadding}
        >
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img4.childImageSharp.fluid} />
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img8.childImageSharp.fluid} />
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img1.childImageSharp.fluid} />

        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img2.childImageSharp.fluid} />

        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img3.childImageSharp.fluid} />

        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img5.childImageSharp.fluid} />

        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img6.childImageSharp.fluid} />

        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <Img alt="" role="presentation" fluid={data.img7.childImageSharp.fluid} />
        </div>
      </AliceCarousel>
    </section>
  )
}

export default Shop

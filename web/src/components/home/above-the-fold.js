import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"
import Container from '../container'

import styles from './above-the-fold.module.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const handleOnDragStart = e => e.preventDefault()

function AboveTheFold () {

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "tattoo-showcase-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img2: file(relativePath: { eq: "tattoo-showcase-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img3: file(relativePath: { eq: "tattoo-showcase-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img4: file(relativePath: { eq: "tattoo-showcase-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img5: file(relativePath: { eq: "tattoo-showcase-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      img6: file(relativePath: { eq: "tattoo-showcase-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className={styles.aboveTheFold}>
      <Container>
        <h1 className={styles.tagline}>A tattoo experience as unique as you.</h1>
        <p className={styles.heading}>Whether it is your first tattoo or your twentieth, The Grapevine will provide an experience like no other studio, tailored to meet your needs.</p>
        <Link to="/contact" className={styles.primary}>Consult with an Artist</Link>
      </Container>
      <div className={styles.bgImg}>
        <AliceCarousel
          mouseDragEnabled
          mouseTrackingEnabled={true}
          buttonsDisabled={true}
          autoPlay={true}
          dotsDisabled={false}
          fadeOutAnimation={true}
          stopAutoPlayOnHover={false}
          autoPlayInterval={6000}>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <Img alt="" role="presentation" fluid={data.img1.childImageSharp.fluid} />
          </div>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <Img alt="" role="presentation" fluid={data.img4.childImageSharp.fluid} />
          </div>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <Img alt="" role="presentation" fluid={data.img5.childImageSharp.fluid} />
          </div>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <Img alt="" role="presentation" fluid={data.img2.childImageSharp.fluid} />
          </div>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <Img alt="" role="presentation" fluid={data.img6.childImageSharp.fluid} />
          </div>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <Img alt="" role="presentation" fluid={data.img3.childImageSharp.fluid} />
          </div>
        </AliceCarousel>
      </div>

    </section>
  )
}

export default AboveTheFold

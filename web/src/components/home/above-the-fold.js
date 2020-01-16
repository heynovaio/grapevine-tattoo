import React from 'react'
import Container from '../container'

import BgImg1 from "../../images/tattoo-showcase-1.jpg"
import styles from './above-the-fold.module.css'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function AboveTheFold ({  }) {
  return (
    <section className={styles.aboveTheFold}>
      <Container>
        <h1 className={styles.tagline}>A tattoo experience as unique as you.</h1>
        <p className={styles.heading}>Whether it is your first tattoo or your twentieth, Grapevine will provide an experience like no other studio, tailored to meet your needs.</p>
        <button className={styles.primary}>Consult with an Artist</button>
      </Container>
      <img className={styles.bgImg} alt="" role="presentation" src={BgImg1} />
    </section>
  )
}

export default AboveTheFold

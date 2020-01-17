import React from 'react'
import Container from '../container'

import BgImg1 from "../../images/tattoo-showcase-1.jpg"
import styles from './above-the-fold.module.css'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const handleOnDragStart = e => e.preventDefault()

function AboveTheFold ({  }) {
  return (
    <section className={styles.aboveTheFold}>
      <Container>
        <h1 className={styles.tagline}>A tattoo experience as unique as you.</h1>
        <p className={styles.heading}>Whether it is your first tattoo or your twentieth, Grapevine will provide an experience like no other studio, tailored to meet your needs.</p>
        <button className={styles.primary}>Consult with an Artist</button>
      </Container>
      <div className={styles.bgImg}>
        <AliceCarousel
          mouseDragEnabled
          mouseTrackingEnabled={true}
          buttonsDisabled={true}
          autoPlay={false}
          dotsDisabled={false}
          autoPlayInterval={5000}>

          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <img alt="" role="presentation" src={BgImg1} />
          </div>
           <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <img alt="" role="presentation" src={BgImg1} />
          </div>
          <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
            <img alt="" role="presentation" src={BgImg1} />
          </div>
        </AliceCarousel>
      </div>

    </section>
  )
}

export default AboveTheFold

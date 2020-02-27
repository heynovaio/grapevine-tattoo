import React from 'react'
import { Link } from 'gatsby'
import { cn, buildImageObj } from '../../lib/helpers'
import BlockContent from './../block-content'
import Container from './../container'

import BgImg1 from "../../images/shop-1.jpg"
import BgImg2 from "../../images/shop-2.jpg"
import BgImg3 from "../../images/shop-3.jpg"
import BgImg4 from "../../images/shop-4.jpg"
import BgImg5 from "../../images/shop-5.jpg"
import BgImg6 from "../../images/shop-6.jpg"
import BgImg7 from "../../images/shop-7.png"
import BgImg8 from "../../images/shop-8.png"

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
          <img alt="" role="presentation" src={BgImg2} />
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg8} />
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg1} />
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg3} />
        </div>
        <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg5} />
        </div>
                <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg6} />
        </div>
                <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg7} />
        </div>
                <div role="presentation" onDragStart={handleOnDragStart} className={styles.item}>
          <img alt="" role="presentation" src={BgImg4} />
        </div>
      </AliceCarousel>
    </section>
  )
}

export default Shop

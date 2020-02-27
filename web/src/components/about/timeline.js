import React from 'react'
import Container from '../container'
import styles from './timeline.module.css'
import stockTattoo from '../../images/stocktattoo.jpg'

import { Link } from 'gatsby'
import { cn, buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'

function Timeline(props) {
  const { years } = props

  return (
    <section className={styles.timeline}>

      <Container>
      {years.milestones.map( year => (
	      <div key={year._key}>
		    	<h2 className={styles.headlineBg}>{year.value}</h2>
		    	{year.milestone.map( item => (
	    		<div className={styles.timelineItem}>
	    			<div className={styles.text}>
		    			<div className={styles.date}>
								<p>{item.date}</p>
		    			</div>
		    			<div className={styles.milestone}>
		    				<h3 className={styles.large}>{item.title}</h3>
		    			</div>
		    			<div className={styles.content}>
			    			<p className={styles.paragraph}>
			    				{item.desc}
			    			</p>
			    		</div>
			    	</div>
			    	<div className={styles.imagebox}>
			    		{item.image && (
                <img
                  src={imageUrlFor(buildImageObj(item.image))
                    .width(296)
                    .url()}
                />
              )}
			    	</div>
	    		</div>
	    		))}
	    	</div>
	    ))}
      </Container>

    </section>
  )
}

export default Timeline

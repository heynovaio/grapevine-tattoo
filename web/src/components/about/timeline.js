import React from 'react'
import Container from '../container'
import styles from './timeline.module.css'
import stockTattoo from '../../images/stocktattoo.jpg'
import BlockContent from './../block-content'

import { Link } from 'gatsby'
import { cn, buildImageObj } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { paragraph } from '../typography.module.css'


function Timeline(props) {
  const { years, _rawBody } = props

  return (
  	<>
		<div className={cn(styles.desc, paragraph)}>
      <BlockContent blocks={_rawBody || []} />
    </div>
    <section className={styles.timeline}>
      <Container>
      {years.milestones.map( year => (
	      <div key={year._key}>
		    	<h2 className={styles.headlineBg}>{year.value}</h2>
		    	{year.milestone.map( item => (
	    		<div className={styles.timelineItem}>
	    			<div className={styles.text}>
	    				{item.date && (
		    			<div className={styles.date}>
								<p>{item.date}</p>
		    			</div>
		    			)}
		    			{item.title && (
		    			<div className={styles.milestone}>
			    			<h3 className={styles.large}>{item.title}</h3>
		    			</div>
		    			)}
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
                    .width(500)
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
    </>
  )
}

export default Timeline

import React from 'react'
import Container from '../container'
import styles from './timeline.module.css'
import stockTattoo from '../../images/stocktattoo.jpg'

function Timeline({  }) {
  return (
    <section className={styles.timeline}>

      <Container>
	    	<h3 className={styles.headlineBg}>2019</h3>
    		<div className={styles.timelineItem}>
    			<div className={styles.text}>
	    			<div className={styles.date}>

	    			</div>
	    			<div className={styles.milestone}>
	    				<span className={styles.large}>A Brand New Day</span>
	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}>With an amazing roster on on-house talent and world-class guest artists working out of the studio, Grapevine expands one more. By moving into a much larger and more optimal space, Grapevine is able to bring in even more artists to do transformative work.
		    			</span>
		    		</div>
		    	</div>
		    	<div className={styles.imagebox}>
		    		<img src={stockTattoo}/>
		    	</div>
    		</div>

    		<div className={styles.timelineItem}>
    			<div className={styles.text}>
	    			<div className={styles.date}>
	    				<span className={styles.headline2}>October 2019</span>
	    			</div>
	    			<div className={styles.milestone}>

	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}>
		    				David joins the Grapevine family, beginning his apprenticeship.
		    			</span>
		    		</div>
		    	</div>
    		</div>

    		<div className={styles.timelineItem}>
    			<div className={styles.text}>
	    			<div className={styles.date}>
	    				<span className={styles.headline2}>July 2019</span>
	    			</div>
	    			<div className={styles.milestone}>

	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}>
		    				Always pushing their own limits, Grapevine performs their first four-artist collaboration, featuring Mendoza, Andre, Andy and Michi. The work embodies the spirit of connection and collective effort that Grapevine has come to stand for.
		    			</span>
		    		</div>
		    	</div>
    		</div>

	    	<h3 className={styles.headlineBg}>2018</h3>

				<div className={styles.timelineItem}>
    			<div className={styles.text}>
	    			<div className={styles.date}>
	    				<span className={styles.headline2}>March 23rd, 2018</span>
	    			</div>
	    			<div className={styles.milestone}>
	    				<span className={styles.large}> Name of Milestone</span>
	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}> Next level YOLO chicharrones
		    				palo santo. Post-ironic scenester selfies leggings yr kinfolk
		    			</span>
		    		</div>
		    	</div>
		    	<div className={styles.imagebox}>
		    		<img src={stockTattoo}/>
		    	</div>
    		</div>


	    	<h3 className={styles.headlineBg}>2017</h3>

		  	<div className={styles.timelineItem}>
		  		<div className={styles.text}>
	    			<div className={styles.date}>
	    				<span className={styles.headline2}>March 22rd, 2017</span>
	    			</div>
	    			<div className={styles.milestone}>
	    				<span className={styles.large}> Name of Milestone</span>
	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}> Next level YOLO chicharrones
		    				palo santo. Post-ironic scenester selfies leggings yr kinfolk
		    			</span>
		    		</div>
		    	</div>
		    	<div className={styles.imagebox}>
		    		<img src={stockTattoo}/>
		    	</div>
    		</div>

    		<div className={styles.timelineItem}>
		  		<div className={styles.text}>
	    			<div className={styles.date}>
	    				<span className={styles.headline2}>March 22rd, 2017</span>
	    			</div>
	    			<div className={styles.milestone}>
	    				<span className={styles.large}> Name of Milestone</span>
	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}> Next level YOLO chicharrones
		    				palo santo. Post-ironic scenester selfies leggings yr kinfolk
		    			</span>
		    		</div>
		    	</div>
		    	<div className={styles.imagebox}>
		    		<img src={stockTattoo}/>
		    	</div>
    		</div>


	    	<h3 className={styles.headlineBg}>2016</h3>

	    	<div className={styles.timelineItem}>
		  		<div className={styles.text}>
	    			<div className={styles.date}>
	    				<span className={styles.headline2}>March 22rd, 2017</span>
	    			</div>
	    			<div className={styles.milestone}>
	    				<span className={styles.large}> Name of Milestone</span>
	    			</div>
	    			<div className={styles.content}>
		    			<span className={styles.paragraph}> Next level YOLO chicharrones
		    				palo santo. Post-ironic scenester selfies leggings yr kinfolk
		    			</span>
		    		</div>
		    	</div>
		    	<div className={styles.imagebox}>
		    		<img src={stockTattoo}/>
		    	</div>
    		</div>

	    	<h3 className={styles.headlineBg}>2015</h3>
      </Container>

    </section>
  )
}

export default Timeline

import { Link } from 'gatsby'
import React from 'react'
import { cn } from '../lib/helpers'

import {faFacebookSquare,faInstagram,faYoutubeSquare} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from './footer.module.css'
import {large, paragraph} from '../components/typography.module.css'

function Footer ({  }) {
  return (
		<footer className={styles.footer}>
			<div className={styles.flex}>
				<div className={styles.imagebox}>
					<iframe title="google map" src="https://snazzymaps.com/embed/198926"></iframe>
				</div>
				<div className={styles.content}>
					<h2 className={cn(large, styles.h2large)}>
						Grapevine Tattoo
					</h2>
					<p className={cn(paragraph, styles.tagline)}>
						When you’re ready for a transformation, you know where to find us.
					</p>
					<div className={styles.icons}>
						<ul className={styles.social}>
              <li>
                <a href='https://www.youtube.com/watch?v=7xCTAqcATx8' target="_blank" className={styles.socialLink}>
                  <FontAwesomeIcon title="youtube link" icon={faYoutubeSquare} />
                </a>
              </li>

              <li>
                <a href='https://www.instagram.com/grapevinetattoo/' target="_blank" className={styles.socialLink}>
                  <FontAwesomeIcon title="instagram link" icon={faInstagram} />
                </a>
              </li>

              <li>
                <a href='https://www.facebook.com/grapevinetattoo/' target="_blank" className={styles.socialLink}>
                  <FontAwesomeIcon title="facebook link" icon={faFacebookSquare} />
                </a>
              </li>
            </ul>
            <ul className={styles.contact}>
            	<li><span>PHONE: </span>1-250-542-6293</li>
            	<li><span>E-MAIL: </span>
            		<a className={styles.emailLink} href="mailto:info@grapevinetattoo.com?subject=Email%20from%20Website">
            			info@grapevinetattoo.com</a>
            		</li>
            	<li><span>HOURS: </span>Tuesday - Saturday, 11:00am - 8:00 pm</li>
            </ul>
					</div>
				</div>
			</div>
		  <div className={styles.footerWrapper}>
		  	<div className={styles.navbar}>
		  		<ul>
		  			<li><Link className={styles.navlink} to='/about/'>
		  				About</Link>
		  			</li>
		  			<li><Link className={styles.navlink} to='/artists/'>
		  				Artists</Link>
		  			</li>
		  			<li><Link className={styles.navlink} to='/guest-artists/'>
		  				Guest Artists</Link>
		  			</li>
		  			<li><Link className={styles.navlink} to='/blog/'>
		  				News</Link>
		  			</li>
		  			<li><Link className={styles.navlink} to='/faq/'>
		  				FAQ</Link>
		  			</li>
		  			<li><Link className={styles.navlink} to='/contact/'>
		  				Contact</Link>
		  			</li>
					</ul>
		  	</div>
		    <div className={styles.siteInfo}>
		      © Grapevine Copyright {new Date().getFullYear()}
		    </div>
		  </div>
		</footer>
	)
}

export default Footer

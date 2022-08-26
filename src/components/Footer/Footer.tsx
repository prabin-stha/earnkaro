import React from 'react';

import styles from './Footer.module.css';

import angleLeftGrey from '../../static/images/angle_left_grey.svg';
import googleplay from '../../static/images/googleplay.png';

const Footer: React.FC = () => {
	return (
		<footer id='footer'>
			<div className={styles.footerLinks}>
				<div className={`container ${styles.footerLinksContainer}`}>
					<div className={`${styles.links} ${styles.navigate}`}>
						<h3 className={styles.footerHeading}>Navigate</h3>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							About Us
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							FAQ's
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Get Help
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Blog
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Terms & Conditions
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Privacy Policy
						</a>
					</div>
					<div className={`${styles.links} ${styles.follow}`}>
						<h3 className={styles.footerHeading}>Follow Us</h3>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Telegram
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Facebook
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Twitter
						</a>
						<a href='#footer'>
							<img
								src={angleLeftGrey}
								alt='Arrow Right'
								height='12px'
								width='12px'
							/>
							Instagram
						</a>
					</div>
					<div className={styles.download}>
						<h3 className={styles.footerHeading}>Download App</h3>
						<img
							src={googleplay}
							alt='Google Play'
							width='127px'
							height='38px'
						/>
					</div>
				</div>
			</div>
			<div className={styles.copyright}>
				<div className='container'>
					(©) Copyright 2022 EarnKaro. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;

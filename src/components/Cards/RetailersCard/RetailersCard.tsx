import styles from './RetailersCard.module.css';

import whatsappIcon from '../../../static/images/whatsapp.svg';

const RetailersCard: React.FC = () => {
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<img
					src='https://asset20.ckassets.com/resources/image/stores/wow-skin-care-1591489432.png'
					alt='Logo'
					height='59px'
					width='120px'
				/>
				<div className={styles.earn}>
					<div className={styles.upto}>YOU EARN</div>
					<p className={styles.rupees}>Upto Rs 17% Profit</p>
				</div>
				<div className={styles.retailerButtons}>
					<button className={`${styles.button} ${styles.share}`}>
						<img
							src={whatsappIcon}
							alt='Whatsapp Icon'
							height='14px'
							width='14px'
						/>
						SHARE NOW
					</button>
					<button className={`${styles.button} ${styles.copy}`}>
						COPY LINK
					</button>
				</div>
			</div>
		</div>
	);
};

export default RetailersCard;

import styles from './DealsCard.module.css';

import whatsappIcon from '../../../static/images/whatsapp.svg';

const DealsCard: React.FC<{
	showDealEnd: boolean;
	imageLink: string;
}> = props => {
	return (
		<div className={styles.outerContainer}>
			<div className={styles.cardContainer}>
				<img
					className={styles.logo}
					src='https://asset20.ckassets.com/resources/image/stores/ajio-store-1606812055.png'
					alt='Logo'
					height='30px'
					width='74px'
				/>
				<div className={styles.ribbon}>FLASH SALE</div>
				<img
					className={styles.image}
					src={props.imageLink}
					alt='Product'
				/>
				{props.showDealEnd ? (
					<div className={styles.dealEnd}>
						<p className={styles.dealTitle}>DEAL ENDS IN</p>
						<p className={styles.dealTimer}>
							01&nbsp;<span>d</span>: 08&nbsp;<span>h</span>:
							58&nbsp;<span>m</span>: 44&nbsp;<span>s</span>
						</p>
					</div>
				) : (
					''
				)}
				<div className={styles.dealPrice}>
					<div className={styles.price}>
						<div className={styles.priceTitle}>STARTING FROM</div>
						<p className={styles.priceAmount}>₹199</p>
					</div>
					<div className={styles.earn}>
						<p className={styles.earnTitle}>PER SALE YOU EARN</p>
						<p className={styles.earnProfit}>Flat 25% Profit</p>
					</div>
				</div>
				<div className={styles.dealsButtons}>
					<button className={`${styles.button} ${styles.copy}`}>
						COPY LINK
					</button>
					<button className={`${styles.button} ${styles.share}`}>
						<img
							src={whatsappIcon}
							alt='Whatsapp Icon'
							height='14px'
							width='14px'
						/>
						SHARE NOW
					</button>
				</div>
			</div>
		</div>
	);
};

export default DealsCard;

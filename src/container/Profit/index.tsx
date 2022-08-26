import styles from './Profit.module.css';

const Profit: React.FC = () => {
	return (
		<div className={styles.profitContainer}>
			<div className={styles.totalProfit}>
				Your Total Profit
				<span className={styles.profitNumber}>₹0.00</span>
			</div>
			<button className={styles.button}>Learn How To Earn More →</button>
		</div>
	);
};

export default Profit;

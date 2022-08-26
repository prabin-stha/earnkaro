import angleLeft from '../static/images/angle_left_white.svg';

import styles from './ScrollToTop.module.css';

const ScrollToTop: React.FC = () => {
	return (
		<div className={styles.container}>
			<a href='#top'>
				<img
					className={styles.image}
					src={angleLeft}
					alt='Arrow Top'
					height='30px'
					width='30px'
				/>
			</a>
		</div>
	);
};

export default ScrollToTop;

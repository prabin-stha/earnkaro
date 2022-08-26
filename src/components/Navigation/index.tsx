import styles from './Navigation.module.css';

import home from '../../static/images/home.svg';
import rupee from '../../static/images/rupee.svg';
import server from '../../static/images/server.svg';
import user from '../../static/images/user_grey.svg';

const Navigation: React.FC = () => {
	return (
		<div className={styles.navigationContainer}>
			<ul className={styles.navigationLinks}>
				<li className={styles.navigationLink}>
					<img src={home} alt='Home' height='19px' width='19px' />{' '}
					Home
				</li>
				<li className={styles.navigationLink}>
					<img
						src={rupee}
						alt='Indian Rupee'
						height='19px'
						width='19px'
					/>{' '}
					Our Partners
				</li>
				<li className={styles.navigationLink}>
					<div>...</div>Make Links
				</li>
				<li className={styles.navigationLink}>
					<img src={server} alt='Server' height='19px' width='19px' />
					My Activity
				</li>
				<li className={styles.navigationLink}>
					<img src={user} alt='User' height='19px' width='19px' />{' '}
					Profile
				</li>
			</ul>
		</div>
	);
};

export default Navigation;

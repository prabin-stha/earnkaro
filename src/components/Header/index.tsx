import styles from './Header.module.css';

import { useState } from 'react';
import caretDown from '../../static/images/caret_down.svg';
import earnkaroLogo from '../../static/images/earnkaro_logo.png';
import headerBg from '../../static/images/header_bg.png';
import link from '../../static/images/link.svg';
import profitRupee from '../../static/images/profit_rupee.png';
import searchIconBlack from '../../static/images/search_black.svg';
import searchIconWhite from '../../static/images/search_white.svg';
import user from '../../static/images/user.svg';

const Header: React.FC = () => {
	const [headerHeight, setHeaderHeight] = useState('96px');

	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			setHeaderHeight('76px');
		} else {
			setHeaderHeight('96px');
		}
	}

	const headerStyles = {
		backgroundImage: `url(${headerBg})`,
		height: headerHeight,
	};

	return (
		<header className={styles.header} style={headerStyles}>
			<div className={`container ${styles.headerContainer}`}>
				<div className={styles.leftHeader}>
					<div className={styles.hamburger}>
						<span className={styles.line}></span>
						<span className={styles.line}></span>
						<span className={styles.line}></span>
					</div>
					<img
						className={styles.logo}
						src={earnkaroLogo}
						alt='Logo'
					/>
					{/* Search */}
					<img
						src={searchIconWhite}
						className={styles.leftHeaderSearch}
						alt='Search Icon'
					/>
				</div>
				<div className={styles.search}>
					<input
						type='text'
						placeholder='Search for partners or deals'
						className={styles.inputSearch}
					/>
					<button className={styles.iconContainer}>
						<img
							className={styles.searchIcon}
							src={searchIconBlack}
							alt='Search Icon'
							height='20px'
						/>
					</button>
				</div>
				<ul className={styles.rightHeader}>
					<li className={styles.link}>
						<img
							src={profitRupee}
							className={styles.icon}
							alt='Indian Rupee Coin'
							height='22px'
							width='22px'
						/>
						Profit Rates
					</li>
					<li className={styles.link}>
						<img
							src={link}
							className={styles.icon}
							alt='Hyperlink Icon'
							height='24px'
							width='24px'
						/>
						Make Links
					</li>
					<li>
						<button className={styles.profile}>
							<img
								src={user}
								className={styles.icon}
								alt='User Logo'
								height='17px'
								width='17px'
							/>
							My Profile
							<img
								src={caretDown}
								className={styles.icon}
								alt='Caret Down'
								height='17px'
								width='17px'
							/>
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;

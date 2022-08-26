import styles from './Carousel.module.css';

import angleRight from '../../static/images/angle_right.svg';

function NextArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			className={` ${styles.navButton}`}
			style={{
				position: 'absolute',
				right: '-40px',
				top: '50%',
				transform: 'translate(0, -50%)',
				backgroundImage: `url(${angleRight})`,
			}}
			onClick={onClick}
		></div>
	);
}

export default NextArrow;

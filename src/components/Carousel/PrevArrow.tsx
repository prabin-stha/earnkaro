import styles from './Carousel.module.css';

import angleLeft from '../../static/images/angle_left.svg';

function PrevArrow(props: any) {
	const { onClick } = props;
	return (
		<div
			className={` ${styles.navButton}`}
			style={{
				position: 'absolute',
				left: '-40px',
				top: '50%',
				transform: 'translate(0, -50%)',
				backgroundImage: `url(${angleLeft})`,
			}}
			onClick={onClick}
		></div>
	);
}

export default PrevArrow;

import styles from './Hero.module.css';

const images = [
	'https://asset20.ckassets.com/resources/image/slider_images/earnkaro/segment/desktop-slider1-1658820364.png',
	'https://asset20.ckassets.com/resources/image/slider_images/earnkaro/segment/desktop-slider2-1658820364.png',
	'https://asset20.ckassets.com/resources/image/slider_images/earnkaro/segment/desktop-slider3-1658820364.png',
];

const Hero: React.FC = () => {
	return (
		<section className={`container ${styles.heroContainer} `}>
			<img
				className={`${styles.image} ${styles.imageOne}`}
				src={images[0]}
				alt='1'
			/>
			<img
				className={`${styles.image} ${styles.imageTwo}`}
				src={images[1]}
				alt='2'
			/>
			<img
				className={`${styles.image} ${styles.imageThree}`}
				src={images[2]}
				alt='3'
			/>
		</section>
	);
};

export default Hero;

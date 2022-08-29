import React from 'react';
import Slider from 'react-slick';

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './Carousel.module.css';

import angleLeft from '../../static/images/angle_left_white.svg';

const Carousel: React.FC<any> = props => {
	const responsive = [
		{
			breakpoint: 400,
			settings: {
				className: 'center',
				centerPadding: '25px',
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 400,
			settings: {
				className: 'center',
				centerPadding: '25px',
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 500,
			settings: {
				className: 'center',
				centerPadding: '45px',
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 630,
			settings: {
				className: 'center',
				centerPadding: '70px',
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},

		{
			breakpoint: 800,
			settings: {
				className: 'center',
				centerPadding: '25px',
				centerMode: true,
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1000,
			settings: {
				slidesToShow: props.length > 2 ? 2 : props.length,
				slidesToScroll: 2,
				nextArrow: <NextArrow />,
				prevArrow: <PrevArrow />,
			},
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: props.length > 3 ? 3 : props.length,
				slidesToScroll: 3,
				nextArrow: <NextArrow />,
				prevArrow: <PrevArrow />,
			},
		},
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: props.length > 4 ? 4 : props.length,
				slidesToScroll: 4,
				nextArrow: <NextArrow />,
				prevArrow: <PrevArrow />,
			},
		},
	];

	const settings = {
		infinite: true,
		slidesToShow: props.length > 5 ? 5 : props.length,
		slidesToScroll: 5,
		speed: 500,
		responsive,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<section className={`container ${styles.carouselSection}`}>
			<h1 className={`container ${styles.header}`}>
				<p style={{ fontSize: '16px' }}>{props.title}</p>
				<a className={styles.viewAll} href='#none'>
					View All{' '}
					<img
						src={angleLeft}
						alt='Caret Left'
						height='12px'
						width='12px'
					/>
				</a>
			</h1>
			<div className={`container ${styles.carouselContainer}`}>
				<Slider {...settings}>{props.children}</Slider>
			</div>
		</section>
	);
};

export default Carousel;

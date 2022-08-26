import Slider from 'react-slick';

import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './Carousel.module.css';

const responsive = [
	{
		breakpoint: 400,
		settings: {
			className: 'center',
			centerPadding: '25px',
			centerMode: true,
			slidesToShow: 1,
		},
	},
	{
		breakpoint: 400,
		settings: {
			className: 'center',
			centerPadding: '25px',
			centerMode: true,
			slidesToShow: 1,
		},
	},
	{
		breakpoint: 500,
		settings: {
			className: 'center',
			centerPadding: '45px',
			centerMode: true,
			slidesToShow: 1,
		},
	},
	{
		breakpoint: 630,
		settings: {
			className: 'center',
			centerPadding: '70px',
			centerMode: true,
			slidesToShow: 1,
		},
	},

	{
		breakpoint: 800,
		settings: {
			className: 'center',
			centerPadding: '25px',
			centerMode: true,
			slidesToShow: 2,
		},
	},
	{
		breakpoint: 1000,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
		},
	},
	{
		breakpoint: 1200,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
		},
	},
	{
		breakpoint: 1500,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 4,
			nextArrow: <NextArrow />,
			prevArrow: <PrevArrow />,
		},
	},
];

const settings = {
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 5,
	speed: 500,
	responsive,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
};

const Carousel: React.FC<any> = props => {
	return (
		<section className={`container ${styles.carouselSection}`}>
			<h1 className={`container ${styles.heading}`}>{props.title}</h1>
			<div className={`container ${styles.carouselContainer}`}>
				<Slider {...settings}>{props.children}</Slider>
			</div>
		</section>
	);
};

export default Carousel;

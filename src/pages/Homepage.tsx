import React from 'react';
import Carousel from '../components/Carousel';

import Category from '../components/Category';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Profit from '../components/Profit';

const Homepage: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Profit />
			<main>
				<Hero />
				<Category />
				<Carousel title='TOP RETAILERS'>
					<div className='div'>
						<div className='innerDiv'>
							<h3>1</h3>
						</div>
					</div>
					<div className='div'>
						<div className='innerDiv'>
							<h3>1</h3>
						</div>
					</div>
					<div className='div'>
						<div className='innerDiv'>
							<h3>1</h3>
						</div>
					</div>
					<div className='div'>
						<div className='innerDiv'>
							<h3>1</h3>
						</div>
					</div>
					<div className='div'>
						<div className='innerDiv'>
							<h3>1</h3>
						</div>
					</div>
					<div className='div'>
						<div className='innerDiv'>
							<h3>1</h3>
						</div>
					</div>
				</Carousel>
			</main>
		</React.Fragment>
	);
};

export default Homepage;

import React from 'react';

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
			</main>
		</React.Fragment>
	);
};

export default Homepage;

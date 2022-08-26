import React from 'react';

import Header from '../components/Header';
import Category from '../container/Category';
import Hero from '../container/Hero';
import Profit from '../container/Profit';
import TopRetailers from '../container/TopRetailers';

const Homepage: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Profit />
			<main>
				<Hero />
				<Category />
				<TopRetailers />
			</main>
		</React.Fragment>
	);
};

export default Homepage;

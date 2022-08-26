import React from 'react';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Category from '../container/Category';
import FlashDeals from '../container/Deals/FlashDeals';
import DealsWrapper from '../container/DealsWrapper';
import Hero from '../container/Hero';
import Profit from '../container/Profit';
import TopRetailers from '../container/TopRetailers';
import ScrollToTop from '../utils/ScrollToTop';

const Homepage: React.FC = () => {
	return (
		<React.Fragment>
			<Header />
			<Profit />
			<main>
				<Hero />
				<Category />
				<TopRetailers />
				<FlashDeals />
				<DealsWrapper />
			</main>
			<Footer />
			<ScrollToTop />
			<Navigation />
		</React.Fragment>
	);
};

export default Homepage;

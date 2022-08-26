import React from 'react';

import BestDeals from '../Deals/BestDeals';
import BestSellers from '../Deals/BestSellers';
import HighestClickedDeals from '../Deals/HighestClickedDeals';
import MostSharedDeals from '../Deals/MostSharedDeals';

const DealsWrapper: React.FC = () => {
	return (
		<React.Fragment>
			<MostSharedDeals />
			<HighestClickedDeals />
			<BestDeals />
			<BestSellers />
		</React.Fragment>
	);
};

export default DealsWrapper;

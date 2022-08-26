import { RetailersCard } from '../../components/Cards';
import Carousel from '../../components/Carousel';

const items = [
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
	<RetailersCard />,
];

const TopRetailers: React.FC = () => {
	return <Carousel title='TOP RETAILERS'>{items}</Carousel>;
};

export default TopRetailers;

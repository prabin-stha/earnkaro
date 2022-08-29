import { RetailersCard } from '../../components/Cards';
import Carousel from '../../components/Carousel';

const numberOfElements = 6;

const TopRetailers: React.FC = () => {
	return (
		<Carousel title='TOP RETAILERS' length={numberOfElements}>
			{new Array(numberOfElements).fill(0).map((el, i) => (
				<RetailersCard key={i} />
			))}
		</Carousel>
	);
};

export default TopRetailers;

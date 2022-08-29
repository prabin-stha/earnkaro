import { DealsCard } from '../../components/Cards';
import Carousel from '../../components/Carousel';

const numberOfElements = 9;

const BestDeals: React.FC = () => {
	return (
		<Carousel title='MYNTRA - BEST DEALS' length={numberOfElements}>
			{new Array(numberOfElements).fill(0).map((el, i) => (
				<DealsCard
					key={i}
					showDealEnd={false}
					imageLink='https://asset22.ckassets.com/resources/image/staticpage_images/22-aug-ek-DEAL-ajio-6-1661164548.jpg'
				/>
			))}
		</Carousel>
	);
};

export default BestDeals;

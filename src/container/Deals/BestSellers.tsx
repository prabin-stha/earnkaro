import { DealsCard } from '../../components/Cards';
import Carousel from '../../components/Carousel';

const BestSellers: React.FC = () => {
	const numberOfElements = 12;

	return (
		<Carousel title='BEST SELLERS - HEALTH AND BEAUTY' length={numberOfElements}>
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

export default BestSellers;

import { DealsCard } from '../../components/Cards';
import Carousel from '../../components/Carousel';

const HighestClickedDeals: React.FC = () => {
	const numberOfElements = 13;
	return (
		<Carousel
			title='AJIO - HIGHEST CLICKED DEALS'
			length={numberOfElements}
		>
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

export default HighestClickedDeals;

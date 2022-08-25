import { useEffect, useState } from 'react';

import config from '../../config/config';

import styles from './Category.module.css';

const Category: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	let [data, setData] = useState<any>(null);

	useEffect(() => {
		const fetchImageLinks = async () => {
			const response = await fetch(
				`http://localhost:${config.port}/category`
			);
			const resData = await response.json();
			return resData;
		};
		fetchImageLinks().then(data => {
			setData(data);
		});
	}, []);

	let dataMarkup: any;
	if (data) {
		dataMarkup = data[currentIndex].links.map((el: any, i: number) => {
			return (
				<img
					key={i}
					className={styles.categoryImage}
					src={`${el}`}
					alt={`${i + 1}`}
				></img>
			);
		});
	}

	const onClickHandler = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<section className='container'>
			<div className={styles.filters}>
				<button
					onClick={() => {
						onClickHandler(0);
					}}
					className={currentIndex === 0 ? styles.active : ''}
				>
					Super Sellers
				</button>
				<button
					onClick={() => {
						onClickHandler(1);
					}}
					className={currentIndex === 1 ? styles.active : ''}
				>
					Accessories
				</button>
				<button
					onClick={() => {
						onClickHandler(2);
					}}
					className={currentIndex === 2 ? styles.active : ''}
				>
					Electornics
				</button>
				<button
					onClick={() => {
						onClickHandler(3);
					}}
					className={currentIndex === 3 ? styles.active : ''}
				>
					Men's Fashion
				</button>
				<button
					onClick={() => {
						onClickHandler(4);
					}}
					className={currentIndex === 4 ? styles.active : ''}
				>
					Personal Care
				</button>
				<button
					onClick={() => {
						onClickHandler(5);
					}}
					className={currentIndex === 5 ? styles.active : ''}
				>
					Men's Footwear
				</button>
				<button
					onClick={() => {
						onClickHandler(6);
					}}
					className={currentIndex === 6 ? styles.active : ''}
				>
					Women's Fashion
				</button>
				<button
					onClick={() => {
						onClickHandler(7);
					}}
					className={currentIndex === 7 ? styles.active : ''}
				>
					Women's Footwear
				</button>
				<button
					onClick={() => {
						onClickHandler(8);
					}}
					className={currentIndex === 8 ? styles.active : ''}
				>{`Grocery & Essentials`}</button>
				<button
					onClick={() => {
						onClickHandler(9);
					}}
					className={currentIndex === 9 ? styles.active : ''}
				>
					Beauty
				</button>
				<button
					onClick={() => {
						onClickHandler(10);
					}}
					className={currentIndex === 10 ? styles.active : ''}
				>{`Home & Kitchen`}</button>
				<button
					onClick={() => {
						onClickHandler(11);
					}}
					className={currentIndex === 11 ? styles.active : ''}
				>
					Baby Products
				</button>
				<button
					onClick={() => {
						onClickHandler(12);
					}}
					className={currentIndex === 12 ? styles.active : ''}
				>{`Bags & Luggage`}</button>
			</div>
			<div>{dataMarkup}</div>
		</section>
	);
};

export default Category;

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './category.css';
import categoryImg01 from '../../../assets/images/category-01.png';
import categoryImg02 from '../../../assets/images/category-02.png';
import categoryImg03 from '../../../assets/images/category-03.png';
import categoryImg04 from '../../../assets/images/category-04.png';

const categories = [
	{
		display: 'Fast food',
		imgUrl: categoryImg01,
	},
	{
		display: 'Pizza',
		imgUrl: categoryImg02,
	},
	{
		display: 'Asian Food',
		imgUrl: categoryImg03,
	},
	{
		display: 'Raw Meat',
		imgUrl: categoryImg04,
	},
];

const Category = () => {
	return (
		<Container>
			<Row>
				{categories.map((category, index) => {
					return (
						<Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={index}>
							<div className='category__item d-flex align-items-center gap-3'>
								<div className='category__img'>
									<img src={category.imgUrl} alt={category.display} />
								</div>
								<h6>{category.display}</h6>
							</div>
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Category;

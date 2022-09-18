import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import ProductCard from '../components/UI/product-card/ProductCard';
import products from '../assets/fake-data/products';
import '../styles/all-foods.css';
import '../styles/pagination.css';

const AllFoods = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [pageNumber, setPageNumber] = useState(0);

	const searchedProducts = products.filter((item) => {
		if (searchTerm.value === '') {
			return item;
		}
		if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
			return item;
		} else {
			return console.log('not found');
		}
	});

	const productsPerPage = 8;
	const visitedPage = pageNumber * productsPerPage;
	const displayPage = searchedProducts.slice(
		visitedPage,
		visitedPage + productsPerPage
	);

	const pageCount = Math.ceil(searchedProducts.length / productsPerPage);

	const changePage = ({ selected }) => {
		setPageNumber(selected);
	};

	return (
		<Helmet title='All Foods'>
			<CommonSection title='All foods' />
			<section>
				<Container>
					<Row>
						<Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
							<div className='search__widget d-flex align-items-center justify-content-between'>
								<input
									type='text'
									placeholder={`I'm looking for...`}
									value={searchTerm}
									onChange={(event) => setSearchTerm(event.target.value)}
								/>
								<span>
									<i class='ri-search-line'></i>
								</span>
							</div>
						</Col>
						<Col lg='6' md='6' sm='6' xs='12' className='mb-5'>
							<div className='sorting__widget text-end'>
								<select className='w-50'>
									<option>Default</option>
									<option value='ascending'>A-Z</option>
									<option value='descending'>Z-A</option>
									<option value='high-price'>High Price</option>
									<option value='low-price'>Low Price</option>
								</select>
							</div>
						</Col>
						{displayPage.map((item) => {
							return (
								<Col lg='3' md='4' sm='6' xs='6' className='mb-4'>
									<ProductCard item={item} key={item.id} />
								</Col>
							);
						})}

						<div>
							<ReactPaginate
								pageCount={pageCount}
								onPageChange={changePage}
								previousLabel={'Prev'}
								nextLabel={'Next'}
								containerClassName='paginationButtons'
							/>
						</div>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default AllFoods;

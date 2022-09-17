import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
// Assets
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import '../styles/home.css';
// Components
import Helmet from '../components/Helmet/Helmet';
import Category from '../components/UI/category/Category';
import ProductCard from '../components/UI/product-card/ProductCard';
import featuredImg01 from '../assets/images/service-01.png';
import featuredImg02 from '../assets/images/service-02.png';
import featuredImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import whyImg from '../assets/images/location.png';
import networkImg from '../assets/images/network.png';
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';

const features = [
	{
		title: 'Quick Delivery',
		imgUrl: featuredImg01,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id.',
	},
	{
		title: 'Super Dine In',
		imgUrl: featuredImg02,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id.',
	},
	{
		title: 'Easy Pick Up',
		imgUrl: featuredImg03,
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, id.',
	},
];

const Home = () => {
	const [category, setCategory] = useState('all');
	const [allProducts, setAllProducts] = useState(products);
	const [hotPizza, setHotPizza] = useState([]);

	useEffect(() => {
		const filteredPizza = products.filter(
			(item) => item.category.toLowerCase() === 'pizza'
		);
		const slicePizza = filteredPizza.slice(0, 4);
		setHotPizza(slicePizza);
	}, []);

	useEffect(() => {
		if (category.toLowerCase() === 'all') {
			setAllProducts(products);
		}
		if (category.toLowerCase() === 'burger') {
			const filteredProducts = products.filter(
				(item) => item.category.toLowerCase() === 'burger'
			);
			setAllProducts(filteredProducts);
		}
		if (category.toLowerCase() === 'pizza') {
			const filteredProducts = products.filter(
				(item) => item.category.toLowerCase() === 'pizza'
			);
			setAllProducts(filteredProducts);
		}
		if (category.toLowerCase() === 'bread') {
			const filteredProducts = products.filter(
				(item) => item.category.toLowerCase() === 'bread'
			);
			setAllProducts(filteredProducts);
		}
	}, [category]);

	return (
		<Helmet title='Home'>
			<section>
				<Container>
					<Row>
						<Col lg='6' md='6'>
							<div className='hero__content'>
								<h5 className='mb-3'>Easy way to make an order</h5>
								<h1 className='mb-4 hero__title'>
									<span>HUNGRY?</span> Just wait <br /> food at
									<span> your door</span>
								</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit.
									Voluptatibus, vel sit dicta nulla laboriosam eius.
								</p>

								<div className='hero__buttons d-flex align-items-center gap-5 mt-4'>
									<button className='order__btn d-flex justify-content-between align-items-center'>
										Order now <i class='ri-arrow-right-s-line'></i>
									</button>
									<button className='all__foods-btn'>
										<Link to='/foods'>See all foods</Link>
									</button>
								</div>

								<div className='hero__service d-flex align-items-center gap-5 mt-5'>
									<p className='d-flex align-items-center gap-2'>
										<span className='shipping__icon'>
											<i class='ri-car-line'></i>
										</span>{' '}
										No shipping charge
									</p>
									<p className='d-flex align-items-center gap-2'>
										<span className='shipping__icon'>
											<i class='ri-shield-check-line'></i>
										</span>{' '}
										100% secure checkout
									</p>
								</div>
							</div>
						</Col>
						<Col lg='6' md='6'>
							<div className='hero__img'>
								<img src={heroImg} alt='hero img' className='w-100' />
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='pt-0'>
				<Category />
			</section>

			<section>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h5 className='featured__subtitle mb-4'>What we serve</h5>
							<h2 className='featured__title'>Just sit back at home</h2>
							<h2 className='featured__title'>
								we will <span>take care</span>
							</h2>
							<p className='mb-1 mt-4 featured__text'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
								laborum.
							</p>
							<p className='featured__text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Doloribus, quam.
							</p>
						</Col>

						{features.map((feature, index) => {
							return (
								<Col lg='4' md='6' sm='6' key={index} className='mt-5'>
									<div className='featured__item text-center px-5 py-3'>
										<img
											src={feature.imgUrl}
											alt={feature.title}
											className='w-25 mb-3'
										/>
										<h5 className='fw-bold mb-3'>{feature.title}</h5>
										<p>{feature.desc}</p>
									</div>
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h2>Population Foods</h2>
						</Col>

						<Col lg='12'>
							<div className='food__category d-flex align-items-center justify-content-center gap-4'>
								<button
									className={`all__btn ${
										category === 'all' ? 'foodBtnActive' : ''
									}`}
									onClick={() => setCategory('all')}
								>
									All
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === 'burger' ? 'foodBtnActive' : ''
									}`}
									onClick={() => setCategory('burger')}
								>
									<img src={foodCategoryImg01} alt='' />
									Burger
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === 'pizza' ? 'foodBtnActive' : ''
									}`}
									onClick={() => setCategory('pizza')}
								>
									<img src={foodCategoryImg02} alt='' />
									Pizza
								</button>
								<button
									className={`d-flex align-items-center gap-2 ${
										category === 'bread' ? 'foodBtnActive' : ''
									}`}
									onClick={() => setCategory('bread')}
								>
									<img src={foodCategoryImg03} alt='' />
									Bread
								</button>
							</div>
						</Col>

						{allProducts.map((item) => {
							return (
								<Col lg='3' md='4' sm='6' xs='6' key={item.id} className='mt-5'>
									<ProductCard item={item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>

			<section className='why__choose-us'>
				<Container>
					<Row>
						<Col lg='6' md='6'>
							<img src={whyImg} alt='why-tasty-treat' className='w-100' />
						</Col>
						<Col lg='6' md='6'>
							<div className='why__tasty-treat'>
								<h2 className='tasty__treat-title mb-4'>
									Why <span>Tasty Treat?</span>
								</h2>
								<p className='tasty__treat-desc'>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Dignissimos eius odio qui? Maxime molestiae sapiente maiores
									cumque laborum neque. Doloremque.
								</p>
								<ListGroup className='mt-5'>
									<ListGroupItem className='border-0 ps-0'>
										<p className='choose__us-title d-flex align-items-center gap-2'>
											<i class='ri-checkbox-circle-line'></i> Fresh and Tasty
											foods
										</p>
										<p className='choose__us-desc'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Non ratione quae officiis quibusdam corporis esse et,
										</p>
									</ListGroupItem>
									<ListGroupItem className='border-0 ps-0'>
										<p className='choose__us-title d-flex align-items-center gap-2'>
											<i class='ri-checkbox-circle-line'></i> Quality support
										</p>
										<p className='choose__us-desc'>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Ratione, impedit.
										</p>
									</ListGroupItem>
									<ListGroupItem className='border-0 ps-0'>
										<p className='choose__us-title d-flex align-items-center gap-2'>
											<i class='ri-checkbox-circle-line'></i> Order from any
											location
										</p>
										<p className='choose__us-desc'>
											Lorem, ipsum dolor sit amet consectetur adipisicing elit.
											A, sint?
										</p>
									</ListGroupItem>
								</ListGroup>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='pt-0'>
				<Container>
					<Row>
						<Col lg='12' className='text-center'>
							<h2>Hot Pizza</h2>
						</Col>
						{hotPizza.map((item) => {
							return (
								<Col lg='3' md='6' className='my-1' ket={item.id}>
									<ProductCard item={item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>

			<section>
				<Container>
					<Row>
						<Col lg='6' md='6'>
							<div className='testimonial'>
								<h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
								<h2 className='testimonial__title mb-4'>
									What our <span>customers</span> are saying
								</h2>
								<p className='testimonial__desc'>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Blanditiis corporis laudantium quaerat reprehenderit
									laboriosam culpa ad perspiciatis officiis nemo magnam?
								</p>
								<TestimonialSlider />
							</div>
						</Col>
						<Col lg='6' md='6'>
							<img src={networkImg} alt='testimonial-img' className='w-100' />
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};
export default Home;

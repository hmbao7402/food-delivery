import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart/cartSlice';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import ProductCard from '../components/UI/product-card/ProductCard';
import '../styles/food-details.css';
import products from '../assets/fake-data/products';

const FoodDetails = () => {
	const [tab, setTab] = useState('desc');
	const [enteredName, setEnteredName] = useState('');
	const [enteredEmail, setEnteredEmail] = useState('');
	const [reviewMsg, setReviewMsg] = useState('');

	const { id } = useParams();
	const dispatch = useDispatch();
	const product = products.find((product) => product.id === id);
	const { title, price, image01 } = product;
	const [previewImg, setPreviewImg] = useState(product.image01);

	const relatedProducts = products.filter(
		(item) => product.category === item.category
	);

	const addItem = () => {
		dispatch(
			cartActions.addItem({
				id,
				title,
				price,
				image01,
			})
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(enteredName, enteredEmail, reviewMsg)
	};

	useEffect(() => {
		setPreviewImg(product.image01);
	}, [product]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	return (
		<Helmet title={product.title}>
			<CommonSection title={product.title} />

			<section>
				<Container>
					<Row>
						<Col lg='2' md='2'>
							<div className='product__images'>
								<div
									className='img__item'
									onClick={() => setPreviewImg(product.image01)}
								>
									<img src={product.image01} alt='' className='w-50 mb-3' />
								</div>
								<div
									className='img__item'
									onClick={() => setPreviewImg(product.image02)}
								>
									<img src={product.image02} alt='' className='w-50 mb-3' />
								</div>
								<div
									className='img__item'
									onClick={() => setPreviewImg(product.image03)}
								>
									<img src={product.image03} alt='' className='w-50 mb-3' />
								</div>
							</div>
						</Col>

						<Col lg='4' md='4'>
							<div className='product__main-img'>
								<img src={previewImg} alt='' className='w-100' />
							</div>
						</Col>

						<Col lg='6' md='6'>
							<div className='single__product-content'>
								<h2 className='product__title mb-3'>{product.title}</h2>
								<p className='product__price'>
									Price: <span>${product.price}</span>
								</p>
								<p className='category mb-5'>
									Category: <span>{product.category}</span>
								</p>
								<button className='cart__btn' onClick={addItem}>
									Add to Cart
								</button>
							</div>
						</Col>

						<Col lg='12'>
							<div className='tabs d-flex align-items-center gap-5 py-3'>
								<h6
									className={`${tab === 'desc' ? 'tab__active' : ''}`}
									onClick={() => setTab('desc')}
								>
									Description
								</h6>
								<h6
									className={`${tab === 'review' ? 'tab__active' : ''}`}
									onClick={() => setTab('review')}
								>
									Review
								</h6>
							</div>

							{tab === 'desc' ? (
								<div className='tab__content'>
									<p>{product.desc}</p>
								</div>
							) : (
								<div className='tab__form mb-3'>
									<div className='review pt-5'>
										<p className='user__name mb-0'>John Doe</p>
										<p className='user__email'>jhon1@gmail.com</p>
										<p className='feedback__text'>great product</p>
									</div>
									<div className='review'>
										<p className='user__name mb-0'>John Doe</p>
										<p className='user__email'>jhon1@gmail.com</p>
										<p className='feedback__text'>great product</p>
									</div>
									<div className='review'>
										<p className='user__name mb-0'>John Doe</p>
										<p className='user__email'>jhon1@gmail.com</p>
										<p className='feedback__text'>great product</p>
									</div>

									<form className='form' onSubmit={handleSubmit}>
										<div className='form__group'>
											<input
												type='text'
												placeholder='Enter your name'
												onChange={(event) => setEnteredName(event.target.value)}
												required
											/>
										</div>	
										<div className='form__group'>
											<input
												type='text'
												placeholder='Enter your email'
												onChange={(event) =>
													setEnteredEmail(event.target.value)
												}
												required
											/>
										</div>
										<div className='form__group'>
											<textarea
												row={5}
												type='text'
												placeholder='Write your review'
												onChange={(event) => setReviewMsg(event.target.value)}
												required
											></textarea>
										</div>
										<button type='submit' className='cart__btn'>
											Submit
										</button>
									</form>
								</div>
							)}
						</Col>

						<Col lg='12' className='mb-5'>
							<h2 className='related__product-title'>You might also like</h2>
						</Col>

						{relatedProducts.map((item) => {
							return (
								<Col lg='3' md='4' sm='6' xs='6' className='mb-4' key={item.id}>
									<ProductCard item={item} />
								</Col>
							);
						})}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default FoodDetails;

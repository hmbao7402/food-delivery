import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import '../styles/cart-page.css';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { cartActions } from '../store/cart/cartSlice';

const Cart = () => {
	const cartItems = useSelector((state) => state.cart.cartItems);

	return (
		<Helmet title='Cart'>
			<CommonSection title='Your Cart' />
			<section>
				<Container>
					<Row>
						<Col lg='12'>
							{cartItems.length === 0 ? (
								<h5 className='text-center'>Your cart is empty</h5>
							) : (
								<table className='table table-bordered'>
									<thead>
										<tr>
											<th>Image</th>
											<th>Product Title</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Delete</th>
										</tr>
									</thead>
									<tbody>
										{cartItems.map((item) => {
											return <Tr key={item.id} item={item} />;
										})}
									</tbody>
								</table>
							)}
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

const Tr = (props) => {
	const { id, image01, title, price, quantity } = props.item;
	const dispatch = useDispatch();

	const deleteItem = () => {
		dispatch(cartActions.deleteItem(id));
	};

	return (
		<tr>
			<td className='text-center cart__img-box'>
				<img src={image01} alt={title} />
			</td>
			<td className='text-center'>{title}</td>
			<td className='text-center'>${price}</td>
			<td className='text-center'>x{quantity}</td>
			<td className='text-center cart__item-delete'>
				<i class='ri-delete-bin-line' onClick={deleteItem}></i>
			</td>
		</tr>
	);
};

export default Cart;

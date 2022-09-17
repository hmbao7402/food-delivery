import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../assets/images/res-logo.png';
import './header.css';
import { cartUiActions } from '../../store/cart/cartUiSlice';

const navLinks = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'Foods',
		path: '/foods',
	},
	{
		display: 'Contact',
		path: '/contact',
	},
	{
		display: 'Cart',
		path: '/cart',
	},
];

const Header = () => {
	const menuRef = useRef(null);
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);
	const dispatch = useDispatch()

	const toggleMenu = () => {
		menuRef.current.classList.toggle('show__menu');
	};

	const toggleCart = () => {
		dispatch(cartUiActions.toggle())
	}

	return (
		<header className='header header__shrink'>
			<Container>
				<div className='nav__wrapper d-flex align-items-center justify-content-between'>
					{/* Logo Container */}
					<div className='logo'>
						<img src={logo} alt='logo' />
						<h5>Tasty Treat</h5>
					</div>

					{/* Menu */}
					<div className='navigation' ref={menuRef} onClick={toggleMenu}>
						<div className='menu d-flex align-items-center gap-5'>
							{navLinks.map((item, index) => {
								return (
									<NavLink
										to={item.path}
										key={index}
										className={(navClass) =>
											navClass.isActive ? 'active__menu' : ''
										}
									>
										{item.display}
									</NavLink>
								);
							})}
						</div>
					</div>

					{/* Nav right icons */}
					<div className='nav__right d-flex align-items-center gap-4'>
						<span className='cart__icon' onClick={toggleCart}>
							<i class='ri-shopping-basket-line'></i>
							<span className='cart__badge'>{totalQuantity}</span>
						</span>
						<span className='user'>
							<Link to='/login'>
								<i className='ri-user-line'></i>
							</Link>
						</span>
						<span className='mobile__menu' onClick={toggleMenu}>
							<i className='ri-menu-line'></i>
						</span>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;

import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './footer.css';
import logo from '../../assets/images/res-logo.png';

const Footer = () => {
	return (
		<footer className='footer'>
			<Container>
				<Row>
					<Col lg='3' md='4' sm='6'>
						<div className='footer__logo text-start'>
							<img src={logo} alt='' />
							<h5>Tasty Treat</h5>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic,
								ducimus dolores sapiente consectetur illo repudiandae?
							</p>
						</div>
					</Col>
					<Col lg='3' md='4' sm='6'>
						<h5 className='footer__title'>Delivery Time</h5>
						<ListGroup className='delivery__time-list'>
							<ListGroupItem className='delivery__time-item border-0 ps-0'>
								<span>Sunday - Thursday</span>
								<p>10:00am - 11:00pm</p>
							</ListGroupItem>
							<ListGroupItem className='delivery__time-item border-0 ps-0'>
								<span>Friday - Saturday</span>
								<p>Off days</p>
							</ListGroupItem>
						</ListGroup>
					</Col>
					<Col lg='3' md='4' sm='6'>
						<h5 className='footer__title'>Contact</h5>
						<ListGroup className='deliver__time-list'>
							<ListGroupItem className='delivery__time-item border-0 ps-0'>
								<p>Location: HCMC, Vietnam</p>
							</ListGroupItem>
							<ListGroupItem className='delivery__time-item border-0 ps-0'>
								<span>Phone: 0932 611 774</span>
							</ListGroupItem>
							<ListGroupItem className='delivery__time-item border-0 ps-0'>
								<span>Email: humiba@gmail.com</span>
							</ListGroupItem>
						</ListGroup>
					</Col>
					<Col lg='3' md='4' sm='6'>
						<h5 className='footer__title'>Newsletter</h5>
						<p>Subscribe our newsletter</p>
						<div className='newsletter'>
							<input type='email' placeholder='Enter your email' />
							<span>
								<i className='ri-send-plane-line'></i>
							</span>
						</div>
					</Col>
				</Row>
				<Row className='mt-5'>
					<Col lg='6' md='6'>
						<p className='copyright__text'>
							Copyright - 2022, website made by Humiba. All Rights Reserved.
						</p>
					</Col>
					<Col lg='6' md='6'>
						<div className='social__links d-flex align-items-center justify-content-end gap-4'>
							<p className='m-0'>Follow: </p>
							<span>
								{' '}
								<a href='https://www.facebook.com/'>
									<i className='ri-facebook-line'></i>
								</a>{' '}
							</span>
							<span>
								<a href='https://github.com/hmbao7402'>
									<i className='ri-github-line'></i>
								</a>
							</span>
							<span>
								{' '}
								<a href='https://www.youtube.com/'>
									<i className='ri-youtube-line'></i>
								</a>{' '}
							</span>
							<span>
								{' '}
								<a href='https://www.linkedin.com/in/hmbao74/'>
									<i className='ri-linkedin-line'></i>
								</a>{' '}
							</span>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;

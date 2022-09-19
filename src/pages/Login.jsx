import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';

const Login = () => {
	const loginEmailRef = useRef();
	const loginPasswordRef = useRef();

	return (
		<Helmet title='Login'>
			<CommonSection title='Login' />

			<section>
				<Container>
					<Row>
						<Col lg='6' md='6' sm='12' className='m-auto text-center'>
							<form className='form mb-5'>
								<div className='form__group'>
									<input
										type='email'
										placeholder='Email'
										required
										ref={loginEmailRef}
									/>
								</div>
								<div className='form__group'>
									<input
										type='password'
										placeholder='Password'
										required
										ref={loginPasswordRef}
									/>
								</div>
								<button type='submit' className='cart__btn'>
									Login
								</button>
							</form>
							<Link to='/register'>Don't have account? Create an account</Link>
						</Col>
						{/* <Col lg='6' md='6' sm='12'></Col> */}
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Login;

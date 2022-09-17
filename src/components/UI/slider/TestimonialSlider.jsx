import React from 'react';
import Slider from 'react-slick';
import './testimonial-slider.css';
import avatar01 from '../../../assets/images/ava-1.jpg'
import avatar02 from '../../../assets/images/ava-2.jpg'
import avatar03 from '../../../assets/images/ava-3.jpg'

const TestimonialSlider = () => {
	const settings = {
		dots: true,
		autoplay: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		swipeToSlide: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			<div>
				<p className='review__text'>
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
					distinctio perferendis libero illo ipsam, voluptas ratione amet nisi.
					Architecto id, saepe reprehenderit corrupti dolor nesciunt."
				</p>
				<div className='slider__content d-flex align-items-center gap-3'>
					<img className='rounded' src={avatar01} alt='avatar-01' />
					<h6>Jhon Doe</h6>
				</div>
			</div>
			<div>
				<p className='review__text'>
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
					distinctio perferendis libero illo ipsam, voluptas ratione amet nisi.
					Architecto id, saepe reprehenderit corrupti dolor nesciunt."
				</p>
				<div className='slider__content d-flex align-items-center gap-3'>
					<img className='rounded' src={avatar02} alt='avatar-02' />
					<h6>Mitchell Marsh</h6>
				</div>
			</div>
			<div>
				<p className='review__text'>
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
					distinctio perferendis libero illo ipsam, voluptas ratione amet nisi.
					Architecto id, saepe reprehenderit corrupti dolor nesciunt."
				</p>
				<div className='slider__content d-flex align-items-center gap-3'>
					<img className='rounded' src={avatar03} alt='avatar-03' />
					<h6>Steven Crock</h6>
				</div>
			</div>
		</Slider>
	);
};

export default TestimonialSlider;

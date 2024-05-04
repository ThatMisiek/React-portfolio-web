import React from "react";
import "./testimonials.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const data = [
	{
		avatar: AV1,
		name: "Jan Kowalski",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore sunt, est facilis et vitae nam dolorem quidem suscipit laudantium culpa consequuntur aliquid! Quam, provident. Vero expedita recusandae enim repellat!",
	},
	{
		avatar: AV2,
		name: "Jan Kowalski",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore sunt, est facilis et vitae nam dolorem quidem suscipit laudantium culpa consequuntur aliquid! Quam, provident. Vero expedita recusandae enim repellat!",
	},
	{
		avatar: AV3,
		name: "Jan Kowalski",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore sunt, est facilis et vitae nam dolorem quidem suscipit laudantium culpa consequuntur aliquid! Quam, provident. Vero expedita recusandae enim repellat!",
	},
	{
		avatar: AV4,
		name: "Jan Kowalski",
		review:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tempore sunt, est facilis et vitae nam dolorem quidem suscipit laudantium culpa consequuntur aliquid! Quam, provident. Vero expedita recusandae enim repellat!",
	},
];

function Testimonials() {
	return (
		<section id='testimonials'>
			<h5>Review Form Clients</h5>
			<h2>Testimonials</h2>

			<Swiper
				className='container testimonials__container'
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}>
				{data.map(({ avatar, name, review }, index) => {
					return (
						<SwiperSlide key={index} className='testimonial'>
							<div className='client__avatar'>
								<img src={avatar} />
							</div>
							<h5 className='client_name'>{name}</h5>
							<small className='client__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}

export default Testimonials;

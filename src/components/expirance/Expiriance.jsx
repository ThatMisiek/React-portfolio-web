import React from "react";
import "./expiriance.css";
import { TiInputChecked } from "react-icons/ti";

function Expiriance() {
	return (
		<section id='expiriance'>
			<h5>Skills That I Have</h5>
			<h2>My expiriance</h2>

			<div className='container expiriance__container'>
				<div className='expiriance__frontend'>
					<h3>Frontend developmenrt</h3>
					<div className='expiriance__content'>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>HTML</h4>
								<small className='text-light'>Expirienced</small>
							</div>
						</article>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>CSS</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>Java Script</h4>
								<small className='text-light'>Expirienced</small>
							</div>
						</article>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>Tailwind</h4>
								<small className='text-light'>Intermediate</small>
							</div>
						</article>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>React</h4>
								<small className='text-light'>Expirienced</small>
							</div>
						</article>
					</div>
				</div>
				<div className='expiriance__backend'>
					<h3>Backend developmenrt</h3>
					<div className='expiriance__content'>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>Node.js</h4>
								<small className='text-light'>Basic</small>
							</div>
						</article>
						<article className='expiriance__details'>
							<TiInputChecked className='expiriance__details-icon' />
							<div>
								<h4>MongoDB</h4>
								<small className='text-light'>Basic</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Expiriance;

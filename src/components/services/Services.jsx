import React from "react";
import "./services.css";
import { TbZoomCheck } from "react-icons/tb";

function Services() {
	return (
		<section id='services'>
			<h5>What I Can Do For You</h5>
			<h2>Services</h2>

			<div className='container services__container'>
				<article className='service'>
					<div className='service__head'>
						<h3>UI/UX Design</h3>
					</div>
					<ul className='service__list'>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>

				<article className='service'>
					<div className='service__head'>
						<h3>Web Development</h3>
					</div>
					<ul className='service__list'>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>

				<article className='service'>
					<div className='service__head'>
						<h3>Content Creator</h3>
					</div>
					<ul className='service__list'>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
						<li>
							<TbZoomCheck className='service__list-icon' />
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}

export default Services;

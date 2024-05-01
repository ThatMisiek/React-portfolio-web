import React from "react";
import "./about.css";
import MeAbout from "../../assets/me-about.jpg";
import { LuBrainCircuit } from "react-icons/lu";
import { LiaUsersCogSolid } from "react-icons/lia";
import { VscFileSubmodule } from "react-icons/vsc";

const About = () => {
	return (
		<section id='about'>
			<h5>Just a few words</h5>
			<h2>About Me</h2>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={MeAbout} alt='About Image' />
					</div>
				</div>
				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card'>
							<LuBrainCircuit className='about__icon' />
							<h5>Expiriance</h5>
							<small>2+ Years of Learning</small>
						</article>
						<article className='about__card'>
							<LiaUsersCogSolid className='about__icon' />
							<h5>Clients</h5>
							<small>Every Year Growing</small>
						</article>
						<article className='about__card'>
							<VscFileSubmodule className='about__icon' />
							<h5>Projects</h5>
							<small>Every Challange Can Be Done</small>
						</article>
					</div>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
						optio vel est. Ratione vel accusantium placeat laudantium
						dignissimos dolor distinctio non magni inventore. Debitis doloribus
						enim placeat doloremque alias vitae!
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's have a chat
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;

"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

import ArrowLeft from "@/public/icons/Arrows Button Left.svg";
import ArrowRight from "@/public/icons/Arrows Button Right.svg";
import { releases } from "../app/data/releases";

import styles from "@/public/styles/carousel.module.scss";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
	const {
		carouselState: { currentSlide },
	} = rest;

	return (
		<div className={styles.carousel_button_container}>
			<div onClick={() => previous()} className={styles.carousel_nav_button}>
				<Image src={ArrowLeft} alt='Arrow Left' />
			</div>
			<div onClick={() => next()} className={styles.carousel_nav_button}>
				<Image src={ArrowRight} alt='Arrow Right' />
			</div>
		</div>
	);
};

const CarouselSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(1);

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<Carousel
			afterChange={(nextSlide, { currentSlide, onMove }) => {
				setCurrentSlide(currentSlide + 1);
			}}
			responsive={responsive}
			arrows={false}
			renderButtonGroupOutside={true}
			customButtonGroup={<ButtonGroup />}
			focusOnSelect={true}
			containerClass='carousel-container'
		>
			{releases.map((release, index) => (
				<div key={index} className={styles.carousel_card}>
					<div className='flex-[1_1_0%]'>
						<Image className='w-full h-full object-cover' src={release.image} alt={release.title} />
					</div>
					<div className='flex-[2_2_0%]'>
						<h3 className='font-bold text-xl'>{release.title}</h3>
						<h4 className='text-green uppercase text-sm my-2'>{release.name}</h4>
						<p className='text-[12px]'>{release.description}</p>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselSlider;

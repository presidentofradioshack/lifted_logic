"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

import ArrowLeft from "@/public/icons/Arrows Button Left.svg";
import ArrowRight from "@/public/icons/Arrows Button Right.svg";
import { releases } from "../app/data/releases";

import styles from "@/public/styles/carousel.module.scss";

// @ts-ignore
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
			items: 2,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 2,
			partialVisibilityGutter: 60,
		},
		tablet: {
			breakpoint: { max: 1120, min: 464 },
			items: 1,
			partialVisibilityGutter: 60,
		},
		mobile: {
			breakpoint: { max: 720, min: 0 },
			items: 1,
			partialVisibilityGutter: 60,
		},
	};

	return (
		<Carousel
			afterChange={(nextSlide, { currentSlide }) => {
				setCurrentSlide(currentSlide + 1);
			}}
			responsive={responsive}
			arrows={false}
			partialVisbile={true}
			renderButtonGroupOutside={true}
			// @ts-ignore
			customButtonGroup={<ButtonGroup />}
			focusOnSelect={true}
			containerClass='carousel-container'
		>
			{releases.map((release, index) => (
				<div key={index} className={styles.carousel_card}>
					<div className={styles.carousel_card_wrapper}>
						<div className={styles.carousel_card_image_container}>
							<Image
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
								src={release.image}
								alt={release.title}
							/>
						</div>
						<div className={styles.carousel_card_details_container}>
							<h4>{release.title}</h4>
							<span
								style={{
									fontSize: "16px",
									lineHeight: "24px",
									letterSpacing: "4%",
									textTransform: "uppercase",
									color: "#42A418",
								}}
							>
								{release.name}
							</span>
							<p className='small-body' style={{ marginTop: "12px" }}>
								{release.description}
							</p>
						</div>
					</div>
				</div>
			))}
		</Carousel>
	);
};

export default CarouselSlider;

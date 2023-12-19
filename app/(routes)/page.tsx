"use client";

import React from "react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";

import Play from "@/public/icons/Play button triangle.svg";
import Carousel from "@/components/carousel";
import Map from "@/components/map";
import { useJsApiLoader } from "@react-google-maps/api";
import styles from "@/app/styles.module.scss";

enum ReasonEnum {
	other = "other",
}

interface FormInput {
	firstName: string;
	lastName: string;
	email: string;
	reason: ReasonEnum;
	message: string;
}

const HomePage = () => {
	const { register, handleSubmit } = useForm<FormInput>();
	const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	});

	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero_content}>
					<h1>A.M. Paradox</h1>
					<p>
						Christopher Brent Wood, better known by his stage name Brent Faiyaz, is an American singer and record
						producer. He released his debut project, an extended play entitled A.M. Paradox, in 2016.
					</p>

					<div className={styles.player}>
						<button>
							<Image src={Play} alt='Play' />
						</button>
						<span>Watch Video</span>
					</div>
				</div>
			</section>

			<section className={styles.featured_section}>
				<div className={styles.featured_artist_image} />

				<div className={styles.featured_artist_wrapper}>
					<h2>Brent Faiyaz, So Far Gone</h2>
					<p>
						Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to
						Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career.
						On January 19, 2015, he released his debut single "Allure". On June 1, 2016, Faiyaz released "Invite Me",
						the lead single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M.
						Paradox was released and received with positive reviews from music critics. On January 26, 2017, Sonder
						released their debut EP Into.
					</p>
					<button className={styles.button}>Learn More</button>
				</div>
			</section>

			<section className={styles.new_releases_section}>
				<div className={styles.new_releases_heading}>
					<h2>New Releases</h2>
					<p>
						New albums every single month, check out the newest & best from Snyder Recording artist, now available on
						Apple Music & Spotify.
					</p>
				</div>

				<Carousel />

				{isLoaded ? <Map /> : <div>Loading map...</div>}
			</section>

			<section className={styles.contact_section}>
				<div className={styles.contact_section_heading}>
					<h2>Get In Touch</h2>
					<p>
						New albums every single month, check out the newest & best from Snyder Recording artist, now available on
						Apple Music & Spotify.
					</p>

					<form onSubmit={handleSubmit(onSubmit)} className={styles.contact_form}>
						<div className={styles.form_grid}>
							<div className={styles.form_input_group}>
								<label>First Name</label>
								<input placeholder='First Name' {...register("firstName")} />
							</div>

							<div className={styles.form_input_group}>
								<label>Last Name</label>
								<input placeholder='Last Name' {...register("lastName")} />
							</div>

							<div className={styles.form_input_group}>
								<label>Email Address</label>
								<input placeholder='Email Address' {...register("email")} />
							</div>

							<div className={styles.form_input_group}>
								<label>Reason for Contacting</label>
								<select {...register("reason")}>
									<option value='other'>Other</option>
								</select>
							</div>
						</div>

						<div className={styles.form_input_group} style={{ marginTop: "24px" }}>
							<label>Message (Optional)</label>
							<textarea placeholder='Write a brief message...' rows={6}></textarea>
						</div>

						<button type='submit' className={styles.button} style={{ marginTop: "24px" }}>
							Learn More
						</button>
					</form>
				</div>

				<div className={styles.contact_section_image} />
			</section>
		</>
	);
};

export default HomePage;

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
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();
	const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

	const { isLoaded } = useJsApiLoader({
		googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
	});

	return (
		<>
			<section className={styles.hero_container}>
				<div className={styles.hero_bg} />
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
					<p className='regular-body'>
						{`Faiyaz began uploading his music onto SoundCloud in 2014 and moved from his hometown Columbia, Maryland to
						Charlotte, North Carolina before ultimately settling in Los Angeles, California to further his music career.
						On January 19, 2015, he released his debut single "Allure". On June 1, 2016, Faiyaz released "Invite Me",
						the lead single from his upcoming debut EP. On September 19, 2016, his 21st birthday, the EP entitled A.M.
						Paradox was released and received with positive reviews from music critics. On January 26, 2017, Sonder
						released their debut EP Into.`}
					</p>
					<button>Learn More</button>
				</div>
			</section>

			<section className={styles.new_releases_section}>
				<div className={styles.new_releases_heading}>
					<h3>New Releases</h3>
					<p className='large-body'>
						New albums every single month, check out the newest & best from Snyder Recording artist, now available on
						Apple Music & Spotify.
					</p>
				</div>

				<Carousel />

				{isLoaded ? <Map /> : <div>Loading map...</div>}
			</section>

			<section className={styles.contact_section}>
				<div className={styles.contact_section_heading}>
					<h3>Get In Touch</h3>
					<p className='large-body'>
						New albums every single month, check out the newest & best from Snyder Recording artist, now available on
						Apple Music & Spotify.
					</p>

					<form onSubmit={handleSubmit(onSubmit)} className={styles.contact_form}>
						<div className={styles.form_grid}>
							<div className={styles.form_input_group}>
								<label>First Name</label>
								<input
									placeholder='First Name'
									{...register("firstName", { required: true })}
									aria-invalid={errors.firstName ? "true" : "false"}
								/>
								{errors.firstName && (
									<span style={{ color: "red" }} role='alert'>
										First name is required
									</span>
								)}
							</div>

							<div className={styles.form_input_group}>
								<label>Last Name</label>
								<input
									placeholder='Last Name'
									{...(register("lastName"), { required: true })}
									aria-invalid={errors.lastName ? "true" : "false"}
								/>
								{errors.lastName && (
									<span style={{ color: "red" }} role='alert'>
										Last name is required
									</span>
								)}
							</div>

							<div className={styles.form_input_group}>
								<label>Email Address</label>
								<input
									type='email'
									placeholder='Email Address'
									{...(register("email"), { required: true })}
									aria-invalid={errors.email ? "true" : "false"}
								/>
								{errors.email && (
									<span style={{ color: "red" }} role='alert'>
										Email is required
									</span>
								)}
							</div>

							<div className={styles.form_input_group}>
								<label>Reason for Contacting</label>
								<select {...(register("reason"), { required: true })}>
									<option value='' selected disabled>
										Select One
									</option>
									<option value='other'>Other</option>
								</select>
							</div>
						</div>

						<div className={styles.form_input_group} style={{ marginTop: "24px" }}>
							<label>Message (Optional)</label>
							<textarea placeholder='Write a brief message...' rows={6}></textarea>
						</div>

						<button type='submit' style={{ marginTop: "24px" }}>
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

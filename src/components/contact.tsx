"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/Button";
import { Input, Textarea } from "./ui/Input";
import { SectionContainer } from "./ui/SectionContainer";
import { Eyebrow, H2, H3 } from "./ui/Typograph";

function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<div className="rounded-2xl border border-line bg-white px-4.75 py-5.75 shadow-[0_20px_50px_-20px_rgba(23,27,44,0.12)] md:p-9.75 lg:min-w-0 lg:flex-1">
			<H3 className="leading-8">Contact us</H3>
			<p className="mt-2 text-sm leading-6 text-muted">
				Fill out the fields and we will get in touch.
			</p>
			<form
				className="mt-6 flex flex-col gap-5"
				onSubmit={(event) => {
					event.preventDefault();
					setSubmitted(true);
				}}
			>
				<Input
					label="Full name"
					name="name"
					type="text"
					required
					autoComplete="name"
					placeholder="Your name"
				/>
				<Input
					label="Email"
					name="email"
					type="email"
					required
					autoComplete="email"
					placeholder="youremail@example.com"
				/>
				<Textarea
					label="Your question"
					name="question"
					required
					placeholder="Tell us how we can help..."
				/>
				<Button type="submit" variant="solid" size="xl" className="mt-1 w-full">
					Send message
				</Button>
				{submitted ? (
					<p role="status" className="text-sm leading-6 text-muted">
						Demo only: no message was sent.
					</p>
				) : null}
			</form>
		</div>
	);
}

export function Contact() {
	return (
		<section id="contact" className="bg-white">
			<SectionContainer className="grid content-start gap-10 py-15 md:grid-cols-2 md:content-normal md:py-section lg:flex lg:gap-contact">
				<div className="md:self-center lg:basis-3/7 lg:shrink-0">
					<Eyebrow className="text-blue">Contact</Eyebrow>
					<H2 className="mt-4">Get in touch</H2>
					<p className="mt-4 max-w-120 text-sm leading-6 text-muted md:text-lg md:leading-7">
						Have a question? We’re here to help. Whether you’re looking for the
						right course, learning with your team or interested in teaching with
						Luma, we’d love to hear from you.
					</p>
					<ul className="mt-8 flex flex-col gap-4 md:mt-10">
						<li className="flex items-center gap-4 rounded-xl bg-cream p-4 md:p-5">
							<span className="flex size-10 items-center justify-center rounded-xl bg-blue-soft">
								<Image
									src="/assets/icon-contact-1.svg"
									alt=""
									width={24}
									height={24}
									loading="eager"
									className="size-6"
								/>
							</span>
							<div className="flex min-w-0 flex-col gap-0.5 md:gap-1">
								<p className="text-sm leading-6">Email</p>
								<a
									href="mailto:contact@luma.com"
									className="text-sm leading-6 text-blue hover:underline"
								>
									contact@luma.com
								</a>
							</div>
						</li>
						<li className="flex items-center gap-4 rounded-xl bg-cream p-4 md:p-5">
							<span className="flex size-10 items-center justify-center rounded-xl bg-blue-soft">
								<Image
									src="/assets/icon-clock.svg"
									alt=""
									width={24}
									height={24}
									loading="eager"
									className="size-5"
								/>
							</span>
							<div className="flex min-w-0 flex-col gap-0.5 md:gap-1">
								<p className="text-sm leading-6">Response Time</p>
								<p className="text-sm leading-6 text-muted">
									Up to 24 hours on business days
								</p>
							</div>
						</li>
					</ul>
				</div>

				<ContactForm />
			</SectionContainer>
		</section>
	);
}

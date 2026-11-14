import Image from "next/image";
import { Button } from "./ui/Button";
import { SectionContainer } from "./ui/SectionContainer";
import { Eyebrow, H1, P } from "./ui/Typograph";

export function Hero() {
	return (
		<section className="bg-cream">
			<SectionContainer className="grid min-h-261 content-start gap-10 pt-15 pb-14 md:py-section tablet:flex tablet:min-h-155 tablet:gap-layout xl:min-h-180">
				<div className="order-2 mx-auto flex w-full min-w-0 max-w-129 flex-col items-start tablet:order-1 tablet:mx-0 tablet:max-w-140 tablet:flex-1">
					<Eyebrow className="text-blue">Learn at your own pace</Eyebrow>
					<H1 className="mt-4">Build skills that actually move you forward.</H1>
					<P className="mt-6 max-w-120 text-muted">
						Practical courses taught by people who do the work every day. Learn
						design, technology, business and more — one focused lesson at a
						time.
					</P>
					<div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
						<Button href="#categories" variant="solid" size="xl">
							Explore courses
						</Button>
						<Button href="#how-it-works" variant="outline" size="xl">
							See how it works
						</Button>
					</div>
					<div className="mt-7.5 flex items-center gap-3 self-center sm:self-auto lg:mt-8">
						<div className="flex -space-x-2">
							{[1, 2, 3].map((n) => (
								<span
									key={n}
									className="relative size-8 shrink-0 rounded-full ring-2 ring-cream after:absolute after:inset-0 after:rounded-full after:border-2 after:border-cream"
								>
									<Image
										src={`/assets/photo-avatar-${n}.jpg`}
										alt=""
										width={80}
										height={80}
										sizes="40px"
										loading="eager"
										className="size-full rounded-full object-cover"
									/>
								</span>
							))}
						</div>
						<p className="text-sm text-muted">
							<strong className="font-bold text-ink">Trusted by 24,000+</strong>{" "}
							learners
						</p>
					</div>
				</div>

				<div className="order-1 mx-auto w-full min-w-0 max-w-129 px-2 tablet:order-2 tablet:mx-0 tablet:max-w-125 tablet:flex-1 tablet:pr-hero-inset tablet:pl-0">
					<div className="relative">
						{/* Percentages of the image box, measured from the Figma frames, so the ornaments scale with the image. */}
						<div
							aria-hidden="true"
							className="absolute top-[6.32%] right-[-5.2%] h-[90%] w-[19.2%] rounded-2xl bg-orange-soft md:top-[4.62%] md:right-[-7.8%]"
						/>
						<div
							aria-hidden="true"
							className="absolute bottom-[3.16%] left-[-5.2%] aspect-square w-[18.5%] rounded-full bg-blue-soft md:bottom-[2.12%] md:left-[-8.96%] md:w-[21.2%]"
						/>
						<Image
							src="/assets/photo-hero.png"
							alt="Person focused on learning at their laptop"
							width={900}
							height={1100}
							priority
							className="relative z-10 aspect-346/380 w-full max-h-130 rounded-2xl object-cover object-center tablet:aspect-500/520 tablet:rounded-3xl"
						/>
						<div className="absolute top-[1.58%] left-[-2.31%] z-20 flex h-14 items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg md:top-[3.08%] md:left-[-4.4%]">
							<span className="inline-flex items-center rounded-md bg-blue-soft px-1 text-sm leading-6 font-bold text-blue">
								120+
							</span>
							<span className="text-sm whitespace-nowrap">
								expert-led courses
							</span>
						</div>
						<div className="absolute right-[-5.49%] bottom-[9.47%] z-20 flex h-12 items-center gap-2 rounded-xl bg-white px-4 shadow-lg md:right-[-11.44%] md:bottom-[6.83%]">
							<span className="flex gap-0.5" aria-hidden="true">
								{[1, 2, 3, 4, 5].map((star) => (
									<Image
										key={star}
										src="/assets/icon-star.svg"
										alt=""
										width={14}
										height={14}
										loading="eager"
										className="size-3.5"
									/>
								))}
							</span>
							<span className="text-sm whitespace-nowrap">4.9 avg rating</span>
						</div>
					</div>
				</div>
			</SectionContainer>
		</section>
	);
}

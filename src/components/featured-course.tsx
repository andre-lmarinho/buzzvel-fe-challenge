import Image from "next/image";
import { Button } from "./ui/Button";
import { SectionContainer } from "./ui/SectionContainer";
import { Eyebrow, H2 } from "./ui/Typograph";

const FACTS = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
	return (
		<section id="featured-course" className="bg-blue">
			<SectionContainer className="grid items-center gap-10 pt-15 pb-14 md:py-section tablet:grid-cols-2 tablet:gap-layout lg:pr-6">
				<div className="relative mx-auto w-full min-w-0 max-w-135">
					<Image
						src="/assets/photo-featured-course.png"
						alt="Product design course — student working on interface designs"
						width={700}
						height={500}
						loading="eager"
						className="aspect-362/280 w-full max-h-104 rounded-2xl object-cover tablet:aspect-538/408 tablet:max-h-102"
					/>
					<span className="absolute -top-3 -left-3 inline-flex items-center rounded-lg bg-yellow px-3 py-1.5 text-xs font-semibold tracking-[0.12em] text-ink uppercase">
						Featured course
					</span>
				</div>

				<div className="mx-auto w-full max-w-135 tablet:max-w-none">
					<Eyebrow className="text-white">Most popular this month</Eyebrow>
					<H2 className="mt-4 text-white">
						Designing products people understand.
					</H2>
					<p className="mt-5 text-sm leading-6 text-white md:text-base md:leading-7">
						Learn how to turn complex workflows into simple, intentional product
						experiences through research, structure and thoughtful interaction
						design.
					</p>
					<p className="mt-6 text-sm leading-6 text-white md:text-base md:leading-7">
						with Maya Chen · Senior Product Designer
					</p>
					<ul className="mt-6 flex flex-wrap gap-3">
						{FACTS.map((fact) => (
							<li
								key={fact}
								className="inline-flex items-center rounded-lg border border-line px-3.5 py-1.5 text-sm leading-6 text-white"
							>
								{fact}
							</li>
						))}
					</ul>
					<div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
						<Button href="#contact" variant="yellow" size="xl">
							View course
						</Button>
						<Button
							href="#categories"
							variant="link-inverse"
							className="group h-12.5 gap-2 px-4 md:h-13"
						>
							Browse all courses
							<Image
								src="/assets/icon-arrow.svg"
								alt=""
								width={20}
								height={20}
								loading="eager"
								className="size-5 brightness-0 invert transition-transform group-hover:translate-x-1"
							/>
						</Button>
					</div>
				</div>
			</SectionContainer>
		</section>
	);
}

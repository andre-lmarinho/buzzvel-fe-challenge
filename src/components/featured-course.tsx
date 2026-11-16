import Image from "next/image";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { PageSection } from "./ui/PageSection";
import { Eyebrow, H2 } from "./ui/Typograph";

const FACTS = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
	return (
		<PageSection
			id="featured-course"
			className="bg-blue grid items-center tablet:grid-cols-2 tablet:gap-layout"
		>
			<div className="relative mx-auto w-full min-w-0 max-w-135">
				<Image
					src="/assets/photo-featured-course.png"
					alt="Product design course — student working on interface designs"
					width={700}
					height={500}
					sizes="(min-width: 768px) 538px, calc(100vw - 48px)"
					className="aspect-362/280 w-full max-h-104 rounded-2xl object-cover tablet:aspect-538/408 tablet:max-h-102"
				/>
				<Badge variant="label" className="absolute -top-3 -left-3">
					Featured course
				</Badge>
			</div>

			<div className="mx-auto w-full max-w-135 tablet:max-w-none">
				<Eyebrow className="text-white">Most popular this month</Eyebrow>
				<H2 className="mt-4 text-white">
					Designing products people understand.
				</H2>
				<p className="text-sm leading-6 mt-5 text-white md:text-base md:leading-7">
					Learn how to turn complex workflows into simple, intentional product
					experiences through research, structure and thoughtful interaction
					design.
				</p>
				<p className="text-sm leading-6 mt-6 text-white md:text-base md:leading-7">
					with Maya Chen · Senior Product Designer
				</p>
				<ul className="mt-6 flex flex-wrap gap-3">
					{FACTS.map((fact) => (
						<li key={fact}>
							<Badge variant="outline" className="text-white">
								{fact}
							</Badge>
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
						size="xl"
						className="group gap-2"
					>
						Browse all courses
						<Image
							src="/assets/icon-arrow.svg"
							alt=""
							width={20}
							height={20}
							className="ornament size-5 brightness-0 invert transition-transform group-hover:translate-x-1"
						/>
					</Button>
				</div>
			</div>
		</PageSection>
	);
}

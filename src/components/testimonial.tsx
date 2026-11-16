import Image from "next/image";
import { PageSection } from "./ui/PageSection";

const STATS = [
	{ value: "24K+", label: "active learners" },
	{ value: "120+", label: "expert-led courses" },
	{ value: "92%", label: "complete their first course" },
];

export function Testimonial() {
	return (
		<PageSection className="bg-white grid gap-15 md:grid-cols-3 md:gap-8 lg:flex lg:gap-16">
			<div className="md:col-span-2 md:flex md:flex-col md:justify-center lg:basis-3/5">
				<Image src="/assets/icon-quote.svg" alt="" width={24} height={22} />
				<blockquote className="mt-4 font-display text-[clamp(1.25rem,2.35vw,1.875rem)] leading-[clamp(2rem,3.45vw,2.75rem)] font-semibold md:max-w-150 md:tracking-tight">
					The lessons are short enough to fit into my week, but detailed enough
					that I actually leave with something I can use.
				</blockquote>
				<figure className="mt-8 flex items-center gap-4">
					<Image
						src="/assets/photo-avatar-testimonial.jpg"
						alt=""
						width={48}
						height={48}
						className="size-12 rounded-full object-cover"
					/>
					<figcaption>
						<p className="text-base leading-6.5 md:text-lg md:leading-7 text-ink font-bold">
							Alex Morgan
						</p>
						<p className="text-sm leading-6 text-muted">Product Manager</p>
					</figcaption>
				</figure>
			</div>

			<ul className="grid grid-cols-3 md:grid-cols-1 md:gap-5 md:border-l md:border-line md:pl-8 lg:flex-1 lg:pl-12">
				{STATS.map((stat) => (
					<li key={stat.label}>
						<p className="font-display text-[clamp(2rem,10vw,2.5rem)] leading-11 font-extrabold tracking-tight text-blue md:text-[clamp(2.5rem,5vw,4rem)] md:leading-[1.1] xl:leading-17.5">
							{stat.value}
						</p>
						<p className="text-sm leading-6 text-subtle md:leading-6.25">
							{stat.label}
						</p>
					</li>
				))}
			</ul>
		</PageSection>
	);
}

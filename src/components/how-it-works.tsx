import { SectionContainer } from "./ui/SectionContainer";
import { Eyebrow, H2, H3 } from "./ui/Typograph";

const STEPS = [
	{
		step: "01",
		title: "Choose your focus",
		text: "Find courses based on the skill you want to build, not endless content categories.",
		iconClass:
			"rounded-full bg-blue-soft before:absolute before:top-2.25 before:left-2 before:size-6 before:rounded-md before:bg-blue",
	},
	{
		step: "02",
		title: "Learn from experience",
		text: "Follow concise lessons created by professionals who use these skills.",
		iconClass:
			"before:absolute before:inset-0 before:rotate-12 before:rounded-lg before:bg-peach after:absolute after:right-1 after:bottom-1 after:size-7 after:rounded-full after:bg-orange",
	},
	{
		step: "03",
		title: "Put it into practice",
		text: "Every course includes practical exercises designed to turn knowledge into action.",
		iconClass:
			"rounded-xl bg-yellow-soft before:absolute before:bottom-2 before:left-2 before:size-5 before:rounded-full before:bg-yellow-dark",
	},
];

export function HowItWorks() {
	return (
		<section id="how-it-works" className="bg-cream">
			<SectionContainer className="py-15 md:min-h-157 md:py-section">
				<Eyebrow className="text-center text-blue">How Luma works</Eyebrow>
				<H2 className="mt-4 text-center">Less browsing. More learning.</H2>

				<ol className="relative mt-10 grid md:mt-20 md:grid-cols-3 md:gap-8 md:py-7 lg:gap-20">
					{STEPS.map((item) => (
						<li
							key={item.step}
							className="relative pb-20 after:absolute after:bottom-0 after:left-7 after:h-12.5 after:w-px after:bg-line before:absolute before:top-7 before:left-7 before:hidden before:h-px before:w-[calc(100%+2rem)] before:bg-line last:pb-0 last:after:hidden last:before:hidden md:pb-0 md:after:hidden md:before:block lg:before:w-[calc(100%+5rem)]"
						>
							<div
								aria-hidden="true"
								className={`relative z-10 size-14 ${item.iconClass}`}
							/>
							<p className="mt-6 text-xs font-semibold tracking-[0.12em] text-subtle uppercase">
								Step {item.step}
							</p>
							<H3 className="mt-2">{item.title}</H3>
							<p className="mt-3 text-sm leading-6 text-muted md:text-base md:leading-7 md:max-w-80">
								{item.text}
							</p>
						</li>
					))}
				</ol>
			</SectionContainer>
		</section>
	);
}

import Image from "next/image";
import { Button } from "./ui/Button";
import { SectionContainer } from "./ui/SectionContainer";

/* Decorative geometry from the Figma frame (1280×469). */
const SHAPES = [
	"top-[3.6%] left-[1.7%] size-[clamp(4rem,8.44vw,6.75rem)] rounded-full border border-orange-soft",
	"top-[10%] left-[25.2%] size-[clamp(2.25rem,4.38vw,3.5rem)] rotate-10 rounded-lg border border-orange-soft",
	"top-[9.4%] left-[68.6%] size-[clamp(1.25rem,2.5vw,2rem)] rounded-full border border-orange-soft",
	"top-[-4.5%] right-[0.8%] h-[clamp(4.5rem,9.3vw,7.44rem)] w-[clamp(4.25rem,8.8vw,7.06rem)] rotate-13 rounded-lg bg-orange-soft",
	"top-[50.5%] left-[-1.9%] size-[clamp(2.25rem,4.4vw,3.5rem)] rotate-14 rounded-lg bg-orange-soft",
	"bottom-[-5%] left-[4.4%] size-[clamp(4.5rem,9.38vw,7.5rem)] rounded-full bg-orange-soft",
	"right-[3.2%] bottom-[2.1%] size-[clamp(1.25rem,2.5vw,2rem)] rounded-full border border-orange-soft",
];

const ICONS = [
	{
		src: "/assets/cta-icon-1.svg",
		size: 80,
		style: { left: "87.5%", top: "47%" },
	},
	{
		src: "/assets/cta-icon-2.svg",
		size: 101,
		style: { left: "23%", top: "77%" },
	},
	{
		src: "/assets/cta-icon-3.svg",
		size: 32,
		style: { left: "11%", top: "46%" },
	},
	{
		src: "/assets/cta-icon-4.svg",
		size: 61,
		style: { left: "79%", top: "17%" },
	},
	{
		src: "/assets/cta-icon-5.svg",
		size: 48,
		style: { left: "75%", top: "81%" },
	},
];

export function FinalCta() {
	return (
		<section id="join" className="relative overflow-hidden bg-yellow-soft">
			<div aria-hidden="true" className="absolute inset-0 hidden md:block">
				{SHAPES.map((className) => (
					<div key={className} className={`absolute ${className}`} />
				))}
				{ICONS.map((icon) => (
					<Image
						key={icon.src}
						src={icon.src}
						alt=""
						width={icon.size}
						height={icon.size}
						loading="eager"
						className="absolute opacity-90"
						style={{ ...icon.style, width: `${icon.size / 12.8}%` }}
					/>
				))}
			</div>

			<SectionContainer className="relative flex min-h-117.25 flex-col items-center justify-center py-15 text-center md:py-section">
				<div className="flex -space-x-2">
					{[1, 2, 3, 4].map((n) => (
						<span
							key={n}
							className="relative size-10 shrink-0 rounded-full after:absolute after:inset-0 after:rounded-full after:border-2 after:border-yellow"
						>
							<Image
								src={`/assets/photo-avatar-${n}.jpg`}
								alt=""
								width={80}
								height={80}
								sizes="40px"
								className="size-full rounded-full object-cover"
							/>
						</span>
					))}
				</div>
				<h2 className="mt-8 font-display text-[clamp(2.25rem,4.375vw,3.5rem)] leading-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight">
					What will you learn next?
				</h2>
				<p className="mt-4 text-base leading-6.5 text-muted md:mt-3.5 md:text-lg md:leading-7">
					Start with one course. Build from there.
				</p>
				<div className="mt-9.75 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-10">
					<Button href="#categories" variant="solid" size="xl">
						Explore all courses
					</Button>
					<Button href="#contact" variant="outline" size="xl">
						Join Luma
					</Button>
				</div>
			</SectionContainer>
		</section>
	);
}

import type { ComponentProps } from "react";
import { cx } from "../utils/cx";

// Figma typography. Components are pure: margins/widths live at the usage site.
export function H1({ className, ...props }: ComponentProps<"h1">) {
	return (
		<h1
			className={cx(
				"font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-extrabold tracking-tight xl:leading-17.5",
				className,
			)}
			{...props}
		/>
	);
}

export function H2({ className, ...props }: ComponentProps<"h2">) {
	return (
		<h2
			className={cx(
				"font-display text-[clamp(2rem,4vw,3rem)] leading-[clamp(2.25rem,4.667vw,3.5rem)] font-extrabold tracking-tight",
				className,
			)}
			{...props}
		/>
	);
}

export function H3({ className, ...props }: ComponentProps<"h3">) {
	return (
		<h3
			className={cx(
				"font-display text-xl leading-7 font-bold md:leading-8",
				className,
			)}
			{...props}
		/>
	);
}

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
	return (
		<p
			className={cx(
				"text-xs font-semibold uppercase tracking-[0.12em]",
				className,
			)}
			{...props}
		/>
	);
}

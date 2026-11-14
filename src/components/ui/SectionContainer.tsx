import type { ComponentProps } from "react";

export function SectionContainer({
	className,
	...props
}: ComponentProps<"div">) {
	return (
		<div
			{...props}
			className={[
				"mx-auto w-full max-w-300 px-5 sm:max-w-145 md:max-w-300 md:px-10",
				className,
			]
				.filter(Boolean)
				.join(" ")}
		/>
	);
}

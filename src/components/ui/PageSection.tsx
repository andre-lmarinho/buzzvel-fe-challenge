import type { ComponentProps } from "react";
import { cx } from "../utils/cx";

export function PageSection({
	className,
	...props
}: ComponentProps<"section">) {
	return (
		<section
			className={cx("relative page-gutters gap-10 py-15 md:py-25", className)}
			{...props}
		/>
	);
}

import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

// Variants mirror the pills in the Figma frames: `soft` is the blue number
// tag, `pill` the inline highlight inside floating cards, `outline` the
// neutral chip, `label` the yellow uppercase tag. `outline` leaves text color
// open — it is white on dark surfaces.
export const badgeVariants = cva("inline-flex items-center", {
	variants: {
		variant: {
			soft: "h-6 rounded-md bg-blue-soft px-2 font-display text-xs font-bold text-blue",
			pill: "rounded-md bg-blue-soft px-1 text-sm leading-6 font-bold text-blue",
			outline: "rounded-lg border border-line px-3.5 py-1.5 text-sm leading-6",
			label:
				"rounded-lg bg-yellow px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink",
		},
	},
	defaultVariants: { variant: "soft" },
});

export function Badge({
	variant,
	className,
	...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
	return <span className={badgeVariants({ variant, className })} {...props} />;
}

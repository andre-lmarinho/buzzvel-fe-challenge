import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";

// Each variant owns its classes (no overlap with the base) — CVA only
// concatenates, it does not resolve conflicting utilities.
export const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-lg text-sm",
	{
		variants: {
			variant: {
				solid: "bg-blue text-white font-bold hover:opacity-90",
				ghost: "text-ink font-bold",
				outline:
					"border border-line bg-white text-ink font-bold hover:bg-white/60",
				link: "text-muted hover:text-blue",
				yellow: "bg-yellow text-ink font-bold hover:opacity-90",
				"link-inverse": "text-white font-bold hover:opacity-90",
			},
			size: {
				sm: "h-11 px-5",
				lg: "h-12",
				xl: "h-13 px-7",
			},
		},
	},
);

type ButtonProps = Omit<ComponentProps<"button">, "type"> &
	VariantProps<typeof buttonVariants> & {
		href?: string;
		type?: "submit" | "button";
	};

export function Button({
	className,
	variant,
	size,
	href,
	type,
	...props
}: ButtonProps) {
	const classes = buttonVariants({ variant, size, className });
	// Without href it is a form button; HTML defaults to type="submit".
	if (href) {
		return (
			<Link
				href={href}
				className={classes}
				{...(props as Omit<ComponentProps<typeof Link>, "href">)}
			/>
		);
	}
	return <button type={type ?? "submit"} className={classes} {...props} />;
}

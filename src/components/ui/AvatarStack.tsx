import { cva, type VariantProps } from "class-variance-authority";
import Image, { type StaticImageData } from "next/image";
import type { ComponentProps } from "react";
import avatar1 from "../../../public/assets/photo-avatar-1.jpg";
import avatar2 from "../../../public/assets/photo-avatar-2.jpg";
import avatar3 from "../../../public/assets/photo-avatar-3.jpg";
import avatar4 from "../../../public/assets/photo-avatar-4.jpg";
import { cx } from "../utils/cx";

// Static imports: the build fails if an avatar file is missing or renamed.
const STACKS = {
	3: [avatar1, avatar2, avatar3],
	4: [avatar1, avatar2, avatar3, avatar4],
} as const satisfies Record<number, readonly StaticImageData[]>;

// Caption figure, same number the marketing copy uses.
const LEARNERS = "24,000+";

const avatarVariants = cva("relative shrink-0 rounded-full ring-2", {
	variants: {
		ring: {
			cream: "ring-cream",
			yellow: "ring-yellow",
		},
		size: {
			sm: "size-7 not-first:-ml-1.25",
			md: "size-9.5 not-first:-ml-1.5",
		},
	},
	defaultVariants: { size: "sm", ring: "cream" },
});

type Props = ComponentProps<"div"> &
	VariantProps<typeof avatarVariants> & {
		// Typed to the stacks the assets support: an invalid count does not compile.
		count: keyof typeof STACKS;
		// Toggles the hardcoded social-proof line ("Trusted by … learners").
		caption?: boolean;
	};

export function AvatarStack({
	count,
	size,
	ring,
	caption,
	className,
	...props
}: Props) {
	return (
		<div
			className={cx(
				"flex",
				caption ? "items-center gap-4.5" : undefined,
				className,
			)}
			{...props}
		>
			<div className="flex">
				{STACKS[count].map((avatar) => (
					<span key={avatar.src} className={avatarVariants({ size, ring })}>
						<Image
							src={avatar}
							alt=""
							sizes="40px"
							className="size-full rounded-full object-cover"
						/>
					</span>
				))}
			</div>
			{caption ? (
				<p className="text-sm text-muted">
					<strong className="font-bold text-ink">Trusted by {LEARNERS}</strong>{" "}
					learners
				</p>
			) : null}
		</div>
	);
}

import { type ComponentProps, useId } from "react";

export function Input({
	label,
	...props
}: Omit<ComponentProps<"input">, "className"> & { label: string }) {
	const id = useId();
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="block text-sm leading-6 font-bold">
				{label}
			</label>
			<input
				id={id}
				className="w-full rounded-lg border border-line bg-cream px-4 text-sm leading-6 text-ink placeholder:text-muted h-12"
				{...props}
			/>
		</div>
	);
}

export function Textarea({
	label,
	...props
}: Omit<ComponentProps<"textarea">, "className"> & { label: string }) {
	const id = useId();
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id} className="block text-sm leading-6 font-bold">
				{label}
			</label>
			<textarea
				id={id}
				className="w-full rounded-lg border border-line bg-cream px-4 text-sm leading-6 text-ink placeholder:text-muted h-25 resize-none py-3.5 md:h-30"
				{...props}
			/>
		</div>
	);
}

import { Button } from "@nextui-org/react";
import { AddIcon, ListIcon, PlayIcon, BugIcon } from "../helpers/icons";

export default function FooterComponent() {
	return (
		<footer class="w-full mx-auto px-4 py-2 md:flex md:items-center md:justify-between">
			<Button
				isIconOnly
				variant="bordered"
				aria-label="Zoom in"
				size="md"
				radius="sm"
				className={`w-[4rem]`}
			>
				{<BugIcon size={"1.2rem"} />}
			</Button>
			<ul class="flex gap-2 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<Button
						isIconOnly
						variant="bordered"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={`rotate-180 w-[4rem]`}
					>
						{<PlayIcon size={"1.2rem"} />}
					</Button>
				</li>
				<li>
					<Button
						variant="bordered"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={``}
					>
						<ListIcon size="1.2rem" /> Challenge list
					</Button>
				</li>
				<li>
					<Button
						isIconOnly
						variant="bordered"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={`w-[4rem]`}
					>
						{<PlayIcon size={"1.2rem"} />}
					</Button>
				</li>
			</ul>
			<ul class="flex gap-2 flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
				<li>
					<Button
						variant="bordered"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={``}
					>
						{<PlayIcon size={"1.2rem"} />} Run
					</Button>
				</li>
				<li>
					<Button
						variant="bordered"
						aria-label="Zoom in"
						size="md"
						radius="sm"
						className={``}
					>
						Submit
					</Button>
				</li>
			</ul>
		</footer>
	);
}

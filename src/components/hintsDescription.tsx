import { Accordion, AccordionItem } from "@nextui-org/react";
import challenges from "../data/challenges.json";

export default function HintsDescription() {
	const hints = challenges.uncompress.hints;

	return (
		<div>
			<h3>Hints</h3>
			<Accordion variant="splitted" selectionMode="multiple" className="mb-2 px-0 dark:text-neutral-400">
				<AccordionItem
					key="1"
					aria-label="Hint 1"
					title="Hint 1"
					className={" !shadow-none"}
				>
					{hints.hint_1}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Hint 2"
					title="Hint 2"
					className={" !shadow-none"}
				>
					{hints.hint_2}
				</AccordionItem>
				<AccordionItem
					key="3"
					aria-label="Hint 3"
					title="Hint 3"
					className={" !shadow-none"}
				>
					{hints.hint_3}
				</AccordionItem>
				<AccordionItem
					key="4"
					aria-label="Optimal Space & Time Complexity"
					title="Optimal Space & Time Complexity"
					className={" !shadow-none"}
				>
					{hints.Optimal_Space__Time_Complexity}
				</AccordionItem>
			</Accordion>
		</div>
	);
}

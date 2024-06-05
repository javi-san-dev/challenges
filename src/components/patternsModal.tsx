import {
	BreadcrumbItem,
	Breadcrumbs,
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { HelpInfo } from "../data/patterns";
import { dataStructureList } from "../helpers/constants";
import { HelpIcon, ListIcon, PlayIcon } from "../helpers/icons";

export default function PatternsModal() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [content, setContent] = useState(null);
	const [currentFunction, setCurrentFunction] = useState(null);
	const [title, setTitle] = useState();

	useEffect(() => {
		setInitialComponent();
	}, []);

	const setInitialComponent = () => {
		setTitle("");
		setCurrentFunction(["HelpInfo"]);
		setContent(<HelpInfo updateComponent={updateComponent} />);
	};

	const updateComponent = (functionName, goBackFlag) => {
		if (functionName === undefined) return;
		const importSpecificComponent = async () => {
			const module = await import("../data/patterns");
			const Element: JSX.Element = module[functionName] as JSX.Element;
			setContent(<Element updateComponent={updateComponent} />);
			setCurrentFunction((currArray) => {
				goBackFlag ? currArray.pop() : currArray.push(functionName);
				const lasValue = currArray[currArray.length - 2];
				if (currArray.length === 1) {
					setTitle("");
				} else {
					setTitle(
						<Button
							variant="flat"
							aria-label="go back"
							size="md"
							radius="sm"
							className=""
							onClick={() => updateComponent(lasValue, true)}
						>
							{"< Go back"}
						</Button>,
					);
				}
				return currArray;
			});
		};
		void importSpecificComponent();
	};

	return (
		<>
			<Button variant="flat" aria-label="Zoom in" size="md" radius="sm" className={""} onPress={onOpen}>
				{<HelpIcon size={"1.2rem"} />} Help
			</Button>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				onClose={() => setInitialComponent()}
				hideCloseButton
				size="xl"
				scrollBehavior="inside"
				classNames={{
					base: "bg-white dark:bg-black border border-neutral-500 dark:border-neutral-800",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader className="flex flex-col gap-1">
								{" "}
								<Breadcrumbs>
									{currentFunction.map((element) => (
										<BreadcrumbItem key={element}>{element}</BreadcrumbItem>
									))}
								</Breadcrumbs>
							</ModalHeader>
							<ModalBody>{content}</ModalBody>
							<ModalFooter>{title}</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

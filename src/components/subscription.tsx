import { Button, Modal, ModalBody, ModalContent, Spinner, useDisclosure } from "@nextui-org/react";
import { signIn } from "auth-astro/client";
import { useEffect, useState } from "react";
import { GitHubIcon, LockIcon } from "../helpers/icons";

export default function Subscription() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		onOpen();
	}, []);

	const googleLogIn = () => {
		setIsLoading(true);
		signIn("google");
	};

	return (
		<>
			<Modal
				isOpen={isOpen}
				size="md"
				hideCloseButton
				// onOpenChange={onOpenChange}
				classNames={{
					base: "bg-white dark:bg-black border border-neutral-500 dark:border-neutral-800",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody className=" flex items-center text-center p-8">
								<LockIcon size="8rem" />
								<p className="mb-4 text-neutral-500 font-extralight text-large">
									To access this question, <span className="underlineAnimation font-bold text-black dark:text-white cursor-pointer">purchase</span> a premium subscription. If you already have a subscription,
									please <span className="underlineAnimation font-bold text-black dark:text-white cursor-pointer">Log in</span> to continue.
								</p>
								{isLoading && <Spinner size="lg" />}
								
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

import { Button, Modal, ModalBody, ModalContent, Spinner, useDisclosure } from "@nextui-org/react";
import { signIn } from "auth-astro/client";
import { useEffect, useState } from "react";
import { GitHubIcon, GoogleIcon } from "../helpers/icons";

export default function Protected() {
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
				size="sm"
				hideCloseButton
				// onOpenChange={onOpenChange}
				classNames={{
					base: "bg-white dark:bg-black border border-neutral-500 dark:border-neutral-800",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalBody className=" text-center p-8">
								<h1 className=" font-bold text-3xl">Sign In</h1>
								<p className="mb-4 text-neutral-500 font-extralight">
									sign in to run your code and save your progress. With one of the following:
								</p>
								{isLoading && <Spinner size="lg" />}
								{!isLoading && (
									<div className="flex flex-col">
										<Button
											color="primary"
											radius="sm"
											className="bg-black dark:bg-white text-white dark:text-black font-bold mb-4"
											onClick={() => googleLogIn()}
										>
											<span className="text-white">
												<GoogleIcon size="1.5rem" />
											</span>
											Google
										</Button>
										<Button
											color="primary"
											radius="sm"
											className="bg-black dark:bg-white text-white dark:text-black font-bold mb-4"
											onPress={onClose}
										>
											<span className="text-white dark:text-black">
												<GitHubIcon size="1.8rem" />
											</span>
											GitHub
										</Button>
									</div>
								)}
							</ModalBody>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

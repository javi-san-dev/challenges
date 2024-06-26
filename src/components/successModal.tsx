import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../helpers/dataContext";
import { TickAnimation } from "../helpers/icons";

export default function SuccessModal({ refName, user }) {
	const { data, updateData } = useContext(DataContext);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			if (data.passesAllTests) onOpen();
		}, 2000);
	}, [data.passesAllTests]);

	const submitHandler = async () => {
		setIsLoading(true);
		const params = new URLSearchParams(window.location.search);
		const URIcode = params.get("code") as string;
		const code = decodeURIComponent(URIcode) as string;
		const response = await fetch("/api/submitCode.json", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				code: code,
				codeLanguage: data.codeLanguage,
				challengeName: refName,
			}),
		});
		const result = await response.json();
		const updateSubmittedList = data.submittedList;
		updateSubmittedList.push(refName);
		updateData({ submittedCode: result, submittedList: updateSubmittedList });
		setIsLoading(false);
		setIsSubmitSuccess(true);
	};

	function redirectToPrice(challengeRefName) {
		navigate("/price");
	}

	return (
		<>
			<Modal
				backdrop="opaque"
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				classNames={{
					base: "bg-white dark:bg-black border border-neutral-500 dark:border-neutral-800",
				}}
				motionProps={{
					variants: {
						enter: {
							y: 0,
							opacity: 1,
							transition: {
								duration: 0.3,
								ease: "easeOut",
							},
						},
						exit: {
							y: -20,
							opacity: 0,
							transition: {
								duration: 0.2,
								ease: "easeIn",
							},
						},
					},
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader />
							<ModalBody>
								<TickAnimation />
								{user.isPremium ? (
									<p className="text-2xl text-center">
										<span className="title">Well Done!</span> Submit your code to save progression.
									</p>
								) : (
									<p className="text-2xl text-center">
										<span className="title">Well Done!</span> Purchase to save progression.
									</p>
								)}
							</ModalBody>
							<ModalFooter>
								<div className="backgroundStyle rounded-lg">
									{isSubmitSuccess ? (
										<Button className={"bg-black"} radius="sm">
											Next Challenge
										</Button>
									) : user.isPremium ? (
										<Button isLoading={!!isLoading} className={"bg-black"} radius="sm" onClick={submitHandler}>
											Submit
										</Button>
									) : (
										<Button className={"bg-black"} radius="sm" onClick={redirectToPrice}>
											Purchase
										</Button>
									)}
								</div>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

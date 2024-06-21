import {
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Spinner,
	useDisclosure,
} from "@nextui-org/react";
import { decode } from "js-base64";
import isEqual from "lodash.isequal";
import sortBy from "lodash.sortby";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import { PlayIcon, TickAnimation } from "../helpers/icons";
import type { sessionType, testCasesType } from "../helpers/types";
import { serviceWorker } from "../helpers/workerService";
import SignIn from "./signIn";

type componentProps = {
	refName: string;
	session: sessionType;
};

export default function SubmitCode({ session, refName }: componentProps) {
	const { data, updateData } = useContext(DataContext);
	const [loadingButton, setLoadingButton] = useState(false);
	const [openSubmitModal, setOpenSubmitModal] = useState(false);
	const [openSignInModal, setOpenSignInModal] = useState(false);

	const submitCode = () => {
		if (session === null) {
			setOpenSignInModal((openModal) => !openModal);
			return;
		}
		setOpenSubmitModal((openModal) => !openModal);
	};

	return (
		<>
		<div className="backgroundStyle rounded-lg">
			<Button
				isLoading={!!loadingButton}
				variant="flat"
				aria-label="Zoom in"
				size="md"
				radius="sm"
				className={"text-white"}
				onClick={submitCode}
			>
				Submit
			</Button>
			</div>
			{session !== null && <SubmitModal openModal={openSubmitModal} refName={refName} />}
			{session === null && <SignIn openModal={openSignInModal} />}
		</>
	);
}

function SubmitModal({ openModal, refName }) {
	const { data, updateData } = useContext(DataContext);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isFirstRender, setIsFirstRender] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

	useEffect(() => {
		if (isFirstRender) {
			setIsFirstRender(false);
			return;
		}
		onOpen();
	}, [openModal]);

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

	return (
		<>
			<Modal
				isOpen={isOpen}
				onOpenChange={onOpenChange}
				classNames={{
					base: "bg-white dark:bg-black border border-neutral-500 dark:border-neutral-800",
				}}
			>
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader />
							<ModalBody>
								<div className="">
									{!isSubmitSuccess && (
										<p className="mb-6 text-neutral-500 font-light">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
											venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
										</p>
									)}
									{isSubmitSuccess && <TickAnimation />}
								</div>
								{!isLoading && !isSubmitSuccess && (
									<div className="backgroundStyle rounded-lg">
									<Button className={"bg-black"} radius="sm" onClick={submitHandler}>
										Submit
									</Button>
									</div>
								)}
								{isLoading && !isSubmitSuccess && <Spinner />}
							</ModalBody>
							<ModalFooter />
						</>
					)}
				</ModalContent>
			</Modal>
		</>
	);
}

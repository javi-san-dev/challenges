import { Button, useDisclosure } from "@nextui-org/react";
import { decode } from "js-base64";
import isEqual from "lodash.isequal";
import sortBy from "lodash.sortby";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../helpers/dataContext";
import { PlayIcon } from "../helpers/icons";
import type { sessionType, testCasesType } from "../helpers/types";
import { serviceWorker } from "../helpers/workerService";
import SignIn from "./signIn";

type componentProps = {
	refName: string;
	testCases: testCasesType;
	session: sessionType;
};

export default function SubmitCode({ session }: componentProps) {
	const { data, updateData } = useContext(DataContext);
	const [loadingButton, setLoadingButton] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const submitCode = () => {
		if (session === null) {
			setOpenModal((openModal) => !openModal);
			return;
		}
	};

	return (
		<>
			<Button
				isLoading={!!loadingButton}
				variant="flat"
				aria-label="Zoom in"
				size="md"
				radius="sm"
				className={" text-white dark:text-white bg-green-600 dark:bg-green-700"}
				onClick={submitCode}
			>
				Submit
			</Button>
			<SignIn openModal={openModal} />
		</>
	);
}

import {
	Chip,
	type ChipProps,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	Tooltip,
	User,
	getKeyValue,
} from "@nextui-org/react";
import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import challengeList from "../data/challengeList";
import challenges from "../data/challenges";
import { DataContext } from "../helpers/dataContext";
import { BugIcon, CheckIcon, ErrorIcon, JavaIcon, LockIcon, PythonIcon } from "../helpers/icons";

const columns = [
	{ name: "STATUS", uid: "status", sortable: true },
	{ name: "NAME", uid: "name", sortable: true },
	{ name: "LANGUAGES", uid: "lang", sortable: true },
	{ name: "DIFFICULTY", uid: "difficulty", sortable: true },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
	Easy: "success",
	Medium: "warning",
	Hard: "danger",
};

export default function TableChallenges({closeModal}) {
	const { data } = useContext(DataContext);
	const submittedList = data.submittedList;
	console.log(submittedList);
	const navigate = useNavigate();

	function handleClick(challengeRefName) {
		navigate(`/challenges/${titleToRef(challengeRefName)}`);
		closeModal()
	}
	const titleToRef = (title: string) => {
		return title
			.replace(/\s+/g, "") // remove spaces
			.replace(/^./, (match) => match.toLowerCase()); // replace first letter to lowercase
	};

	const renderCell = useCallback((challenge, columnKey: React.Key) => {
		const cellValue = challenge[columnKey];
		switch (columnKey) {
			case "status":
				return (
					<span>
						<LockIcon size="1.5rem" />
					</span>
				);
			case "name":
				return (
					<div className="flex items-center">
						<div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 mr-2">
							{submittedList.includes(titleToRef(challenge[0])) ? (
								<span className="text-green-600">
									<CheckIcon size="1.8rem" />
								</span>
							) : (
								<ErrorIcon size="1.8rem" />
							)}
						</div>
						<div>
							<h1>{challenge[0]}</h1>
							<span className="text-tiny text-default-500">
								<span className="text-black dark:text-white">{challenge[2]}</span> base algorithm
							</span>
						</div>
					</div>
				);
			case "lang":
				return (
					<div aria-labelledby=":r2ri:" className="mt-1 flex items-center gap-x-1">
						<span className="inline-flex items-center rounded bg-yellow-500 px-2 py-0.5 text-xs font-semibold text-black dark:bg-neutral-800 dark:text-yellow-500">
							JS
						</span>
						<span className="inline-flex items-center rounded bg-[#cccbcb] px-2 py-1 text-xs font-semibold text-white dark:bg-neutral-800 dark:text-[#3178c6]">
							<PythonIcon size="0.8rem" />
						</span>
						<span className="inline-flex items-center rounded bg-[#f1adad] px-2 py-0.5 text-xs font-semibold text-white dark:bg-neutral-800 dark:text-[#3178c6]">
							<JavaIcon size="1rem" />
						</span>
						<span className="inline-flex items-center rounded bg-[#5d5d5d] px-2 py-0.5 text-xs font-semibold text-white dark:bg-neutral-800 dark:text-[#3178c6]">
							C++
						</span>
					</div>
				);
			case "difficulty":
				return (
					<Chip radius="sm" className="capitalize" color={statusColorMap[challenge[1]]} size="sm" variant="flat">
						{challenge[1]}
					</Chip>
				);
			default:
				return cellValue;
		}
	}, []);

	return (
		<Table
			aria-label="Example table with custom cells"
			classNames={{
				wrapper: "bg-white dark:bg-black p-0 shadow-none",
				th: "bg-transparent text-default-500 border-b border-divider",
			}}
		>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={challengeList.All.All}>
				{(item) => (
					<TableRow
						key={item[0]}
						className="cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900"
						onClick={() => handleClick(item[0])}
					>
						{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}

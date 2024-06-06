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
import React from "react";
import { useNavigate } from "react-router-dom";
import challengeList from "../data/challengeList";
import challenges from "../data/challenges";
import { BugIcon, ErrorIcon, JavaIcon, PythonIcon } from "../helpers/icons";

const columns = [
	{ name: "ID", uid: "id", sortable: true },
	{ name: "NAME", uid: "name", sortable: true },
	{ name: "SUPPORTED LANG", uid: "lang", sortable: true },
	{ name: "DIFFICULTY", uid: "difficulty", sortable: true },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
	Easy: "success",
	Medium: "warning",
	Hard: "danger",
};

export default function TableChallenges() {
	const navigate = useNavigate();

	function handleClick(challengeRefName) {
		navigate(`/challenge/${titleToRef(challengeRefName)}`);
	}
	const titleToRef = (title: string) => {
		return title
			.replace(/\s+/g, "") // remove spaces
			.replace(/^./, (match) => match.toLowerCase()); // replace first letter to lowercase
	};

	const renderCell = React.useCallback((challenge, columnKey: React.Key) => {
		const cellValue = challenge[columnKey];
		switch (columnKey) {
			case "id":
				return <span>1</span>;
			case "name":
				return (
					<div className="flex items-center">
						<div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 mr-2">
							<ErrorIcon size="1.8rem" />
						</div>
						<div>
							<h1>{challenge[0]}</h1>
							<span class="text-tiny text-default-500">
								<span className="text-black dark:text-white">{challenge[2]}</span> base algorithm
							</span>
						</div>
					</div>
				);
			case "lang":
				return (
					<div aria-labelledby=":r2ri:" className="mt-1 flex items-center gap-x-2">
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
					<Chip className="capitalize" color={statusColorMap[challenge[1]]} size="sm" variant="flat">
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

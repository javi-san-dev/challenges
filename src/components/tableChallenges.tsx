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
import { BugIcon, ErrorIcon, JavaIcon, PythonIcon } from "../helpers/icons";

const columns = [
	{ name: "ID", uid: "id", sortable: true },
	{ name: "NAME", uid: "name", sortable: true },
	// { name: "AGE", uid: "age", sortable: true },
	{ name: "SUPPORTED LANG", uid: "role", sortable: true },
	// { name: "TEAM", uid: "team" },
	// { name: "EMAIL", uid: "email" },
	{ name: "DIFFICULTY", uid: "status", sortable: true },
	// { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
	{ name: "Active", uid: "active" },
	{ name: "Paused", uid: "paused" },
	{ name: "Vacation", uid: "vacation" },
];

const users = [
	{
		id: 1,
		name: "Uncompress",
		role: "CEO",
		team: "String",
		status: "active",
		age: "29",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		email: "JS Python Java C++",
	},
	{
		id: 2,
		name: "Zoey Lang",
		role: "Tech Lead",
		team: "Development",
		status: "paused",
		age: "25",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
		email: "zoey.lang@example.com",
	},
	{
		id: 3,
		name: "Jane Fisher",
		role: "Sr. Dev",
		team: "Development",
		status: "active",
		age: "22",
		avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
		email: "jane.fisher@example.com",
	},
	{
		id: 4,
		name: "William Howard",
		role: "C.M.",
		team: "Marketing",
		status: "vacation",
		age: "28",
		avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
		email: "william.howard@example.com",
	},
	{
		id: 5,
		name: "Kristen Copper",
		role: "S. Manager",
		team: "Sales",
		status: "active",
		age: "24",
		avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
		email: "kristen.cooper@example.com",
	},
	{
		id: 6,
		name: "Brian Kim",
		role: "P. Manager",
		team: "Management",
		age: "29",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
		email: "brian.kim@example.com",
		status: "Active",
	},
	{
		id: 7,
		name: "Michael Hunt",
		role: "Designer",
		team: "Design",
		status: "paused",
		age: "27",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
		email: "michael.hunt@example.com",
	},
	{
		id: 8,
		name: "Samantha Brooks",
		role: "HR Manager",
		team: "HR",
		status: "active",
		age: "31",
		avatar: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
		email: "samantha.brooks@example.com",
	},
	{
		id: 9,
		name: "Frank Harrison",
		role: "F. Manager",
		team: "Finance",
		status: "vacation",
		age: "33",
		avatar: "https://i.pravatar.cc/150?img=4",
		email: "frank.harrison@example.com",
	},
	{
		id: 10,
		name: "Emma Adams",
		role: "Ops Manager",
		team: "Operations",
		status: "active",
		age: "35",
		avatar: "https://i.pravatar.cc/150?img=5",
		email: "emma.adams@example.com",
	},
	{
		id: 11,
		name: "Brandon Stevens",
		role: "Jr. Dev",
		team: "Development",
		status: "active",
		age: "22",
		avatar: "https://i.pravatar.cc/150?img=8",
		email: "brandon.stevens@example.com",
	},
	{
		id: 12,
		name: "Megan Richards",
		role: "P. Manager",
		team: "Product",
		status: "paused",
		age: "28",
		avatar: "https://i.pravatar.cc/150?img=10",
		email: "megan.richards@example.com",
	},
	{
		id: 13,
		name: "Oliver Scott",
		role: "S. Manager",
		team: "Security",
		status: "active",
		age: "37",
		avatar: "https://i.pravatar.cc/150?img=12",
		email: "oliver.scott@example.com",
	},
	{
		id: 14,
		name: "Grace Allen",
		role: "M. Specialist",
		team: "Marketing",
		status: "active",
		age: "30",
		avatar: "https://i.pravatar.cc/150?img=16",
		email: "grace.allen@example.com",
	},
	{
		id: 15,
		name: "Noah Carter",
		role: "IT Specialist",
		team: "I. Technology",
		status: "paused",
		age: "31",
		avatar: "https://i.pravatar.cc/150?img=15",
		email: "noah.carter@example.com",
	},
	{
		id: 16,
		name: "Ava Perez",
		role: "Manager",
		team: "Sales",
		status: "active",
		age: "29",
		avatar: "https://i.pravatar.cc/150?img=20",
		email: "ava.perez@example.com",
	},
	{
		id: 17,
		name: "Liam Johnson",
		role: "Data Analyst",
		team: "Analysis",
		status: "active",
		age: "28",
		avatar: "https://i.pravatar.cc/150?img=33",
		email: "liam.johnson@example.com",
	},
	{
		id: 18,
		name: "Sophia Taylor",
		role: "QA Analyst",
		team: "Testing",
		status: "active",
		age: "27",
		avatar: "https://i.pravatar.cc/150?img=29",
		email: "sophia.taylor@example.com",
	},
	{
		id: 19,
		name: "Lucas Harris",
		role: "Administrator",
		team: "Information Technology",
		status: "paused",
		age: "32",
		avatar: "https://i.pravatar.cc/150?img=50",
		email: "lucas.harris@example.com",
	},
	{
		id: 20,
		name: "Mia Robinson",
		role: "Coordinator",
		team: "Operations",
		status: "active",
		age: "26",
		avatar: "https://i.pravatar.cc/150?img=45",
		email: "mia.robinson@example.com",
	},
];

const statusColorMap: Record<string, ChipProps["color"]> = {
	active: "success",
	paused: "danger",
	vacation: "warning",
};

export default function TableChallenges() {
	const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
		const cellValue = user[columnKey as keyof User];

		switch (columnKey) {
			case "name":
				return (
					<div className="flex items-center">
						<div className="bg-neutral-100 dark:bg-neutral-900 rounded-xl p-1 mr-2">
							<ErrorIcon size="1.8rem" />
						</div>
						<div>
							<h1>Uncompress</h1>
							<span class="text-tiny text-default-500"><span className="text-black dark:text-white">String</span> base algorithm</span>
						</div>
					</div>
					// <User avatarProps={{ radius: "lg", src: user.avatar }} description={user.email} name={cellValue}>
					// 	{user.email}
					// </User>
				);
			case "role":
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
			case "status":
				return (
					<Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
						{cellValue}
					</Chip>
				);
			case "actions":
				return (
					<div className="relative flex items-center gap-2">
						<Tooltip content="Details">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<BugIcon />
							</span>
						</Tooltip>
						<Tooltip content="Edit user">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<BugIcon />
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Delete user">
							<span className="text-lg text-danger cursor-pointer active:opacity-50">
								<BugIcon />
							</span>
						</Tooltip>
					</div>
				);
			default:
				return cellValue;
		}
	}, []);

	return (
		<Table
			aria-label="Example table with custom cells"
			classNames={{ wrapper: "bg-white dark:bg-black p-0 shadow-none", th: "bg-transparent text-default-500 border-b border-divider" }}
			
		>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={users}>
				{(item) => (
					<TableRow key={item.id} className="cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-900">{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
				)}
			</TableBody>
		</Table>
	);
}

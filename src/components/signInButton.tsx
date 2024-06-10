import {
	Avatar,
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	User,
} from "@nextui-org/react";
import { signIn, signOut } from "auth-astro/client";
import type { userType } from "../../helpers/types.ts";
import { SignInIcon } from "../helpers/icons";

interface ComponentProp {
	currentTheme: {
		bg: string;
		bg_: string;
		border: string;
	};
	user: userType | null;
}

export default function SignInButton({ user }: ComponentProp) {
	if (user !== null) {
		return (
			<Dropdown
				radius="sm"
				classNames={{
					base: "before:bg-default-200", // change arrow background
					content: "p-0 border-small border-divider bg-background",
				}}
			>
				<DropdownTrigger>
					<Avatar
						isBordered
						as="button"
						className="transition-transform items-center"
						color="secondary"
						name="Jason Hughes"
						size="sm"
						src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
					/>
				</DropdownTrigger>
				<DropdownMenu
					aria-label="Custom item styles"
					disabledKeys={["profile"]}
					className="p-3"
					itemClasses={{
						base: [
							"rounded-md",
							"text-default-500",
							"transition-opacity",
							"data-[hover=true]:text-foreground",
							"data-[hover=true]:bg-default-100",
							"dark:data-[hover=true]:bg-default-50",
							"data-[selectable=true]:focus:bg-default-50",
							"data-[pressed=true]:opacity-70",
							"data-[focus-visible=true]:ring-default-500",
						],
					}}
				>
					<DropdownSection aria-label="Profile & Actions" showDivider>
						<DropdownItem isReadOnly key="profile" className="h-14 gap-2 opacity-100">
							<User
								name="Junior Garcia"
								description="@jrgarciadev"
								classNames={{
									name: "text-default-600",
									description: "text-default-500",
								}}
								avatarProps={{
									size: "sm",
									src: "https://avatars.githubusercontent.com/u/30373425?v=4",
								}}
							/>
						</DropdownItem>
						<DropdownItem key="dashboard">Dashboard</DropdownItem>
						<DropdownItem key="settings">Settings</DropdownItem>
						<DropdownItem key="new_project">New Project</DropdownItem>
					</DropdownSection>

					<DropdownSection aria-label="Preferences" showDivider>
						<DropdownItem key="quick_search" shortcut="⌘K">
							Quick search
						</DropdownItem>
						<DropdownItem
							isReadOnly
							key="theme"
							className="cursor-default"
							endContent={
								<select
									className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
									id="theme"
									name="theme"
								>
									<option>System</option>
									<option>Dark</option>
									<option>Light</option>
								</select>
							}
						>
							Theme
						</DropdownItem>
					</DropdownSection>

					<DropdownSection aria-label="Help & Feedback">
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem key="logout" onClick={() => signOut("google")}>
							Log Out
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>
		);
	}

	return (
		<Button
			variant="flat"
			aria-label="sign in"
			size="md"
			radius="sm"
			className={"border border-cyan-400 text-cyan-400 bg-transparent"}
			onClick={() => signIn("google")}
		>
			<SignInIcon />
			Sign in
		</Button>
	);
}

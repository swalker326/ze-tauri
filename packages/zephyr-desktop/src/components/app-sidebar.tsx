import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
				<h1>Zephyr Cloud</h1>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<h2>Applications</h2>
					<ul className="ml-2">
						<li>Host</li>
						<li>Settings</li>
						<li>Login</li>
					</ul>
				</SidebarGroup>
				<SidebarGroup />
			</SidebarContent>
			<SidebarFooter />
		</Sidebar>
	);
}

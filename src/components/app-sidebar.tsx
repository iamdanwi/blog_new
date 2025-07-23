import { FilePenLine, Home, LogOut, Settings, Rss } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";


const items = [
  {
    title: "Home",
    url: "/author/dashboard",
    icon: Home,
  },
  {
    title: "Editor",
    url: "/author/editor",
    icon: FilePenLine,
  },
  {
    title: "All Posts",
    url: "/author/all-posts",
    icon: Rss,
  },
  {
    title: "Settings",
    url: "/author/settings",
    icon: Settings,
  },

  {
    title: "Logout",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="space-y-7">
          <SidebarGroupLabel className="font-dm-serif text-2xl">Blog.</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

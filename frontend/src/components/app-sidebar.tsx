"use client";

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
import axios from "axios";

const items = [
  {
    title: "Home",
    url: "/me/dashboard",
    icon: Home,
  },
  {
    title: "Editor",
    url: "/me/editor",
    icon: FilePenLine,
  },
  {
    title: "All Posts",
    url: "/me/all-posts",
    icon: Rss,
  },
  {
    title: "Settings",
    url: "/me/settings",
    icon: Settings,
  },
  {
    title: "Logout",
    url: null,
    icon: LogOut,
  },
];

export function AppSidebar() {
  const handleLogout = async () => {
    try {
      const res = await axios.post("/api/auth/logout");
      if (res.status === 200) {
        window.location.href = "/login";
      }
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup className="space-y-7">
          <SidebarGroupLabel className="font-dm-serif text-2xl">
            Blog.
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.title === "Logout" ? (
                    <SidebarMenuButton
                      onClick={handleLogout}
                      className="text-red-600 hover:text-red-800 cursor-pointer"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link href={item.url!}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

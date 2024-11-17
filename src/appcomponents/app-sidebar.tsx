import { Home, Inbox, Settings, User } from "lucide-react";
import { Login } from "./login";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
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

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
];

export function AppSidebar() {
  const { authToken } = useAuth();

  return (
    <Sidebar >
      <SidebarContent className="mt-20">
        <SidebarGroup>
          <SidebarGroupLabel>ScheduleWise</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu >
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mb-5">
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {!authToken && (
          <SidebarGroup className="mt-40">
            <div
              style={{
                marginTop: "auto",
                padding: "1rem",
                borderTop: "1px solid #ddd",
              }}
            >
              <Login />
            </div>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}

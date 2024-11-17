import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/appcomponents/app-sidebar";
export default function Layout() {
  return (
    <SidebarProvider >
      <AppSidebar />
      <main>
        <SidebarTrigger className="absolute fixed top-4 left-4 z-20" />
      </main>
    </SidebarProvider>
  );
}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
// import { AppSidebar } from "@/appcomponents/app-sidebar"

// function App() {
 
  
// }

// export default App
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/appcomponents/app-sidebar";
import { Navbar} from "@/appcomponents/app-navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
   <Navbar />
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    </>
  )
}

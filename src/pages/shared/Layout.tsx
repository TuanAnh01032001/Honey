import { Footer, Header, SocialSidebar } from "@/components"
import { Outlet } from "react-router-dom"

export const Layout = () => {

    return(
        <div className="flex flex-col min-h-screen">
            <header> 
                <Header/> 
            </header>
            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
                <Outlet/>
            </main>
            <SocialSidebar/>
           <footer>
                <Footer/>
           </footer>
        </div>
    )
}
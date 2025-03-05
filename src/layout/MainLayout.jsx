import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";
import { UserContextProvider } from "../context/userContext";
import { Footer } from "../components/Footer/Footer";


export function MainLayout () {
    return (
        <>
        <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
        </UserContextProvider>
        </>
    )
}
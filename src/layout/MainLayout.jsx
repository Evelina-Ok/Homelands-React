import { Outlet } from "react-router";
import { FrontPage } from "../pages/FrontPage";
import { Header } from "../components/Header/Header";
import { UserContextProvider } from "../context/userContext";


export function MainLayout () {
    return (
        <>
        <UserContextProvider>
        <Header />
        <Outlet />
        </UserContextProvider>
        </>
    )
}
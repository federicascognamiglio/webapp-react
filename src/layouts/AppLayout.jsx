// Components
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default AppLayout
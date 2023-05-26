import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom"
import classes from "./Root.module.css"

const Root = () => {
    return (
        <div>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default Root
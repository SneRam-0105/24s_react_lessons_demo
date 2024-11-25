// The homepage or entry point of the app
import { Outlet } from "react-router-dom"; //Header will always be the same with this import
import Header from "../components/Header";

const Root = () => {
    return (<div>
        <Header />
        <Outlet />
    </div>
    );
};

export default Root;
import {FC, useEffect, useState} from "react";
import {Outlet, useLocation} from "react-router-dom";
import {Footer, Header} from "../components";
import Home from "../components/home/Home";

const MainLayout: FC = () => {
    const [trigerMainePage, setTrigerMainePage] = useState(true);
    const params = useLocation();

    useEffect(() => {
        if (params.pathname === '/') {
            setTrigerMainePage(true);
        } else {
            setTrigerMainePage(false);
        }

    }, [params]);



    return (
        <>
            <Header />
            {trigerMainePage && <Home />}
            {!trigerMainePage && <Outlet />}
            {!trigerMainePage && <Footer />}

        </>
    );
};

export {MainLayout};

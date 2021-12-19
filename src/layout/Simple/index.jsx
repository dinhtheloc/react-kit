import * as React from "react";
import Menu from '../../components/Menu';
import { Outlet } from "react-router-dom";

const SimpleLayout = () => {
    return (
        <div className="bg-white dark:bg-black px-4 sm:px-6 md:px-8">
            <Menu></Menu>
            <Outlet />
        </div>
    );
}

export default SimpleLayout;
import React, { FC } from "react";
import Navbar from "../Navbar/Navbar";


const Layout: FC = () => {

    return (
        //there is still a space between the top of the page and the navbar
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
        }}>
            <Navbar title="GymTracker" />
        </div>
    )
};

export default Layout;
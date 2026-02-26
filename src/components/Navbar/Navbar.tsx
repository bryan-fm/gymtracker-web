import React, { FC } from "react";

export type NavLink = {
    label: string;
};

export interface NavbarProps {
    title?: string;
}

const Navbar: FC<NavbarProps> = ({
    title,
}) => {

    return (
        <div style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            backgroundColor: "#f0f0f0",
        }}>
            <h1>{title}</h1>
        </div>
    )
};

export default Navbar;
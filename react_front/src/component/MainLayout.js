import React from "react";
import HeaderLogo from "./Header_Logo";
import Toolbar from "./Toolbar";
import HeaderSide from "./HeaderSide";
import { Outlet } from "react-router-dom";
import "../css/layoutContainer.css";

export default function MainLayout() {
    return (
        <div className="layout_container">
            <HeaderLogo />
            <Toolbar />
            <HeaderSide />
            <div className="layout_main_content">
                <Outlet />
            </div>
        </div>
    )
}
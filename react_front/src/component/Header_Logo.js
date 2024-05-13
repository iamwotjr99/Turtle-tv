import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../asset/logo_px_91_30.svg";
import "../css/headerLogo.css"

export default function HeaderLogo() {
    return (
        <h1 className="header_logo">
            <Link className="header_item" to={"/"}>
                <Logo></Logo>
            </Link>
        </h1>
    )
}
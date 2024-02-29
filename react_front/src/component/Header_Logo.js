import React from "react";
import { Link } from "react-router-dom";
import "../css/headerLogo.css"

export default function HeaderLogo() {
    return (
        <h1 className="header_logo">
            <Link className="header_item" to={"/"}>
                터틀TV
            </Link>
        </h1>
    )
}
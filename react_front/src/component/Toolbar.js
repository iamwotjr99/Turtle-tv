import React from "react"
import { ReactComponent as Search } from "../asset/search.svg";
import "../css/toolbar.css"

export default function Toolbar() {
    return (
        <div className="toolbar_container" style={{top: 0}}>
            <div className="search_container">
                <form role="search">
                    <div className="search_form">
                        <input className="search_input" placeholder="게임 제목, 스트리머 검색"></input>
                        <button type="submit" className="search_form_button">
                            <Search fill="#FFFFFF" width="20px" height="20px"/>
                        </button>
                    </div>
                </form>
            </div>
            <div className="toolbar_section"></div>
        </div>
    )
}
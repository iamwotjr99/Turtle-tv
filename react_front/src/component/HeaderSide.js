import React from "react";
import "../css/headerSide.css"
import { ReactComponent as MenuBuger } from "../asset/menu-burger.svg";
import { ReactComponent as Refresh } from "../asset/refresh.svg";
import { ReactComponent as Video } from "../asset/video.svg";
import { ReactComponent as Users} from "../asset/users.svg";
import { ReactComponent as Chat} from "../asset/chat.svg";
import { Link } from "react-router-dom";

export default function HeaderSide() {
    return (
        <div className="header_side_container">
            <div className="header_side_wrapper">
                <header className="header_side_area">
                    <button type="button" className="header_side_button">
                        <MenuBuger width="40" height="40"  fill="#347701"/>
                    </button>
                </header>
                <section className="header_side_section">
                    <div className="header_side_service">
                        <Link className="header_side_item" to={"/live"}>
                            <Video width="26px" height="26px"
                            fill="none" />
                            <span className="header_side_item_text">
                                전체<br/>라이브
                            </span>
                        </Link>
                        <Link className="header_side_item" to={"/video"}>
                            <Refresh width="26px" height="26px" fill="none"/>
                            <span className="header_side_item_text">다시보기</span>
                        </Link>
                        <Link className="header_side_item" to={"/community"}>
                            <Users width="26px" height="26px" fill="none"/>
                            <span className="header_side_item_text">커뮤니티</span>
                        </Link>
                        <Link className="header_side_item" to={"/chat"}>
                            <Chat width="26px" height="26px" fill="none"/>
                            <span className="header_side_item_text">대화하기</span>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}
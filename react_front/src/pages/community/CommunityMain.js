import React from "react";
import "../../css/community/main.css";
import BestPost from "./BestPost";
import AllPost from "./AllPost";
import { Link } from "react-router-dom";
import { ReactComponent as Add} from "../../asset/add.svg";

export default function CommunityMain() {
    return (
        <div className="community_container">
            <BestPost />
            <AllPost />
            <Link className="float_addNew" to={"/community/add"}>
                <Add width="45" height="45"/>
            </Link>
        </div>
    )
}
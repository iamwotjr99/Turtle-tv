import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { homeSessionRequest } from "../../service/homeService";
import Toolbar from "../../component/Toolbar";
import HomeBody from "./homeBody";
import HeaderLogo from "../../component/Header_Logo";
import HeaderSide from "../../component/HeaderSide";
import "../../css/homeMain.css"

export default function HomeMain() {

    const navigate = useNavigate();

    useEffect(() => {
        // 페이지가 렌더링 될 때 마다
        // 세션 쿠키 확인 함수 수행 후 있으면 home 화면 없으면 login 화면
        homeSessionRequest()
        .then((res) => {
            console.log(res);

            if(res === 401) {
                navigate('/login');
            }
        })
    }, )

    return (
        <div className="home_main">
            <HeaderLogo />
            <Toolbar />
            <HeaderSide />
            <HomeBody />
        </div>
    )
}
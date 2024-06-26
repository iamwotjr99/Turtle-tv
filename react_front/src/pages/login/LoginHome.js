import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginFail, loginSuccess } from "../../features/login/loginSlice";
import { loginRequest, signUpRequest } from "../../service/LoginService";
import {faFacebook, faGooglePlusG, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/loginHome.css";

export default function LoginHome() {

    const [inputId, setInputId] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputName, setInputName] = useState("")
    
    const [isRigtPanel, setIsRightPanel] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickLogin = (e) => {
        e.preventDefault();
        loginRequest(inputId, inputPassword).then((res) => {
            if(res) {
                dispatch(loginSuccess(res));
                console.log("Success! onClickLogin: :", res);
                navigate('/')
            } else {
                dispatch(loginFail(res));
                console.log("Fail.. onClickLogin: :", res);
            }
        })

        setInputId("")
        setInputPassword("")

    }

    const onClickSignUp = (e) => {
        e.preventDefault();
        signUpRequest(inputName, inputId, inputPassword).then((res) => {
            console.log("[onClickSignUp]: ", res);

            if(res === "Created") {
                alert("회원 가입 성공!")
                setIsRightPanel(false)
            }
        })

        setInputName("")
        setInputId("")
        setInputPassword("")
    }

    return (
        <div className={`container${isRigtPanel ? " right-panel-active" : ""}`} id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={onClickSignUp}>
                    <h1>회원 가입</h1>
                    <div className="social-container">
                        <FontAwesomeIcon className="social-btn" icon={faFacebook} />
                        <FontAwesomeIcon className="social-btn" icon={faGooglePlusG} />
                        <FontAwesomeIcon className="social-btn" icon={faLinkedin} />
                    </div>
                    <span>또는 나의 이메일로 등록하기</span>
                    <input type="text" placeholder="이름을 입력해주세요." name="name"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}/>
                    <input type="text" placeholder="아이디를 입력해주세요." name="id"
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}/>
                    <input type="password" placeholder="비밀번호를 입력해주세요." name="password"
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}/>
                    <button
                        onClick={() => setIsRightPanel(true)}>
                            회원 가입
                    </button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={onClickLogin}>
                    <h1>로그인</h1>
                    <div className="social-container">
                        <FontAwesomeIcon className="social-btn" icon={faFacebook} />
                        <FontAwesomeIcon className="social-btn" icon={faGooglePlusG} />
                        <FontAwesomeIcon className="social-btn" icon={faLinkedin} />
                    </div>
                    <span>또는 나의 계정 사용하기</span>
                    <input type="text" placeholder="아이디를 입력해주세요." name="id"
                        value={inputId}
                        onChange={(e) => setInputId(e.target.value)}/>
                    <input type="password" placeholder="비밀번호를 입력해주세요." name="password"
                        value={inputPassword}
                        onChange={(e) => setInputPassword(e.target.value)}/>
                    <Link href="#">비밀번호를 잊으셨나요?</Link>
                    <button
                        onClick={() => setIsRightPanel(false)}>
                        로그인
                    </button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>환영합니다!</h1>
                        <p>아이디와 비밀번호를 입력해서 로그인 해주세요</p>
                        <button className="ghost" id="signIn"
                            onClick={() => setIsRightPanel(false)}>로그인 하러가기</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>안녕하세요!</h1>
                        <p>회원 가입을 하셔서 저희 플랫폼을 이용해주세요</p>
                        <button className="ghost" id="signUp" 
                            onClick={() => setIsRightPanel(true)}>회원가입 하러가기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
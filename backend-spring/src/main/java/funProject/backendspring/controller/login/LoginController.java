package funProject.backendspring.controller.login;

import funProject.backendspring.domain.LoginForm;
import funProject.backendspring.domain.Member;
import funProject.backendspring.domain.SignUpForm;
import funProject.backendspring.exception.MemberException;
import funProject.backendspring.exception.UnAuthException;
import funProject.backendspring.service.LoginService;
import funProject.backendspring.service.SessionConst;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @PostMapping("/api/login")
    public Member loginRequest(HttpServletRequest request, @RequestBody LoginForm reqForm) {
        Member loginMember = loginService.login(reqForm);

        log.info("[API_Login] {}", loginMember);

        if(loginMember == null) {
            throw new MemberException("아이디 입력 오류");
        }

        HttpSession session = request.getSession();
        session.setAttribute(SessionConst.LOGIN_MEMBER, loginMember);

        return loginMember;
    }

    @PostMapping("/api/logout")
    public void logout(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if(session != null) {
            session.invalidate();
        }

        log.info("[API_logout] {}", "로그아웃 성공");
    }

    @PostMapping("/api/signUp")
    public ResponseEntity signUpRequest(@RequestBody SignUpForm reqForm) {
        log.info("reqForm={}", reqForm);
        loginService.signUp(reqForm);

        return new ResponseEntity(HttpStatus.CREATED);
    }

}

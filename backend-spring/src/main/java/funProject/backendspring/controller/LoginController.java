package funProject.backendspring.controller;

import funProject.backendspring.domain.LoginForm;
import funProject.backendspring.domain.Member;
import funProject.backendspring.exception.MemberException;
import funProject.backendspring.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/api/test")
    public String simpleTest() {
        return "로그인 화면 입니다";
    }

    @PostMapping("/api/login")
    public Member loginRequest(@RequestBody LoginForm reqForm) {
        log.info("reqBody = {}, {}", reqForm.getId(), reqForm.getPassword());
        Member loginMember = loginService.login(reqForm.getId(), reqForm.getPassword());

        log.info("login? {}", loginMember);

        if(loginMember == null) {
            throw new MemberException("아이디 입력 오류");
        }

        return loginMember;
    }

}

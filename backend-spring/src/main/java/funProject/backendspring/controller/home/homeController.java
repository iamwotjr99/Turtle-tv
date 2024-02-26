package funProject.backendspring.controller.home;

import funProject.backendspring.domain.Member;
import funProject.backendspring.exception.UnAuthException;
import funProject.backendspring.service.SessionConst;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class homeController {
    @GetMapping("/api/home")
    public String homeLogin(HttpServletRequest request) {
        HttpSession session = request.getSession(false);

        if(session == null) {
            throw new UnAuthException("로그인 정보가 만료됐습니다.");
        }

        Member loginMember = (Member) session.getAttribute(SessionConst.LOGIN_MEMBER);

        if(loginMember == null) {
            throw new UnAuthException("회원 정보가 없습니다.");
        }

        return "세션 유지";
    }

}

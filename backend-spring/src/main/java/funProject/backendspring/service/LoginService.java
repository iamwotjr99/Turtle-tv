package funProject.backendspring.service;

import funProject.backendspring.domain.Member;
import funProject.backendspring.repository.SpringDataJpaMemberRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final SpringDataJpaMemberRepo memberRepo;

    /**
     * @return null이면 로그인 실패
     */
    public Member login(String loginId, String password) {
        return memberRepo.findByLoginId(loginId)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }
}

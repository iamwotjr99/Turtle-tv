package funProject.backendspring.service;

import funProject.backendspring.domain.LoginForm;
import funProject.backendspring.domain.Member;
import funProject.backendspring.domain.SignUpForm;
import funProject.backendspring.exception.MemberException;
import funProject.backendspring.repository.SpringDataJpaMemberRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final SpringDataJpaMemberRepo memberRepo;
    private final BCryptPasswordEncoder passwordEncoder;

    /**
     * @return null이면 로그인 실패
     */
    public Member login(LoginForm form) {
        return memberRepo.findByLoginId(form.getId())
                .filter(m -> m.getPassword().equals(form.getPassword()))
                .orElse(null);
    }


    public void signUp(SignUpForm form) {
        if(memberRepo.findById(form.getId()).isPresent()) {
            throw new MemberException("아이다가 중복됩니다.");
        }

        Member member = new Member(form.getName(), form.getId(), passwordEncoder.encode(form.getPassword()));

        memberRepo.save(member);
    }
}

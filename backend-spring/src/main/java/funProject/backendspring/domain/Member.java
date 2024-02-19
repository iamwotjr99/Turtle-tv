package funProject.backendspring.domain;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;

    private String name;
    private String id;
    private String password;

    public Member() {
    }

    public Member(String name, String id, String password) {
        this.name = name;
        this.id = id;
        this.password = password;
    }
}

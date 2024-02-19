package funProject.backendspring.repository;

import funProject.backendspring.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SpringDataJpaMemberRepo extends JpaRepository<Member, Long> {
    @Query("select m from Member m where m.id = :id")
    Optional<Member> findByLoginId(@Param("id") String LoginId);
}

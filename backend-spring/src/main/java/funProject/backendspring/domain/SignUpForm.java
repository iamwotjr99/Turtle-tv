package funProject.backendspring.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class SignUpForm {
    @NotEmpty
    private String name;
    @NotEmpty
    private String id;
    @NotEmpty
    private String password;
}

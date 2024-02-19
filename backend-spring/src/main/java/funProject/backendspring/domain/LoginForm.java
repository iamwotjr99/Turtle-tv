package funProject.backendspring.domain;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

@Data
public class LoginForm {

    @NotEmpty
    private String id;
    @NotEmpty
    private String password;
}

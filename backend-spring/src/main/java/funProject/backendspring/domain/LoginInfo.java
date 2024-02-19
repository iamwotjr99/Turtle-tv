package funProject.backendspring.domain;

import lombok.Getter;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class LoginInfo  {

    @NonNull
    private String id;

    @NonNull
    private String password;

    public LoginInfo() {
    }
}

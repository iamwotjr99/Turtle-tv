import axios from "axios"

const loginRequest = async (id, password) => {

    let body = {
        id: id,
        password: password
    }

    let returnLoginState;
    
    try {
        await axios.post('/api/login', body)
        .then((res) => {
            console.log("loginService: : ", res.data)
            returnLoginState = res.data
        });
    
        return returnLoginState

    } catch (error) {
        console.log("error: ", error.response.data.message);

        const errStatus = error.response.status;
        const errMsg = error.response.data.message;

        if(errStatus === 400) {
            alert(errMsg)
        } else {
            alert(errMsg)
        }
        
    }
}

export { loginRequest }
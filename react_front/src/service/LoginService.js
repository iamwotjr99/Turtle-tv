import axios from "axios"

const loginRequest = async (id, password) => {

    let body = {
        id: id,
        password: password
    }

    let returnResult;
    
    try {
        await axios.post('/api/login', body)
        .then((res) => {
            console.log("[loginService-LOGIN] : ", res.data)
            returnResult = res.data
        });
    
        return returnResult

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

const signUpRequest = async (name, id, password) => {
    let body =  {
        name: name,
        id: id,
        password: password,
    }

    let returnResult

    try {
        await axios.post('/api/signUp', body)
        .then((res) => {
            console.log("[loginService-SIGNUP] : ", res.statusText)
            returnResult = res.statusText
        })
    } catch(error) {
        console.log("error: ", error.response)
    }
    
    return returnResult;
}

export { loginRequest, signUpRequest }
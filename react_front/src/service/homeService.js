import axios from "axios";

const homeSessionRequest = async () => {
    let returnResult;

    try {
        await axios.get('/api/home')
        .then((res) => {
            console.log("homeService : ", res.data)
            returnResult = res.data
        })
    } catch (error) {
        console.log("error : ", error.response.status);
        returnResult = error.response.status;
    }

    return returnResult;
}

export { homeSessionRequest }
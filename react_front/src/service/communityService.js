import axios from "axios"

const addNewPost = async (title, content, tag) => {
    let body = {
        title: title,
        content: content,
        tag: tag
    }

    let returnResult;

    try {
        await axios.post('/api/community/add', body)
        .then((res) => {
            console.log("[communityService-ADD] : ", res.data)
            returnResult = res.data
        })

        return returnResult;

    } catch (error) {
        console.log("error: ", error.response.data.message)

        const errStatus = error.response.status;
        const errMsg = error.response.data.message;
        
        if(errStatus === 400) {
            alert(errMsg)
        }
    }
}

export { addNewPost }
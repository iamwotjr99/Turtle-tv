import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        name: "",
        id: "",
        isLogin : false,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.name = action.payload.name
            state.id = action.payload.id
            state.isLogin = true
            // console.log("dadada", state.id);
            console.log("loginSuccess", action.payload.id)

            return state;
        },
        loginFail: (state) => {
            state.name = ""
            state.id = ""

            return state
        }
    }
})

export const { loginSuccess, loginFail } = loginSlice.actions

export default loginSlice.reducer
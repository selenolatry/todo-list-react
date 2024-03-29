import apiFetch from "../api/api";
import { clearState } from "./todoAction";

export const login = (email, password) => {
    return async (dispatch) => {
        //loading 
        dispatch({
            type: 'LOGIN',
            payload: {
                loading: true,
                token: false,
                error: false,
            }
        })

        //login
        try {
            const response = await apiFetch("/auth/login", {
                method: "POST",
                body: {
                    email,
                    password,
                },
            });
            localStorage.setItem("token", response.token);
            dispatch({
                type: 'LOGIN',
                payload: {
                    loading: false,
                    token: localStorage.getItem("token"),
                    error: false,
                }
            })
        } catch (err) {
            dispatch({
                type: 'LOGIN',
                payload: {
                    loading: false,
                    token: false,
                    error: "Invalid email or password",
                }
            })
        }
    }
}

export const register = (name, email, password, confirmPassword) => {
    return async (dispatch) => {
            
        //loading 
        dispatch({
            type: 'REGISTER',
            payload: {
                loading: true,
                error: false,
            }
        })

        //REGISTER
        if(password === confirmPassword){
            try {
                const response = await apiFetch("/auth/register", {
                    method: "POST",
                    body: {
                        name,
                        email,
                        password,
                    },
                });
                login(email, password)(dispatch);
                dispatch({
                    type: 'REGISTER',
                    payload: {
                        loading: false,
                        error: false,
                    }
                })
            } catch (err) {
                // for now...
                // cant use err.response.data.message
                let error = "Try again";
                if (err.response.status === 422) {
                    error = "Email already exists";
                }
                dispatch({
                    type: 'REGISTER',
                    payload: {
                        loading: false,
                        error: error,
                    }
                })
            }
        }else {
            dispatch({
                type: 'REGISTER',
                payload: {
                    loading: false,
                    error: "Passwords do not match",
                }
            })
        }
    }
}

export const userInfo = () => {
    return async (dispatch) => {
        //userInfo
        try {
            const response = await apiFetch("/user", {
                method: "GET",
                headers: {
                    Authorization: localStorage.getItem("token"),
                },
            });
            dispatch({
                type: 'USERINFO',
                payload: {
                    userData: response,
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem("token");
        // clearing todo state
        clearState()(dispatch);
        dispatch({
            type: 'LOGOUT',
            payload: {
                token: null,
            }
        })
    }
}

export const clearError = () => {
    return (dispatch) => {
        dispatch({
            type: 'CLEAR_ERROR',
        })
    }
}

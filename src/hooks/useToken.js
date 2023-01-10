import React, {useState} from "react";

const TOKEN = "token";

const useToken= () => {
    const getToken=()=>{
        const tokenString = localStorage.getItem(TOKEN);
        const userToken = JSON.parse(tokenString);
        return userToken?.token
    };

    const [token, setToken] = useState(getToken);

    const saveToken = userToken => {
        localStorage.setItem(TOKEN, JSON.stringify(userToken));
        setToken(userToken.token);
    }

    const removeToken = () => {
        localStorage.removeItem(TOKEN);
    }

    return{
        setToken: saveToken,
        removeToken,
        token,
    }
}

export default useToken;
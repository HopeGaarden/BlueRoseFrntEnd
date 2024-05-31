import React from "react";

const loginContext = React.createContext({
    memberId : 0,
    nickname : '',
    email : '',
    password : '',
    loginUser : (nickname,email) => {},
});

export default loginContext;
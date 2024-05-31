import React, { useState, useContext } from 'react';
import classes from "./LoginInput.module.css";
import { motion, AnimatePresence } from 'framer-motion';
import LoginLinkTab from './LoginLinkTab';
import { MdError } from "react-icons/md";
import loginContext from '../../store/login-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import base64 from 'base-64';

const LoginInput = () => {

    const [isValid,setIsValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    const loginCtx = useContext(loginContext);
    const navigate = useNavigate();

    const emailChangeHandler = (event) => {
        const { value } = event.target;
        setIsValid(true);
        setCredentials((prevInfo) => ({ ...prevInfo, email:value }));
      };
    
      const passwordChangeHandler = (event) => {
        const { value } = event.target;
        setCredentials((prevInfo) => ({ ...prevInfo, password: value }));
      };

    const submitHandler = async (event) => {
        event.preventDefault();
        // email valid expression
        // @ , . 포함 확인
        // .뒤에 2~3개의 문자 필요
        let regex = new RegExp('[a-z0-9]+@[a-z]+\[a-z].[a-z]{2,3}');
        if (!regex.test(credentials.email)){
            setErrorMessage("유효하지 않은 이메일입니다.");
            setIsValid(false);
            return;
        }

        if (credentials.email.length === 0 || credentials.password.length === 0){
            if (credentials.email.length === 0){
                setErrorMessage("이메일을 입력해주세요.");
            }else{
                setErrorMessage("비밀번호를 입력해주세요.");
            }
            setIsValid(false);
            return;
        }
        console.log(credentials);
        try {
            const response = await axios
              .post("http://localhost:8080/auth/login",credentials,
            {
                withCredentials: true,
                headers: {
                    'Content-Type' : 'application/json;charset=UTF-8'
                }
            }
            ).then((result) => {
                const accesstoken = result.data.access_token;
                const payload = accesstoken.substring(accesstoken.indexOf('.') + 1, accesstoken.lastIndexOf('.'));
                const decodePayload = base64.decode(payload);
                const jsonToken = JSON.parse(decodePayload);
                
                const nickname = jsonToken.nickname;
                const email = jsonToken.sub;

                window.sessionStorage.setItem("accesstoken", JSON.stringify(accesstoken));
                loginCtx.loginUser({
                    nickname,email
                });
                alert(`환영합니다. ${nickname}님`);
                navigate("/home"); //리다이렉트                  
              });
          } catch (error) {
            if (error.response && error.response.status === 403) {
                setIsValid(false);
                setErrorMessage("로그인하신 회원정보가 없습니다.");
                return;
            } else {
                setIsValid(false);
                setErrorMessage("잠시 후에 다시 시도해주세요.");
            }
          }
    };
    const messageVariants = {
        initial : { opacity : 0, y : -30},
        animate : { opacity : 1, y : 0},
        exit : {opacity : 0, y : 50}
    }
    return (
        <div className={classes.input_container}>
            <div className={classes.input_wrapper}>
                <input 
                placeholder='Email'
                className={classes.email_input}
                type='text'
                value={credentials.email}
                onChange={emailChangeHandler}></input>
            </div>
            <div className={classes.input_wrapper}>
                <input 
                    placeholder='Password'
                    className={classes.password_input}
                    type='password' 
                    value={credentials.password}
                    onChange={passwordChangeHandler}></input>
            </div>
            <AnimatePresence>
                {!isValid && 
                    <motion.p className={classes.error_message}
                        variants={messageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={errorMessage}
                    ><MdError style={{ marginRight : '5px'}}/> <span>{errorMessage}</span></motion.p>
                }
            </AnimatePresence>
            <div className={classes.button_container}>
                <motion.button 
                    onClick={submitHandler}
                    type='submit'
                    whileHover={{ backgroundColor :'#1e4fa1', color:'white'}}
                    className={classes.submit_button}>로그인
                </motion.button>
            </div>
            <LoginLinkTab/>
        </div>
    );
};


export default LoginInput;
import classes from "./SignupInput.module.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SignupLinkTab from "./SignLinkTab";
import { MdError } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ConfirmInput from "./ConfirmInput";

const SignupInput = () => {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [checkMessage, setCheckMessage] = useState("");
  const [hasCheckedNickName, setHasCheckedNickName] = useState(false);
  const [hasCheckedEmail, setHasCheckedEmail] = useState(false);
  const navigate = useNavigate();

  const nickNameChangeHandler = (event) => {
    setIsValid(true);
    setHasCheckedNickName(false);
    setNickName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setIsValid(true);
    setHasCheckedEmail(false);
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  
  const passwordCheckChangeHandler = (event) => {
    setPasswordCheck(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!hasCheckedNickName || !hasCheckedEmail) {
      setErrorMessage("닉네임과 이메일 중복확인을 눌러주세요.");
      setIsValid(false);
      return;
    }

    // 이메일 유효성 검사
    let regex = new RegExp("[a-z0-9]+@[a-z]+[a-z].[a-z]{2,3}");

    // 비밀번호 유효성 검사
    let passRegex = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,15}$");

    if (nickName.trim().length === 0) {
      setIsValid(false);
      setErrorMessage("닉네임을 입력해주세요.");
      return;
    }

    if (!regex.test(email)) {
      setErrorMessage("유효하지 않은 이메일입니다.");
      setIsValid(false);
      return;
    }

    if (!passRegex.test(password)) {
      setIsValid(false);
      setErrorMessage("비밀번호는 영문, 숫자, 특수문자를 하나씩 포함해주세요.(8~15자)");
      return;
    }

    if (password !== passwordCheck) {
      setIsValid(false);
      setErrorMessage("비밀번호가 동일하지 않습니다.");
      return;
    }

    navigate("/");
  };

  const nickNameCheckHandler = (event) => {
    event.preventDefault();
    setHasCheckedNickName(true);
    if (nickName === "") {
      setIsValid(false);
      setErrorMessage("중복된 닉네임입니다.");
    } else {
      setIsValid(true);
      setCheckMessage("생성 가능한 닉네임입니다.");
    }
  };

  const emailCheckHandler = (event) => {
    event.preventDefault();
    setHasCheckedEmail(true);
    let regex = new RegExp("[a-z0-9]+@[a-z]+[a-z].[a-z]{2,3}");
    if (!regex.test(email)) {
      setErrorMessage("유효하지 않은 이메일입니다.");
      setIsValid(false);
      return;
    }
    if (email === "") {
      setIsValid(false);
      setErrorMessage("중복된 이메일입니다.");
    } else {
      setIsValid(true);
      setCheckMessage("생성 가능한 이메일입니다.");
    }
  };

  const messageVariants = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className={classes.input_container}>
      <div className={classes.input_wrapper}>
        <input
          placeholder="Nickname"
          className={classes.nickname_input}
          value={nickName}
          type="text"
          onChange={nickNameChangeHandler}
        ></input>
        <motion.button
          className={classes.redundantButton}
          type="submit"
          onClick={nickNameCheckHandler}
          whileHover={{ backgroundColor: "#1e4fa1", color: "white" }}
        >
          중복 확인
        </motion.button>
      </div>
      <div className={classes.input_wrapper}>
        <input
          placeholder="Email"
          className={classes.email_input}
          value={email}
          type="text"
          onChange={emailChangeHandler}
        ></input>
        <motion.button
          className={classes.redundantButton}
          type="submit"
          onClick={emailCheckHandler}
          whileHover={{ backgroundColor: "#1e4fa1", color: "white" }}
        >
          중복 확인
        </motion.button>
      </div>
      <div className={classes.input_wrapper}>
        <input
          placeholder="Password"
          className={classes.password_input}
          value={password}
          type="password"
          onChange={passwordChangeHandler}
        ></input>
      </div>
      <div className={classes.input_wrapper}>
        <input
          placeholder="Password Check"
          className={classes.password_check_input}
          value={passwordCheck}
          type="password"
          onChange={passwordCheckChangeHandler}
        ></input>
      </div>
      <AnimatePresence>
        {!isValid && (
          <motion.p
            className={classes.error_message}
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={errorMessage}
          >
            <MdError style={{ marginRight: "5px" }} />{" "}
            <span>{errorMessage}</span>
          </motion.p>
        )}
        {hasCheckedNickName && isValid && (
          <motion.p
            className={classes.check_message}
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={checkMessage}
          >
            <MdError style={{ marginRight: "5px" }} />{" "}
            <span>{checkMessage}</span>
          </motion.p>
        )}
        {hasCheckedEmail && isValid && (
          <motion.p
            className={classes.check_message}
            variants={messageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={checkMessage}
          >
            <MdError style={{ marginRight: "5px" }} />{" "}
            <span>{checkMessage}</span>
          </motion.p>
        )}
      </AnimatePresence>
      <div>
        <h4>진단서를 첨부해주세요.</h4>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={classes.confirmContainer}
        >
          <ConfirmInput />
        </motion.button>
      </div>
      <div className={classes.button_container}>
        <motion.button
          onClick={submitHandler}
          type="submit"
          whileHover={{ backgroundColor: "#1e4fa1", color: "white" }}
          className={classes.submit_button}
        >
          회원가입
        </motion.button>
      </div>
      <SignupLinkTab />
    </div>
  );
};

export default SignupInput;

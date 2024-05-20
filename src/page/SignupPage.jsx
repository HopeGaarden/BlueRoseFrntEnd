import classes from "./SignupPage.module.css";
import logoImage from "../image/logo.png";
import React from "react";
import SignupInput from "../components/SignupPageComponents/SignupInput";

const SignupPage = () => {
  return (
    <React.Fragment>
      <div className={classes.headerMessage}>이용이 처음이신가요?</div>
      <div className={classes.header}>
        <img className={classes.logo_image} src={logoImage} alt="logo-image" />
        <h3>회원가입</h3>
      </div>
      <div className={classes.section}>
        <h4>아래 정보를 입력해주세요.</h4>
        <div className={classes.input_container}>
          <SignupInput />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignupPage;

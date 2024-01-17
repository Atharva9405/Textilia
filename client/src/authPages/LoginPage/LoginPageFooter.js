import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const LoginPageFooter = ({ handleLogin, isFormValid }) => {
  const history = useHistory();

  const handlePushToRegisterPage = () => {
    history.push("/register");
  };

  const getFormNotValidMessage = () => {
    return "Enter correct e-mail address and password should contain between 6 and 12 characters"
  }
  
  const getFormValidMessage = () => {
    return "Press to log in!"
  }
 
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Log in"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleLogin}
          />
        </div>
        <RedirectInfo
          text="Need an account?"
          redirectText="Create an account"
          additionalStyles={{ margin: "5px" }}
          redirectHandler={handlePushToRegisterPage}
        />
      </Tooltip>
    </>
  );
};

export default LoginPageFooter;

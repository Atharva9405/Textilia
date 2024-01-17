import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useHistory } from "react-router-dom";
import { Tooltip } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const history = useHistory();

  const handlePushToLoginPage = () => {
    history.push("/login");
  };

  const getFormNotValidMessage = () => {
    return "Username should contain between 3 and 12 characters and password should contain between 6 and 12 characters. Also correct e-mail should be provided"
  }
  
  const getFormValidMessage = () => {
    return "Press to register"
  }
 
  return (
    <>
      <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
      >
        <div>
          <CustomPrimaryButton
            label="Register"
            additionalStyles={{ marginTop: "30px" }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
        <RedirectInfo
          text=""
          redirectText="Already have an account?"
          additionalStyles={{ margin: "5px" }}
          redirectHandler={handlePushToLoginPage}
        />
      </Tooltip>
    </>
  );
};

export default RegisterPageFooter;

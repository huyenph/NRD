import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import PasswordValidatorPattern from "./PasswordValidatorPattern";
import { Clear, Done } from "@mui/icons-material";

// Styles Imports
import {
  ValidatorMainWrapper,
  ValidatorContentWrapper,
} from "./PasswordChecklList.style";

type PasswordValidatorProps = {
  passwordStr?: string | number;
};

const PasswordCheckList: React.FC<PasswordValidatorProps> = ({
  passwordStr,
}) => {
  const [validation, setValidation] = useState({
    validUpperCaseChar: false,
    validLowerCaseChar: false,
    validDigit: false,
    validSpecialChar: false,
    validMinLength: false,
    inputIsNotEmpty: false,
  });

  useEffect(() => {
    setValidation(PasswordValidatorPattern(passwordStr));
  }, [passwordStr]);

  const {
    validUpperCaseChar,
    validLowerCaseChar,
    validDigit,
    validSpecialChar,
    validMinLength,
    inputIsNotEmpty,
  } = validation;

  const renderCondition = (validateChecked: boolean, title: string) => {
    return (
      <Grid container direction="row" spacing={1}>
        <Grid item>
          {validateChecked ? (
            <Done fontSize="small" color="success" />
          ) : (
            <Clear fontSize="small" color="error" />
          )}
        </Grid>
        <Grid item>
          <Typography
            component="p"
            fontSize={13}
            color={validateChecked ? "success.main" : "error.main"}
          >
            {title}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return inputIsNotEmpty ? (
    <ValidatorMainWrapper>
      <Typography
        component="p"
        fontSize={14}
        sx={{
          fontWeight: 500,
          // marginBottom: 2,
          // marginTop: 2,
        }}
      >
        Password must contain the following:
      </Typography>
      <ValidatorContentWrapper>
        {renderCondition(validMinLength, "Minimum 12 characters")}
        {renderCondition(validUpperCaseChar, "One uppercase character")}
        {renderCondition(validLowerCaseChar, "One lowercase character")}
        {renderCondition(validDigit, "At least one digit")}
        {renderCondition(
          validSpecialChar,
          "At least one special character(!@#$%^)"
        )}
      </ValidatorContentWrapper>
    </ValidatorMainWrapper>
  ) : null;
};

export default PasswordCheckList;

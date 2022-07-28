import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import PasswordValidatorPattern from "./PasswordValidatorPattern";

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
  const colorScheme = {
    valid: "#4CAF50",
    invalid: "#B71C1C",
  };

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

  return inputIsNotEmpty ? (
    <ValidatorMainWrapper>
      <Typography
        component="h2"
        sx={{
          fontWeight: 500,
        }}
      >
        Password should contain the following:
      </Typography>

      <ValidatorContentWrapper>
        <Typography
          component="p"
          sx={{
            color: validMinLength ? colorScheme.valid : colorScheme.invalid,
          }}
        >
          Minimum 12 characters
        </Typography>

        <Typography
          component="h2"
          sx={{
            fontWeight: 500,
          }}
        >
          To fulfill at least 2 of the following 4:
        </Typography>
        <ValidatorContentWrapper>
          <Typography
            component="p"
            sx={{
              color: validUpperCaseChar
                ? colorScheme.valid
                : colorScheme.invalid,
            }}
          >
            One uppercase character
          </Typography>
          <Typography
            component="p"
            sx={{
              color: validLowerCaseChar
                ? colorScheme.valid
                : colorScheme.invalid,
            }}
          >
            One lowercase character
          </Typography>
          <Typography
            component="p"
            sx={{
              color: validDigit ? colorScheme.valid : colorScheme.invalid,
            }}
          >
            At least one digit
          </Typography>
          <Typography
            component="p"
            sx={{
              color: validSpecialChar ? colorScheme.valid : colorScheme.invalid,
            }}
          >
            At least one special character(!@#$%^)
          </Typography>
        </ValidatorContentWrapper>
      </ValidatorContentWrapper>
    </ValidatorMainWrapper>
  ) : null;
};

export default PasswordCheckList;

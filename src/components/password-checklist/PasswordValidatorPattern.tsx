import { string } from "yup";

const PasswordValidatorPattern = (passwordStr: string | number | undefined) => {
  const MIN_OPTIONAL_VALIDITY_COUNT = 2;

  // check string — valid length of 12
  const validMinLength = string().min(12).isValidSync(passwordStr);

  const validationPatterns = {
    // check string — upper case text
    validUpperCaseChar: string()
      .matches(/^(?=.*[A-Z])/)
      .isValidSync(passwordStr),
    // check string — lower case text
    validLowerCaseChar: string()
      .matches(/^(?=.*[a-z])/)
      .isValidSync(passwordStr),
    // check string — contains at least 1 digit
    validDigit: string()
      .matches(/^(?=.*[0-9])/)
      .isValidSync(passwordStr),
    // check string — contains at least 1 special character
    validSpecialChar: string()
      .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/)
      .isValidSync(passwordStr),
  };

  const hasMetMinOptionalCriteria = (): boolean => {
    const validatorCountForTrue = Object.values(validationPatterns).reduce(
      (v, item) => v + +item,
      0
    );
    return validatorCountForTrue >= MIN_OPTIONAL_VALIDITY_COUNT;
  };

  return {
    inputIsNotEmpty: passwordStr !== "",
    validMinLength,
    ...validationPatterns,
    isPasswordValid:
      validMinLength &&
      hasMetMinOptionalCriteria() === true &&
      passwordStr !== "",
  };
};

export default PasswordValidatorPattern;

import { InputProps, styled, TextField } from "@mui/material";
import { PRIMARY_COLOR } from "../../../utils/colors";

interface UpmTextFieldProps {
  variant?: "outlined" | "filled" | "standard";
  type?: string;
  readonly?: boolean;
  required?: boolean;
  inputProps?: InputProps;
}

const UpmTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: PRIMARY_COLOR,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: PRIMARY_COLOR,
    },
  },
});

export default UpmTextField;

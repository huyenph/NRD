import MuiCard, { CardProps } from "@mui/material/Card";
import MuiFormControlLabel, {
  FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";

// import styled from "styled-components";

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: theme.palette.text.secondary,
    },
  })
);

export { Card, LinkStyled, FormControlLabel };

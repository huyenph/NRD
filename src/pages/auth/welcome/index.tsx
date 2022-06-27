import {
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { Box } from "@mui/system";
import { paths } from "../../../routes/paths";
import { UpmButton } from "../../../components/atoms";
import { Apple, Facebook, Google } from "@mui/icons-material";
import {
  BACKGROUND_DARK,
  PRIMARY_COLOR,
  PRIMARY_LIGHT_COLOR,
} from "../../../utils/colors";

import styles from "./WelcomePage.module.scss";
import UpmTextField from "../../../components/atoms/UpmTextField/UpmTextField";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: PRIMARY_LIGHT_COLOR,
      main: PRIMARY_COLOR,
      dark: BACKGROUND_DARK,
    },
    background: {
      default: BACKGROUND_DARK,
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const WelcomePage: NextPage = () => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Hi!
          </Typography>
          <Box component="form" onSubmit={() => {}} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              sx={{
                alignItems: "start",
              }}
            />
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <UpmButton
              fullWidth
              children="Continue"
              sx={{
                marginBottom: 1,
                backgroundColor: PRIMARY_COLOR,
                ":hover": {
                  backgroundColor: PRIMARY_COLOR,
                },
              }}
            />
            <Typography
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              or
            </Typography>
            <UpmButton
              fullWidth
              startIcon={
                <img
                  className={styles.icon_wrapper}
                  src="/assets/icons/ic_facebook.png"
                  alt="Continue with Facebook"
                />
              }
              children="Continue with Facebook"
              sx={{
                marginBottom: 1,
                backgroundColor: PRIMARY_LIGHT_COLOR,
                ":hover": {
                  backgroundColor: PRIMARY_LIGHT_COLOR,
                },
                color: BACKGROUND_DARK,
              }}
            />
            <UpmButton
              fullWidth
              startIcon={
                <img
                  className={styles.icon_wrapper}
                  src="/assets/icons/ic_google.png"
                  alt="Continue with Google"
                />
              }
              children="Continue with Google"
              sx={{
                marginBottom: 1,
                backgroundColor: PRIMARY_LIGHT_COLOR,
                ":hover": {
                  backgroundColor: PRIMARY_LIGHT_COLOR,
                },
                color: BACKGROUND_DARK,
              }}
            />
            <UpmButton
              fullWidth
              startIcon={
                <img
                  className={styles.icon_wrapper}
                  src="/assets/icons/ic_apple.png"
                  alt="Continue with Apple"
                />
              }
              children="Continue with Apple"
              sx={{
                marginBottom: 1,
                backgroundColor: PRIMARY_LIGHT_COLOR,
                ":hover": {
                  backgroundColor: PRIMARY_LIGHT_COLOR,
                },
                color: BACKGROUND_DARK,
              }}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href={`/${paths.AUTH}/${paths.SIGNUP}`} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default WelcomePage;

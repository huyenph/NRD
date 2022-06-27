import { CircularProgress, ThemeProvider, createTheme } from "@mui/material";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import WelcomePage from "./auth/welcome";
import { paths } from "../routes/paths";
import {
  BACKGROUND_DARK,
  PRIMARY_COLOR,
  PRIMARY_LIGHT_COLOR,
} from "../utils/colors";

const Home: NextPage = () => {
  const router = useRouter();
  const theme = createTheme({
    palette: {
      primary: {
        light: PRIMARY_LIGHT_COLOR,
        main: PRIMARY_COLOR,
        dark: BACKGROUND_DARK,
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  useEffect(() => {
    router.push(`${paths.AUTH}/${paths.WELCOME}`);
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<CircularProgress />}></Suspense>
    </ThemeProvider>
  );
};

export default Home;

// ** React Imports
import { useState, Fragment, MouseEvent, ReactNode } from "react";

// ** Next Imports
import Link from "next/link";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

// ** Icons Imports
import Google from "mdi-material-ui/Google";
import Github from "mdi-material-ui/Github";
import Twitter from "mdi-material-ui/Twitter";
import Facebook from "mdi-material-ui/Facebook";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

// ** Configs
import themeConfig from "../../../configs/ThemeConfig";

// ** Layout Import
import BlankLayout from "../../../core/layouts/BlankLayout";
import PasswordCheckList from "../../../components/password-checklist/PassworkCheckList";

// ** Demo Imports
// import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";

// ** Styles Imports
import { Card, LinkStyled, FormControlLabel } from "./Register.style";

// ** Third party Imports
import { Formik } from "formik";
import * as Yup from "yup";

interface ToggleState {
  showPassword: boolean;
  agreePolicy: boolean;
}

interface RegisterState {
  username: string | number;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [initialValues, setInitialValues] = useState<RegisterState>({
    username: "",
    email: "",
    password: "",
  });
  const [toggle, setToggle] = useState<ToggleState>({
    showPassword: false,
    agreePolicy: false,
  });

  // ** Hook
  const theme = useTheme();

  const handleClickShowPassword = () => {
    setToggle({
      ...toggle,
      showPassword: !toggle.showPassword,
    });
  };

  const handleClickAgreePolicy = (value: boolean) => {
    setToggle({
      ...toggle,
      agreePolicy: value,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width={35}
              height={29}
              version="1.1"
              viewBox="0 0 30 23"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Artboard" transform="translate(-95.000000, -51.000000)">
                  <g id="logo" transform="translate(95.000000, 50.000000)">
                    <path
                      id="Combined-Shape"
                      fill={theme.palette.primary.main}
                      d="M30,21.3918362 C30,21.7535219 29.9019196,22.1084381 29.7162004,22.4188007 C29.1490236,23.366632 27.9208668,23.6752135 26.9730355,23.1080366 L26.9730355,23.1080366 L23.714971,21.1584295 C23.1114106,20.7972624 22.7419355,20.1455972 22.7419355,19.4422291 L22.7419355,19.4422291 L22.741,12.7425689 L15,17.1774194 L7.258,12.7425689 L7.25806452,19.4422291 C7.25806452,20.1455972 6.88858935,20.7972624 6.28502902,21.1584295 L3.0269645,23.1080366 C2.07913318,23.6752135 0.850976404,23.366632 0.283799571,22.4188007 C0.0980803893,22.1084381 2.0190442e-15,21.7535219 0,21.3918362 L0,3.58469444 L0.00548573643,3.43543209 L0.00548573643,3.43543209 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 L15,9.19354839 L26.9548759,1.86636639 C27.2693965,1.67359571 27.6311047,1.5715689 28,1.5715689 C29.1045695,1.5715689 30,2.4669994 30,3.5715689 L30,3.5715689 Z"
                    />
                    <polygon
                      id="Rectangle"
                      opacity="0.077704"
                      fill={theme.palette.common.black}
                      points="0 8.58870968 7.25806452 12.7505183 7.25806452 16.8305646"
                    />
                    <polygon
                      id="Rectangle"
                      opacity="0.077704"
                      fill={theme.palette.common.black}
                      points="0 8.58870968 7.25806452 12.6445567 7.25806452 15.1370162"
                    />
                    <polygon
                      id="Rectangle"
                      opacity="0.077704"
                      fill={theme.palette.common.black}
                      points="22.7419355 8.58870968 30 12.7417372 30 16.9537453"
                      transform="translate(26.370968, 12.771227) scale(-1, 1) translate(-26.370968, -12.771227) "
                    />
                    <polygon
                      id="Rectangle"
                      opacity="0.077704"
                      fill={theme.palette.common.black}
                      points="22.7419355 8.58870968 30 12.6409734 30 15.2601969"
                      transform="translate(26.370968, 11.924453) scale(-1, 1) translate(-26.370968, -11.924453) "
                    />
                    <path
                      id="Rectangle"
                      fillOpacity="0.15"
                      fill={theme.palette.common.white}
                      d="M3.04512412,1.86636639 L15,9.19354839 L15,9.19354839 L15,17.1774194 L0,8.58649679 L0,3.5715689 C3.0881846e-16,2.4669994 0.8954305,1.5715689 2,1.5715689 C2.36889529,1.5715689 2.73060353,1.67359571 3.04512412,1.86636639 Z"
                    />
                    <path
                      id="Rectangle"
                      fillOpacity="0.35"
                      fill={theme.palette.common.white}
                      transform="translate(22.500000, 8.588710) scale(-1, 1) translate(-22.500000, -8.588710) "
                      d="M18.0451241,1.86636639 L30,9.19354839 L30,9.19354839 L30,17.1774194 L15,8.58649679 L15,3.5715689 C15,2.4669994 15.8954305,1.5715689 17,1.5715689 C17.3688953,1.5715689 17.7306035,1.67359571 18.0451241,1.86636639 Z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <Typography
              variant="h6"
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, marginBottom: 1.5 }}
            >
              Adventure starts here 🚀
            </Typography>
            <Typography variant="body2">
              Make your app management easy and fun!
            </Typography>
          </Box>
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .min(5)
                .max(10)
                .required("Username is required"),
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string()
                .min(12)
                .max(255)
                .matches(/[A-Z]/)
                .matches(/[a-z]/, "")
                .matches(/(\d)/, "")
                .matches(/(\W)/, "")
                .required("Password is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                  required
                  autoFocus
                  fullWidth
                  id="username"
                  label="Username"
                  value={values.username}
                  error={Boolean(touched.username && errors.username)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.username && errors.username}
                  sx={{ marginBottom: 4 }}
                />
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                  value={values.email}
                  error={Boolean(touched.email && errors.email)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  sx={{ marginBottom: 4 }}
                />
                <TextField
                  required
                  fullWidth
                  label="Password"
                  value={values.password}
                  id="password"
                  type={toggle.showPassword ? "text" : "password"}
                  error={Boolean(touched.password && errors.password)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          aria-label="toggle password visibility"
                        >
                          {toggle.showPassword ? (
                            <EyeOutline />
                          ) : (
                            <EyeOffOutline />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <PasswordCheckList passwordStr={values.password} />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(_, value) => {
                        handleClickAgreePolicy(value);
                      }}
                    />
                  }
                  label={
                    <Fragment>
                      <span>I agree to </span>
                      <Link href="/" passHref>
                        <LinkStyled
                          onClick={(e: MouseEvent<HTMLElement>) =>
                            e.preventDefault()
                          }
                        >
                          privacy policy & terms
                        </LinkStyled>
                      </Link>
                    </Fragment>
                  }
                />
                <Button
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  sx={{ marginBottom: 7 }}
                  onClick={() => handleSubmit}
                  disabled={
                    Array.isArray(errors) ||
                    Object.values(errors).toString() != ""
                  }
                >
                  Sign up
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ marginRight: 2 }}>
                    Already have an account?
                  </Typography>
                  <Typography variant="body2">
                    <Link passHref href="/auth/login">
                      <LinkStyled>Sign in instead</LinkStyled>
                    </Link>
                  </Typography>
                </Box>
                <Divider sx={{ my: 5 }}>or</Divider>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e: MouseEvent<HTMLElement>) =>
                        e.preventDefault()
                      }
                    >
                      <Facebook sx={{ color: "#497ce2" }} />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e: MouseEvent<HTMLElement>) =>
                        e.preventDefault()
                      }
                    >
                      <Twitter sx={{ color: "#1da1f2" }} />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e: MouseEvent<HTMLElement>) =>
                        e.preventDefault()
                      }
                    >
                      <Github
                        sx={{
                          color: (theme) =>
                            theme.palette.mode === "light"
                              ? "#272727"
                              : theme.palette.grey[300],
                        }}
                      />
                    </IconButton>
                  </Link>
                  <Link href="/" passHref>
                    <IconButton
                      component="a"
                      onClick={(e: MouseEvent<HTMLElement>) =>
                        e.preventDefault()
                      }
                    >
                      <Google sx={{ color: "#db4437" }} />
                    </IconButton>
                  </Link>
                </Box>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
      {/* <FooterIllustrationsV1 /> */}
    </Box>
  );
};

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default RegisterPage;

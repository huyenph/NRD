import { LoadingButton } from "@mui/lab";
import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface UpmButtonProps {
  variant?: "contained" | "text" | "outlined";
  color?:
    | "primary"
    | "inherit"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
  sx?: SxProps<Theme>;
  size?: "small" | "medium" | "large";
  width?: string;
  loading?: boolean;
}

const UpmButton = ({
  variant = "contained",
  color = "primary",
  type = "submit",
  onClick,
  children,
  fullWidth,
  startIcon,
  endIcon,
  sx,
  size = "medium",
  width,
  loading,
  ...other
}: UpmButtonProps) => {
  return (
    <LoadingButton
      variant={variant}
      color={color}
      type={type}
      onClick={onClick}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      loading={loading}
      sx={{
        ...sx,
        textTransform: "none",
      }}
      {...other}
    >
      {children}
    </LoadingButton>
  );
};

export default UpmButton;

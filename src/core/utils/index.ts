import createCache from "@emotion/cache";
import { Opacity } from "@mui/icons-material";
import get from "lodash/get";

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};

export const hexToRGBA = (hexCode: string, opecity: number) => {
  let hex = hexCode.replace("#", "");
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${Opacity})`;
};

export const setStorage = (key: string, value: any) => {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(
      key,
      typeof value === "object" ? JSON.stringify({ data: value }) : value
    );
  }
};

export const getStorage = (key: string) => {
  if (typeof window !== "undefined") {
    const value: string | null = window.sessionStorage.getItem(key);
    try {
      if (value !== null) {
        const parse = JSON.parse(value);
        return get(parse, "data") || parse;
      }
    } catch (error) {
      return value;
    }
  }
};

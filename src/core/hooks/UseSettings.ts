import { useContext } from "react";
import {
  SettingsContextValue,
  SettingsContext,
} from "../context/SettingsContext";

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext);

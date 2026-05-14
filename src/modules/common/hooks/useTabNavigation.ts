import { useContext } from "react";
import { TabNavigationContext } from "../contexts/TabNavigationProvider";

export function useTabNavigation() {
  return useContext(TabNavigationContext);
}

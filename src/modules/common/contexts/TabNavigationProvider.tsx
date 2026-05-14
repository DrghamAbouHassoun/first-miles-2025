import { createContext, useCallback, useState } from "react";

interface TabNavigationContextState {
  tabs: string[];
  activeTab: string;
  registerPageTabs: (tabs: string[], defaultTab: string) => void;
  setActiveTab: (tab: string) => void;
}

export const TabNavigationContext = createContext<TabNavigationContextState>({
  tabs: [],
  activeTab: "",
  registerPageTabs: () => {},
  setActiveTab: () => {},
});

const TabNavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabs, setTabs] = useState<string[]>([]);
  const [activeTab, setActiveTabState] = useState<string>("");

  const registerPageTabs = useCallback((newTabs: string[], defaultTab: string) => {
    setTabs(newTabs);
    setActiveTabState(defaultTab);
  }, []);

  const setActiveTab = useCallback((tab: string) => {
    setActiveTabState(tab);
  }, []);

  return (
    <TabNavigationContext.Provider value={{ tabs, activeTab, registerPageTabs, setActiveTab }}>
      {children}
    </TabNavigationContext.Provider>
  );
};

export default TabNavigationProvider;

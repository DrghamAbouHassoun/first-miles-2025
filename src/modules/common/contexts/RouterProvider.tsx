import { createContext, useState } from "react";

interface RouterContextState {
  currentRoute: string;
  homeKey: number;
  navigate: (route: string) => void;
}

export const RouterContext = createContext<RouterContextState>({
  currentRoute: "",
  homeKey: 0,
  navigate: () => {},
});

interface RouterProviderProps {
  children: React.ReactNode;
}

const RouterProvider = ({ children }: RouterProviderProps) => {
  const [currentRoute, setCurrentRoute] = useState("");
  const [homeKey, setHomeKey] = useState(0);
  const navigate = (route: string) => {
    setCurrentRoute(route);
    if (route === "Home" || route === "") {
      setHomeKey((k) => k + 1);
    }
  };

  return (
    <RouterContext.Provider value={{ currentRoute, homeKey, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;

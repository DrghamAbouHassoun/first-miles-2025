import { createContext, useState } from "react";

interface RouterContextState {
  currentRoute: string;
  navigate: (route: string) => void;
}

export const RouterContext = createContext<RouterContextState>({
  currentRoute: "",
  navigate: () => {},
});

interface RouterProviderProps {
  children: React.ReactNode;
}

const RouterProvider = ({ children }: RouterProviderProps) => {
  const [currentRoute, setCurrentRoute] = useState("");
  const navigate = (route: string) => {
    setCurrentRoute(route);
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export default RouterProvider;

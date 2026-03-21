import React from "react";

interface HomeModalContextState {
  isOpen: boolean;
  toggleModel: (value: boolean) => void;
}

export const HomeModalContext = React.createContext<HomeModalContextState>({
  isOpen: false,
  toggleModel: () => {},
});

interface HomeModalProviderProps {
  children: React.ReactNode;
}

const HomeModalProvider = ({ children }: HomeModalProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModel = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <HomeModalContext.Provider value={{ isOpen, toggleModel }}>
      {children}
    </HomeModalContext.Provider>
  );
};

export default HomeModalProvider;

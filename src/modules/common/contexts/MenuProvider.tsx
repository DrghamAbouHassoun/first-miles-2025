import { createContext, useState } from "react";

interface MenuContextType {
  isOpen: boolean;
  toggleMenu: (value: boolean) => void;
}

export const MenuContext = createContext<MenuContextType>({
  isOpen: false,
  toggleMenu: (_val: boolean) => {},
});

interface MenuProviderProps {
  children: React.ReactNode;
}

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <MenuContext.Provider value={{ isOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;

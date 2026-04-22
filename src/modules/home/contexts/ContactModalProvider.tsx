import React from "react";

interface ContactModalContextState {
  isOpen: boolean;
  toggleModel: (value: boolean) => void;
}

export const ContactModalContext = React.createContext<ContactModalContextState>({
  isOpen: false,
  toggleModel: () => {},
});

interface ContactModalProviderProps {
  children: React.ReactNode;
}

const ContactModalProvider = ({ children }: ContactModalProviderProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModel = (value: boolean) => {
    setIsOpen(value);
  };

  return (
    <ContactModalContext.Provider value={{ isOpen, toggleModel }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export default ContactModalProvider;

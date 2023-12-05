import { createContext, useState } from "react";

//create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <SidebarContext.Provider value={{ isOpen, handleClose, setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;

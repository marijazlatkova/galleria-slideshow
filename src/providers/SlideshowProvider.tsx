import { createContext, useState, ReactNode } from "react";

interface SlideshowContextType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SlideshowContext = createContext<SlideshowContextType | undefined>(undefined);

interface SlideshowProviderProps {
  children: ReactNode;
}

export const SlideshowProvider = ({ children }: SlideshowProviderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <SlideshowContext.Provider value={{ open, setOpen }}>
      {children}
    </SlideshowContext.Provider>
  );
};
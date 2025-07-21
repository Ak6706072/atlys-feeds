import { createContext } from "react";

interface GlobalContextType {
  context: any;
  setInGlobalContext: React.Dispatch<React.SetStateAction<any>>;
}

export const GlobalContext = createContext<GlobalContextType>({
  context: {},
  setInGlobalContext: (data: Record<string, any>) => {},
});

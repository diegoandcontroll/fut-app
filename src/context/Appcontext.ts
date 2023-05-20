import { createContext, ReactNode, useContext } from "react";


interface AppContextDataReact {

}
interface AppProviderProps {
  children: ReactNode;
}
export const AppContextReact = createContext<AppContextDataReact>(
  {} as AppContextDataReact
);

export const AppProvider = ({ children }: AppProviderProps) => {
  // return (
  //   <AppContextReact.Provider value={{gif,setGif}}>{children}</AppContextReact.Provider>
  // )
}
export function useAppContext() {
  const context = useContext(AppContextReact);
  return context;
}
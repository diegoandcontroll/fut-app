import { createContext, ReactNode, useContext, useReducer } from "react";
type State = {
  apiKey: string;
}
type Action = {
  type: AppActions;
  payload: any;
}

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
}

type AppProviderProps = {
  children: ReactNode;
}
const initialData: State = {
  apiKey: 'Test',
}
const AppContext = createContext<ContextType | undefined>(undefined)

export enum AppActions {
  setApiKey
}
const appReducer = (state: State, action: Action) => {
  switch(action.type){
    case AppActions.setApiKey:
      return {...state, apiKey: action.payload}
    default:
      return state
  }
}

export const AppProvider = ({children}: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialData);
  const value = {state, dispatch};
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if(context === undefined){
    throw new Error('Hook bad used');
  }
  return context;
}
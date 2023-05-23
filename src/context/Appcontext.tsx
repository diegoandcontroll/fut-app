import { LeagueObj, ObjTables, ObjTeam } from "@/types";
import { ReactNode, createContext, useContext, useReducer } from "react";
type State = {
  apiKey: string;
  isValidApiKey: boolean;
  isLogged: boolean;
  country: string;
  season: string;
  imgCountry: string;
  league: LeagueObj;
  team: ObjTeam;
  tableObjs: ObjTables;
};
type Action = {
  type: AppActions;
  payload: any;
};

type ContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

type AppProviderProps = {
  children: ReactNode;
};
// 4e9796f4a1f70383002f539c90dea27a
const initialData: State = {
  apiKey: "",
  isValidApiKey: false,
  isLogged: true,
  country: "",
  season: "",
  imgCountry: "",
  league: {},
  team: {},
  tableObjs: {
    tGames: 0,
    tDraws: 0,
    tLoses: 0,
    tVictories: 0,
  },
};
const AppContext = createContext<ContextType | undefined>(undefined);

export enum AppActions {
  setApiKey,
  setIsLogged,
  setCountry,
  setSeason,
  setImgCountry,
  setTeam,
  setLeague,
  setIsValidApiKey,
  setTableObjs,
}
const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case AppActions.setApiKey:
      return { ...state, apiKey: action.payload };
    case AppActions.setIsLogged:
      return { ...state, isLogged: action.payload };
    case AppActions.setCountry:
      return { ...state, country: action.payload };
    case AppActions.setSeason:
      return { ...state, season: action.payload };
    case AppActions.setImgCountry:
      return { ...state, imgCountry: action.payload };
    case AppActions.setTeam:
      return { ...state, team: action.payload };
    case AppActions.setLeague:
      return { ...state, league: action.payload };
    case AppActions.setIsValidApiKey:
      return { ...state, isValidApiKey: action.payload };
    case AppActions.setTableObjs:
      return { ...state, tableObjs: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialData);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("Hook bad used");
  }
  return context;
};

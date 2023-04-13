import { createContext, ReactNode, useReducer, Dispatch } from "react";
import {
  useGithubUserRepos,
  useGithubUsersSearch,
} from "./hooks/useGithubSearch";

export type SearchAction =
  | { type: "SET_PHRASE"; payload: string }
  | { type: "CLEAR_PHRASE" }
  | { type: "SET_USERNAME"; payload: string }
  | { type: "CLEAR_USERNAME" };

const contextInitialState = {
  phrase: "",
  username: "",
  dispatch: () => null,
  usersSearchStatus: {
    users: [],
    isLoading: false,
    error: null,
  },
  reposSearchStatus: {
    repos: [],
    isLoading: false,
    error: null,
  },
};

export const SearchContext = createContext<{
  phrase: string;
  username: string;
  dispatch: Dispatch<SearchAction>;
  usersSearchStatus: usersSearchStatus;
  reposSearchStatus: reposSearchStatus;
}>({
  ...contextInitialState,
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    (state: { phrase: string; username: string }, action: SearchAction) => {
      switch (action.type) {
        case "SET_PHRASE":
          return { ...state, phrase: action.payload };
        case "CLEAR_PHRASE":
          return { ...state, phrase: "" };
        case "SET_USERNAME":
          return { ...state, username: action.payload };
        case "CLEAR_USERNAME":
          return { ...state, username: "" };
        default:
          return state;
      }
    },
    { phrase: "", username: "" }
  );

  const {
    users,
    isLoading: usersLoading,
    error: usersError,
  } = useGithubUsersSearch(state.phrase);
  const {
    repos,
    isLoading: reposLoading,
    error: reposError,
  } = useGithubUserRepos(state.username);

  return (
    <SearchContext.Provider
      value={{
        phrase: state.phrase,
        username: state.username,
        dispatch,
        usersSearchStatus: {
          users,
          isLoading: usersLoading,
          error: usersError,
        },
        reposSearchStatus: {
          repos,
          isLoading: reposLoading,
          error: reposError,
        },
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

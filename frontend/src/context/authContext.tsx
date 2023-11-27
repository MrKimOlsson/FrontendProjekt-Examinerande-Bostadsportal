import React, { createContext, useContext, ReactNode, useEffect, useReducer } from "react";
import { getLoggedInUser } from "../api/handleUsers"; // Update the path accordingly
import { UnauthorizedError, ConflictError } from "../errors/http_errors";

// Define the user type
interface TUser {
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
  token: string;
}

interface AuthState {
  user: TUser | undefined;
  hasFetched: boolean;
}

type AuthAction =
  | { type: "SET_USER"; payload: TUser | undefined }
  | { type: "SET_LOGGED_IN_USER"; payload: TUser };

const defaultState: AuthState = {
  user: undefined,
  hasFetched: false,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        hasFetched: true,
      };

    case "SET_LOGGED_IN_USER":
      return {
        ...state,
        user: action.payload,
        hasFetched: true,
      };

    default:
      return state;
  }
};

const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}>({
  state: defaultState,
  dispatch: () => {},
});

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, defaultState);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedToken = localStorage.getItem("token");

        if (storedToken) {
          const userData = await getLoggedInUser(storedToken);
          dispatch({ type: "SET_USER", payload: userData });
        }
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          // Handle unauthorized error (e.g., redirect to login)
        } else if (error instanceof ConflictError) {
          // Handle conflict error (e.g., show a message to the user)
        } else {
          // Handle other errors
        }
      }
    };

    fetchUserData();
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };

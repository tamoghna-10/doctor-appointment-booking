const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  interface AuthAction {
    type: string;
    payload?: unknown;
  }
  
  const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          isAuthenticated: false,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
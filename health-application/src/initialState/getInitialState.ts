// initialState.js

const initialState = {
    user: {
      isAuthenticated: false,
      details: null,
    },
// suppose this is a different initial state 
    transactions: {
      list: [],
      loading: false,
      error: null,
    },

    // this is again a different initial state 
    filters: {
      status: "all",
      dateRange: {
        start: null,
        end: null,
      },
    },
  };
  
  export default initialState;
  
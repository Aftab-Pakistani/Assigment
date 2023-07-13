const initialState = {
  loading: false,
  error: false,
  data: [],
  errorMsg: null,
};

export const VenueApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state, 
        loading: true,
        error: false,
        data: []
      };
    case "RESPONSE":
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
        data: []
      };
    default:
      return state;
  }
};

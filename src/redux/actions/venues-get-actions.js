import { Venues } from "../constants/api";

export const VenueApi = () => {
  return async (dispatch) => {
    dispatch({
      type: "REQUEST",
    })
    try {
      let response = await fetch(
        Venues
      );
      let data = await response.json();
      dispatch({
        type: "RESPONSE",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "ERROR",
        payload: error,
      });
    }
  };
};

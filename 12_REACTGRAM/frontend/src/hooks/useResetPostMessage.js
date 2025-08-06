import { resetMessage } from "../slices/postSlice";

export const useResetPostMessage = (dispatch) => {
  return () => {
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000);
  };
};

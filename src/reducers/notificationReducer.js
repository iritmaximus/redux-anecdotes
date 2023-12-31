import { createSlice } from "@reduxjs/toolkit";


const initialState = "LolLol";

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return "";
    }
  }
});

export const sendNotification = (notification, timeoutSeconds) => {
  return async dispatch => {
    dispatch(setNotification(notification)); 
    console.log("not", notification)
    setTimeout(() => {
      dispatch(clearNotification());
    }, timeoutSeconds * 1000);
  }
}

export const { setNotification, clearNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

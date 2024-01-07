import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const voceSlice = createSlice({
  name: 'voiceState',
  initialState: {
    modal: false,
    voices: [],
  },
  reducers: {
    add(state, action) {
      return [...state, action.payload];
    },
    // modalShow(state, action) {
    //   state.modal = action.payload;
    // },
    bikeList(state, action) {
      console.log('state', state);
      return state.bikes;
      // state.bike
      // const unic = state.bike.find(el => el._id === action.payload._id);
      // if (unic) {
      //   state.favorite = state.bike.filter(el => el._id !== unic._id);
      //   Notify.success('Delete with favorite');
      // } else {
      //   state.bike = [...state.bike, action.payload];
      //   Notify.success('Add to favorite');
    },
  },
});
export const { modalShow, add } = voceSlice.actions;

export const voiceReducer = voceSlice.reducer;

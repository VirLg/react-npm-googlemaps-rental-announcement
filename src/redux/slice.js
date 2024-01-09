import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const voceSlice = createSlice({
  name: 'voiceState',
  initialState: {
    modal: false,
    voices: [],
    map: [],
  },
  reducers: {
    startValue(state, action) {
      state.map = action.payload;
    },
    add(state, action) {
      const unic = state.map.features.findIndex(
        el => action.payload.regionId === el.id
      );
      state.map.features[unic]?.voice
        ? state.map.features[unic]?.voice.push(action.payload.voice[0])
        : (state.map.features[unic]['voice'] = [action.payload.voice[0]]);
    },

    modalShow(state, action) {
      state.modal = action.payload;
    },
  },
});
export const { modalShow, add, startValue } = voceSlice.actions;

export const voiceReducer = voceSlice.reducer;

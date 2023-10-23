// reducers.js
import {createSlice} from '@reduxjs/toolkit';

type State = {
  nav: {
    origin: unknown;
    destination: unknown;
    travelTimeInformation: unknown;
  };
};

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navSlicer = createSlice({
  name: 'nav',
  initialState: initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setDestination: (state, action) => {
      state.destination = action.payload;
    },

    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {setOrigin, setDestination, setTravelTimeInformation} =
  navSlicer.actions;

//Selectors
export const selectOrigin = (state: State) => state.nav.origin;
export const selectDestination = (state: State) => state.nav.destination;
export const selectTravelTimeInformation = (state: State) =>
  state.nav.travelTimeInformation;

export default navSlicer.reducer;

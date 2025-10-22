import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "./store";
export interface UserData {
  bio?: string;
  avatarUrl?: string;
  backImageUrl?: string;
  uid: string;
  username: string;
  email: string;
  createdAt: number;
  piAddress?: string;
}

export interface UserGlobalData {
  user: User;
  userData: UserData;
}

interface DreamWorldState {
  userGlobalData: UserGlobalData | null;
  
}

const initialState: DreamWorldState = {
 
  userGlobalData: null,
 
};


export const DreamWorldSlice = createSlice({
  name: "dreamworld",
  initialState,
  reducers: {
    
    setUserGlobalData: (
      state,
      action: PayloadAction<UserGlobalData | null>
    ) => {
      state.userGlobalData = action.payload;
    },
   
    updateUserData: (state, action: PayloadAction<Partial<UserData>>) => {
      if (state.userGlobalData && state.userGlobalData.userData) {
        state.userGlobalData.userData = {
          ...state.userGlobalData.userData,
          ...action.payload,
        };
      }
    },
   
   
  },
});

export const {
  
  setUserGlobalData,
  updateUserData,
 
} = DreamWorldSlice.actions;

export const selectUserGlobalData = (state: RootState) =>
  state.dreamworld.userGlobalData;

export default DreamWorldSlice.reducer;

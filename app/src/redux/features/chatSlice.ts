import { MODEL_PROVIDERS } from "@/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type chatState = {
  activeModel: string;
};

const initialState: chatState = {
  activeModel: MODEL_PROVIDERS[0]?.value as string
};

const chatSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActiveModel: (state, action: PayloadAction<string>) => {
      state.activeModel = action.payload;
    }
  }
});

export const { setActiveModel } = chatSlice.actions;
export default chatSlice.reducer;

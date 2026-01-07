import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ActivePreviewType = { url: null | string; type: string | null };

type chatState = {
  activePreview: ActivePreviewType;
};

const initialState: chatState = {
  activePreview: { url: null, type: null }
};

const chatSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setActivePreview: (state, action: PayloadAction<ActivePreviewType>) => {
      state.activePreview = action.payload;
    }
  }
});

export const { setActivePreview } = chatSlice.actions;
export default chatSlice.reducer;

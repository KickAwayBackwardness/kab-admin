import { createSlice } from "@reduxjs/toolkit";
import {
  BULLETLIST,
  DEVIDER,
  NUMBERLIST,
  PHARAGRAPH,
  PHOTO,
  SIGNATURE,
} from "../utils/newPostSchema";

const initialState = {
  fieldList: [PHARAGRAPH],
  genreral: {
    type: "Review",
    topic: "Beauty",
  },
  newsHeading: {
    title: "New Heading Diary 3",
    decscription:
      "The mystery behind the contaminated ingredients in Prisma City has been solved, now it’s time to mark the occasion with some ramen!",
    isFirst: true,
  },
  cover: {
    url: "https://a.storyblok.com/f/165555/903x545/93b3cedb53/unnamed-1.png/m/1440x745/smart/filters:quality(85)",
    name: "New Heading Diary 3",
  },
};

const addNewPostSlice = createSlice({
  name: "addNewPostSlice",
  initialState,
  reducers: {
    removeField: (state, action) => {
      state.fieldList.splice(action.payload, 1);
    },

    addField: (state, action) => {
      switch (action.payload) {
        case "PHOTO":
          state.fieldList.push(PHOTO);
          break;
        case "DEVIDER":
          state.fieldList.push(DEVIDER);
          break;

        case "SIGNATURE":
          state.fieldList.push(SIGNATURE);
          break;
        case "NUMBERLIST":
          state.fieldList.push(NUMBERLIST);
          break;
        case "BULLETLIST":
          state.fieldList.push(BULLETLIST);
          break;

        default:
          state.fieldList.push(PHARAGRAPH);
          break;
      }
      state.fieldList = [...state.fieldList];
    },

    inputData: (state, action) => {
      const { index } = action.payload;

      state.fieldList.splice(index, 1, action.payload.data);
    },
    preview: (state) => {
      const data = {
        genreral: { ...state.genreral },
        newsHeading: { ...state.newsHeading },
        cover: { ...state.cover },
        fieldList: [...state.fieldList],
      };
      localStorage.setItem("preview", JSON.stringify(data));
      window.open("/newspaper/preview/sec", "_blank");
    },
  },
});

export const { removeField, addField, inputData, preview } =
  addNewPostSlice.actions;

export default addNewPostSlice.reducer;

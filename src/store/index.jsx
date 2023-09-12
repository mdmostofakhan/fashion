import { configureStore } from "@reduxjs/toolkit";
// import { userSlice } from "./slices/UserSlices";
import UserSlices from "./slices/UserSlices";
import CategorySlices from "./slices/CategorySlices";
import ItemsSlices from "./slices/ItemsSlices";

const store = configureStore({
  reducer: {
    users: UserSlices,
    categories: CategorySlices,
    items: ItemsSlices,
  },
});

export default store;

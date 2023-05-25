import conditionStore from "./conditions";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        conditionStore,
    },
});

export default store;
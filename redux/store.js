import { configureStore } from "@reduxjs/toolkit";

import { changeAvatar } from "./AvatarChange";

export const store = configureStore({
    reducer: {
        'changeAvatar': changeAvatar.reducer
    }
})
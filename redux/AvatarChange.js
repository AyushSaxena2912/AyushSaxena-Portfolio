import {createSlice} from '@reduxjs/toolkit'

export const changeAvatar = createSlice({
    name: 'changeAvatar',
    initialState: {
        flag: false
    },
    reducers: {
        changeAvatarState (state, action) {
            state.flag = !state.flag
        }
    }
})

export const {changeAvatarState} = changeAvatar.actions;
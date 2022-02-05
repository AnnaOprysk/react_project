import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services";

const initialState = {
    users: [],
    status: null,
    error: null
}

export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const users = await userService.getAllUsers();
            return users;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const createNewUser = createAsyncThunk(
    'userSlice/createNewUser',
    async ({data}, {dispatch}) => {
        try {
            const newUser = await userService.createUser(data)
            dispatch(addUser({data: newUser}));
        } catch (e) {
            console.log(e);
        }
    }
);

export const deleteUserThunk = createAsyncThunk(
    'userSlice/deleteUserThunk',
    async ({id}, {dispatch}) => {
        try {
            await userService.deleteUser(id)
            dispatch(deleteCurrentUser({id}));
        } catch (e) {
            console.log(e);
        }
    }
)
const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({id:new Date(),...action.payload.data});
        },
        deleteCurrentUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled';
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload
        },
    }
});

const userReducer = userSlice.reducer;

export const {addUser,deleteCurrentUser} = userSlice.actions;
export default userReducer;
import {configureStore, createSlice} from '@reduxjs/toolkit';

interface userStateValue{
    username:string;
}

interface userState{
    value:userStateValue
}

const initialState:userState={value:{username:""}};

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state : userState,action)=>{
            state.value = action.payload;
        },
        logout:(state : userState)=>{
            state.value=initialState.value
        }
    }
});

export const {login,logout}=userSlice.actions;

export const store= configureStore({
    reducer:{
        user:userSlice.reducer,
    }
});
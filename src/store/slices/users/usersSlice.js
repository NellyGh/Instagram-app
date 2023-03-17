import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";


const usersSlice = createSlice({
    name:'users',
    initialState:{
        usersData:[],
        currentUser:null
    },
    reducers:{
        logIn(state,{payload:{email,password}}) {
            state.currentUser = state.usersData.find(user => (user.email === email || user.username === email) && user.password === password) ?? null
        },
        logOut(state) {
            state.currentUser = null
        },
        addPost(state,{payload}){
            const index = state.usersData.findIndex(el => el.id = state.currentUser.id)
            state.usersData[index].posts.unshift({...payload})
            state.currentUser.posts.unshift({...payload})
            
        },
        delPost(state, {payload}){
            const index = state.usersData.findIndex(el=> el.id = state.currentUser.id)
            state.usersData[index].posts= [...state.usersData[index].posts.filter(el=> el.id !== payload)]
            state.currentUser.posts= [...state.currentUser.posts.filter(el => el.id !== payload)]
        }   
    },
    extraReducers:{
        [fetchUsers.fulfilled]: (state,{payload}) => {
            return {
                ...state,
               usersData:[...payload]
                
            }
    }
    }
})


export const selectUsers = state => state.users

export const {logIn,logOut} = usersSlice.actions

export const usersReducer = usersSlice.reducer
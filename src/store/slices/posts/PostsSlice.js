import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postAPI";


const postSlice = createSlice({
    name:'posts',
    initialState:{
        isLoading:false,
        postsData: []
    },
    reducers: {
        addComment (state,{payload:{ id, userName, body }}) {
            const index = state.postsData.findIndex(post => post.id === id)
            state.postsData[index].comments.push({
                id: new Date().getTime().toString(),
                body, userName
            })
        },
        addPost(state, {payload}){
            state.postsData.unshift({...payload})
        },
        delPost(state, {payload}){
            state.postsData = [...state.postsData.filter(el => el.id !== payload)]
        }
    },

    extraReducers:{
        [fetchPosts.pending]:(state,{payload}) =>{
                return {
                    ...state,
                    isLoading: true
                }
                // alert('loading')
        },
        [fetchPosts.fulfilled]: (state,{payload}) => {
                return {
                    ...state,
                    postsData:[...payload],
                    isLoading:false
                }
        }
    }
    
})

export const selectPosts = state => state.posts

export const {addComment} = postSlice.actions

export const postsReducer = postSlice.reducer
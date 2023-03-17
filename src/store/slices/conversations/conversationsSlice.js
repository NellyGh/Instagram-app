import { createSlice } from "@reduxjs/toolkit";


const conversationsSlice = createSlice({
    name:'conversations',
    initialState:{
        allMessages:[],
        currentDialog:[],
        toMessage:null,
        fromMessage:null
    },
    reducers:{
        addMessage(state,{payload}){
              return {
                ...state,
                currentDialog: [
                    ...state.currentDialog,
                    {
                        id:new Date().getTime().toString(),
                        fromUser: state.fromMessage,
                        toUser: state.toMessage,
                        message: payload,
                        time: new Date().getHours().toString() + ":" +  new Date().getMinutes().toString()
                    }
                         
                ],
                allMessages: [
                    ...state.allMessages,
                    {
                        id:new Date().getTime().toString(),
                        fromUser: state.fromMessage,
                        toUser: state.toMessage,
                        message: payload,
                        time: new Date().getHours().toString() + ":" +  new Date().getMinutes().toString()
                    }
                ]
            }     
        },
        logOutMess (state) {
            state.messageToUserId = null
            state.currentUserId = null
            state.currentDialog = []
            
        },
        chatTo(state,{payload}){
            state.toMessage = payload
            state.currentDialog = [

               ...state.allMessages.filter(message => (message.toUser === state.fromMessage && message.fromUser === payload) || (message.toUser === payload && message.fromUser === state.fromMessage))
            ]
            
            
        },
        currentUserMessage(state,{payload}){
            state.fromMessage = payload
        }
    }
})


export const selectConversations = state => state.conversations

export const {addMessage,chatTo,currentUserMessage,logOutMess} = conversationsSlice.actions

export const conversationsReducer = conversationsSlice.reducer

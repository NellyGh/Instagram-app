import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { addPost } from "./middleware/addPostMiddleware";
import { delPost } from "./middleware/deletePostMiddleware";
import ignoreEmptyChatInput from "./middleware/middlawareChatInput";
import { ignoreEmptyInput } from "./middleware/middlawareInput";
import { ignoreProbelSearch } from "./middleware/middlewareSearch";
import { conversationsReducer } from "./slices/conversations/conversationsSlice";
import { postsReducer } from "./slices/posts/PostsSlice";
import { searchReducer } from "./slices/search/searchSlice";
import { usersReducer } from "./slices/users/usersSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'

  const persistConfig = {
    key: 'InstagramFromNelly.am',
    storage,
  }

  const rootReducer = combineReducers({
        posts: postsReducer,
        search: searchReducer,
        users: usersReducer,
        conversations: conversationsReducer
    })

    const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
    reducer: persistedReducer ,
    middleware:(getDefaultMiddleware) => {
        return [
            ...getDefaultMiddleware(
                {
                    serializableCheck: {
                      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }
            ),
            ignoreProbelSearch,
            ignoreEmptyInput,
            ignoreEmptyChatInput,
            addPost,
            delPost
        ]
    }
})

export const persistor = persistStore(store)
export default store







// import { combineReducers, createStore } from "redux";
// import IMAGES from "../images";


// const store = createStore((state, action) => {
//     switch (action.type) {

//         default:
//             return state
//     }
// }, {
//     users: [
//         {
//             id: '1',
//             name: 'user1',
//             avatar: IMAGES.cover1,
//             postsCount: '3',
//             followers: '188',
//             following: '206',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         },
//         {
//             id: '2',
//             name: 'user2',
//             avatar: IMAGES.cover2,
//             postsCount: '3',
//             followers: '188',
//             following: '206',
//             likes: '80',
//             commentsCount: '5',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5',
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         },
//         {
//             id: '3',
//             name: 'user3',
//             avatar: IMAGES.cover3,
//             postsCount: '3',
//             followers: '188',
//             following: '206',
//             likes: '80',
//             commentsCount: '5',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         },
//         {
//             id: '4',
//             name: 'user4',
//             avatar: IMAGES.cover4,
//             postsCount: '3',
//             followers: '188',
//             likes: '80',
//             commentsCount: '5',
//             following: '206',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }

//             ]

//         },
//         {
//             id: '5',
//             name: 'user5',
//             avatar: IMAGES.cover5,
//             postsCount: '3',
//             followers: '188',
//             likes: '80',
//             commentsCount: '5',
//             following: '206',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         }
//     ],
//     currentUser: {
//         id: '8',
//         name: 'modern_web_chanel',
//         avatar: IMAGES.profile_pic,
//         postsCount: '9',
//         followers: '160',
//         following: '128',
//         follow: false,
//         bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//         images:[
//             {
//                 postId: '1',
//                 img: IMAGES.cover10,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '2',
//                 img: IMAGES.cover12,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '3',
//                 img: IMAGES.cover11,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '4',
//                 img: IMAGES.cover9,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '5',
//                 img: IMAGES.cover8,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '6',
//                 img: IMAGES.cover7,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '7',
//                 img: IMAGES.cover6,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '8',
//                 img: IMAGES.cover5,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '9',
//                 img: IMAGES.cover4,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             }
//         ]

//     }
    
// }) 

// export default store
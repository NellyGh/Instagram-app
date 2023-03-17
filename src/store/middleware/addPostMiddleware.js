
export const addPost = ({dispatch}) => next => action => {
    if (action.type === 'addPost') {
        const {name,img,postText} = action.payload
        const post = {
            id: new Date().getTime().toString() + "_"+ name,
            name,postText,img,
            likesCount: Math.round(Math.random() * 200 + 300),
            timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes ago',
            comments:[]
        }
        console.log(post);
        dispatch({type:'posts/addPost', payload:post})
        dispatch({type:'users/addPost', payload: post})

        return
    }
    next(action)
}
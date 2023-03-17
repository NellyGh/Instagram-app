

export const delPost = ({dispatch}) => next => action => {
    if(action.type === 'delPost'){
        dispatch({type: 'posts/delPost', payload: action.payload})
        dispatch({type: 'users/delPost', payload: action.payload})

        return 
    }

    next(action)
}
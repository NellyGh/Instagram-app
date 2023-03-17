

export const ignoreEmptyInput = store => next => action =>{
    if (action.type === 'posts/addComment' && !action.payload.body.trim()) {
        return
    }
    next(action)
}
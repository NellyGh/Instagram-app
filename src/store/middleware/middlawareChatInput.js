 const ignoreEmptyChatInput = store => next => action =>{  
    if (action.type === 'conversations/addMessage' && !action.payload.trim()) {
        return
    }
    next(action)
}

export default ignoreEmptyChatInput
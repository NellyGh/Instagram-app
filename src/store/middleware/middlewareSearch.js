
export const ignoreProbelSearch = store => next => action =>{
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.replaceAll(' ', '')
    }
    next(action)
}




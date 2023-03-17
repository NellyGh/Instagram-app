import React, { memo, useEffect } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { addComment} from '../../store/slices/posts/PostsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'


function Form({id}) {
    // useEffect(()=>{
    //   console.log('form');
    // },[])
    const {currentUser} = useSelector(selectUsers)
    const formRef = useRef(null)
    const dispatch = useDispatch()
   
    const handleSubmit = (e) => {
        e.preventDefault()

        const [{value: body}] = formRef.current
        console.log(body);
        dispatch(addComment({
            id, body,
            userName: currentUser?.username
        }))
        formRef.current.reset()
    }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
         <div className="comment-wrapper">
            <img src={IMAGES.smile} className="icon" alt=""/>
            <input type="text" className="comment-box" placeholder="Add a comment"/>
            <button className="comment-btn">post</button>
        </div>
    </form>
  )
}

export default memo(Form)
import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { selectUsers } from '../../store/slices/users/usersSlice';
import './CreatePost.css'
const CreatePost = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formRef = useRef(null)
    const {currentUser} = useSelector(selectUsers)
    const handleSubmit = (e)=> {
        e.preventDefault()
        const [{value: img}, {value:postText}] = formRef.current
        dispatch({type:'addPost', payload:{img,postText,name:currentUser.username}})
        formRef.current.reset()
        navigate('/')
    }

    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form style={{marginTop: '50px'}} ref={formRef} onSubmit={handleSubmit} >
                <input className='login-input' placeholder='Add Image' /><br/><br/>
                <input className='login-input' placeholder='Add Description' /><br/><br/>
                <label className="input-file">
                    <input type="submit" style={{display:'none'}} name="file"/>		
                    <span>Add File</span>
                </label>
            </form>
        </div>
    );
}

export default CreatePost;

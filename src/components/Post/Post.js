import React, { useCallback, useEffect, useState } from 'react'
import { memo } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { addComment } from '../../store/slices/posts/PostsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Comments from '../Comments/Comments'
import Form from '../Form/Form'
// import ToggleComments from '../hoc/ToggleComments'



function Post({id, img, name, likesCount,comments, postText, timeAgo}) {
  // useEffect(()=>{
  //   console.log('Post');
  // },[])
  const [showComments, setShowComments] = useState(false)
  const toggleComments = useCallback(()=>{
          setShowComments(prev => !prev)
  },[])
  const {currentUser} = useSelector(selectUsers)
  return (
    <div className="post">
        <div className="info">
            <NavLink style={{textDecoration: 'none'}} to={`${id}/uniq`} className="user">
                <div className="profile-pic"><img src={currentUser?.avatar} alt="" /></div>
                <p className="username">{name}</p>
            </NavLink>
            <img src={IMAGES.option} className="options" alt=""/>
        </div>
        <img src={img} className="post-image" alt=""/>
        <div className="post-content">
            <div className="reaction-wrapper">
                <img src={IMAGES.like} className="icon" alt=""/>
                <img onClick={toggleComments} src={IMAGES.comment} className="icon" alt=""/>
                <img src={IMAGES.send} className="icon" alt=""/>
                <img src={IMAGES.save} className="save icon" alt=""/>
            </div>
            <p className="likes">{likesCount}</p>
          {!!postText.trim().length && <p className="description"><span>{name} </span> {postText}</p>}
            <p className="post-time">{timeAgo}</p>

            <>
               {showComments?
                 comments.map(comment => (
                    <Comments  key={comment.id} name={comment.userName} body={comment.body} />
                 )):''
               }
            </>
        </div>
        <Form  id={id}/>
    </div>
  )
}

export default memo(Post)
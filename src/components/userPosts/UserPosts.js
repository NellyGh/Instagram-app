

import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

function UserPosts({src,likes,comment,id}) {
  const dispatch = useDispatch()
 
  return (
    <>
         <div className="gallery-item">
            <img src={src} className="gallery-image" alt=""/>
            <div className="gallery-item-info">
                <ul>
                    <span onClick={()=>dispatch({type:"delPost",payload:id})} className='del'>X</span>
                    <li className="gallery-item-likes"><span >Likes</span> {likes}</li>
                    <li className="gallery-item-comments"><span >Comments</span> {comment}</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default memo(UserPosts)

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import IMAGES from '../../images'
import { logOutMess } from '../../store/slices/conversations/conversationsSlice'
import { logOut, logUot, selectUsers } from '../../store/slices/users/usersSlice'
import Posts from '../Posts/Posts'
import Stories from '../Stories/Stories'
import Suggestions from '../Suggestions/Suggestions'

function Main() {
    const {currentUser} = useSelector(selectUsers)
    const dispatch = useDispatch()
    const logoutFuc = () => {
        dispatch(logOut())
        dispatch(logOutMess())
    }
  return (
    <section className="main">
        <div className="wrapper">
            <div className="left-col">
                <Stories/>
                <Posts />
            </div>
            <div className="right-col">
                <span  className="profile-card">
                    <div className="profile-pic">
                        <img src={currentUser?.avatar} alt=""/>
                    </div>
                    <div>
                        <p className="username">{currentUser?.username}</p>
                        <p className="sub-text">{currentUser?.name}</p>
                    </div>
                    <button className="action-btn" onClick={logoutFuc}>switch</button>
                </span>
                <p className="suggestion-text">Suggestions for you</p> 
                 <Suggestions />
            </div>
        </div>
    </section>
  )
}

export default Main
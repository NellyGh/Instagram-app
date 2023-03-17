import React, { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../../store/slices/users/usersSlice';
import UserPosts from '../userPosts/UserPosts';
import './Profile.css'
const Profile = () => {
    const {currentUser} = useSelector(selectUsers)
    useEffect(()=>{
        console.log('profile');
    },[])

    return (
        <>
        <header>
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={currentUser?.avatar} width={300}  style={{objectFit:'contain'}}  height={100} alt=""/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{currentUser?.username}</h1>
                        <button className="btn profile-edit-btn">Edit Profile</button>
                        <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>
    
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><span className="profile-stat-count">{currentUser?.posts.length}</span> posts</li>
                            <li><span className="profile-stat-count">{currentUser?.followers}</span> followers</li>
                            <li><span className="profile-stat-count">{currentUser?.following}</span> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <h3>{currentUser?.name}</h3>
                        <p>{currentUser?.bio}</p>
                    </div>
                </div>
            </div>
        </header>
    
        <div className="container">
            <div className="gallery">
        {
            currentUser?.posts.map(el => (
                <UserPosts key={el.id}
                           src={el.img}
                           likes ={el.likesCount}
                           comments={el.comments.length}
                           id = {el.id}
                />
            ))
        }
        </div>
        </div>
    
        </>
    );
}

export default memo(Profile);

import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectUsers } from '../../store/slices/users/usersSlice'
import './UniqItem.css'

function UniqItem() {
    const {id} = useParams()
    const {usersData} = useSelector(selectUsers)
   
  return (
    <>
    <header>
        <div className="container">
            <div className="profile">
                <div className="profile-image">
                    <img src={usersData.find(el => el.id === id).avatar} alt=""/>
                </div>
                <div className="profile-user-settings">
                    <h1 className="profile-user-name">{usersData.find(el => el.id === id).name}</h1>
                </div>
                <div className="profile-stats">
                    <ul>
                        <li><span className="profile-stat-count">{usersData.find(el => el.id === id).posts}</span> posts</li>
                        <li><span className="profile-stat-count">{usersData.find(el => el.id === id).followers}</span> followers</li>
                        <li><span className="profile-stat-count">{usersData.find(el => el.id === id).following}</span> following</li>
                    </ul>
                </div>
                <div className="profile-bio">
                    <p>{usersData.find(el => el.id === id).bio}</p>
                    <button className='followBtn'>follow</button>
                </div>
            </div>
        </div>
    </header>

    <div className="container">
        <div className="gallery">
    {/* {
        usersData.find(el => el.id === id)?.posts.map(el => (
            <div key={el.id} className="gallery-item">
				<img src={el.img} className="gallery-image" alt=""/>
				<div className="gallery-item-info">
					<ul>
						<li className="gallery-item-likes"><span >Likes</span> {el.likesCount}</li>
						<li className="gallery-item-comments"><span >Comments</span> {el.comments.length}</li>
					</ul>
				</div>
			</div>
        ))
    } */}
    </div>
    </div>

    </>
  )
}

export default UniqItem
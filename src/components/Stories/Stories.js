import React from 'react'
import { useSelector } from 'react-redux'
import IMAGES from '../../images'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Story from '../Story/Story'

function Stories() {
    // const stories = [
    //     {
    //         id: '1',
    //         img: IMAGES.cover1,
    //         name: 'user_1'
    //     },
    //     {
    //         id: '2',
    //         img: IMAGES.cover2,
    //         name: 'user_2'
    //     },
    //     {
    //         id: '3',
    //         img: IMAGES.cover3,
    //         name: 'user_3'
    //     },
    //     {
    //         id: '4',
    //         img: IMAGES.cover4,
    //         name: 'user_4'
    //     },
    //     {
    //         id: '5',
    //         img: IMAGES.cover5,
    //         name: 'user_5'
    //     },
    //     {
    //         id: '6',
    //         img: IMAGES.cover6,
    //         name: 'user_6'
    //     },
    // ]
    const {usersData} = useSelector(selectUsers)
  return (
    <div className="status-wrapper">
        {
            usersData.map(el => <Story key={el.id} img={el.avatar} name={el.username} />)
        }
    </div>
  )
}

export default Stories
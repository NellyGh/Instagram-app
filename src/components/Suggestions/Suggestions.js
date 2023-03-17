import React from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import Suggestion from '../Suggestion/Suggestion'

function Suggestions() {
    const {usersData} = useSelector(selectUsers)
  return (
    <>
    {
        usersData.map(el => <Suggestion key={el.id} id={el.id} name={el.username} avatar={el.avatar} />)
    }
    </>
  )
}

export default Suggestions
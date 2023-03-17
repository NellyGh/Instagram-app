import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import { chatTo, currentUserMessage } from '../../store/slices/conversations/conversationsSlice'
import { memo, useEffect, useMemo } from 'react'

function MessengerPeoplesMessages() {
// 	const message = [
// 		{
// 			 id: '1',
// 			 img: IMAGES.cover1,
// 			 name: 'user_1',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '2',
// 			 img: IMAGES.cover2,
// 			 name: 'user_2',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '3',
// 			 img: IMAGES.cover3,
// 			 name: 'user_3',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '4',
// 			 img: IMAGES.cover4,
// 			 name: 'user_4',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '5',
// 			 img: IMAGES.cover5,
// 			 name: 'user_5',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '6',
// 			 img: IMAGES.cover6,
// 			 name: 'user_6',
// 			 active: 'Active 30m ago'
// 		}
//   ]
const {usersData,currentUser} = useSelector(selectUsers)
const dispatch = useDispatch()
useEffect(() => {
	dispatch(currentUserMessage(currentUser?.id))
},[currentUser])

const fileteredUsers = useMemo(()=> {
	 return [...usersData.filter(user => user.id !== currentUser?.id)]
},[usersData,currentUser])

  return (
	 <div className='Messenger-left-col-peoples-messages'>
		{
			fileteredUsers?.map(el => <MessengerPeoplesMessage key={el.id} userActive={el.userActive} id={el.id} img={el.avatar} name={el.name} active={el.active}/>)
		}
	 </div>
  )
}

export default memo(MessengerPeoplesMessages)


import { memo, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatTo, selectConversations } from '../../store/slices/conversations/conversationsSlice'
import ToggleBackground from '../hoc/ToggleBackground'
import './MessengerPeoplesMessage.css'
      
function MessengerPeoplesMessage({name,active,img,id,activeUser,ToggleBackground}) {
	const dispatch = useDispatch()
	const {toMessage} = useSelector(selectConversations)
	// useEffect(()=>{
	// 	console.log('pple');
	// },[])
	
  return (
	 <div onClick={() => {dispatch(chatTo(id)), ToggleBackground(id)}}  style={{
		backgroundColor: activeUser === toMessage ? "darkgrey" : "white",
	  }} className= 'Messenger-left-col-people-message'>
		<div className='Messsage-img'>
			<img src={img} alt=''/>
		</div>
		<div className='Message-info'>
			<p>{name}</p>
			<p>{active === 0 ? 'Active now' : active + ' Minutes ago'}</p>
		</div>
	 </div>
  )
}

export default ToggleBackground(memo(MessengerPeoplesMessage))


import { memo, useCallback, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatTo, selectConversations } from '../../store/slices/conversations/conversationsSlice'
// import ToggleBackground from '../hoc/ToggleBackground'
import './MessengerPeoplesMessage.css'
    
function MessengerPeoplesMessage({name,active,img,id}) {
	const dispatch = useDispatch()
	const {toMessage} = useSelector(selectConversations)
	useEffect(()=>{
		console.log('pple');
	},[])
	const [activeUser, setActiveUser] = useState(null)

	const ToggleBackground = (user) => {
		setActiveUser(user)
		}
	
  return (
	 <div onClick={() => (dispatch(chatTo(id)), ToggleBackground(id))}  style={{
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

export default memo(MessengerPeoplesMessage)


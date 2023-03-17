import './MessengerChatForm.css'
import IMAGES from '../../images'
import { memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage, currentUserMessage, selectConversations } from '../../store/slices/conversations/conversationsSlice'
import { selectUsers } from '../../store/slices/users/usersSlice'

function MessengerChatForm() {
	const formRef = useRef(null)
	const dispatch = useDispatch()
	const messages = useSelector(selectConversations)
	const {currentUser} = useSelector(selectUsers)

	// console.log(messages);
	const handleSubmit = (e) => {
		e.preventDefault()
		const [{value: body}] = formRef.current
		// dispatch(currentUserMessage(currentUser.username))
		dispatch(addMessage(body))
		formRef.current.reset()
	}
  return (
	 <form ref={formRef} className='Chat-input'  onSubmit={handleSubmit} >
		<input type='text'  placeholder='Message...'/>
		<img src={IMAGES.like} alt=''/>
	 </form>
  )
}

export default memo(MessengerChatForm)



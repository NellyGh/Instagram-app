import { useEffect, useRef } from 'react';
import { memo } from 'react';
import {  useSelector } from 'react-redux'
import {selectConversations } from '../../store/slices/conversations/conversationsSlice'
import './MessengerChat.css'

function MessengerChat() {
  const {currentDialog,toMessage,fromMessage} = useSelector(selectConversations)
  console.log(currentDialog);
  
  return (
	 <div className='MessengerChat'>     
        {
          currentDialog.map(message => (
                <div key={message.id} style={{display:'grid',justifyContent: message.fromUser === fromMessage? 'flex-end' : 'flex-start'}}>
                    <p className={(message.fromUser === fromMessage && 'current') + ' message_type'}>{message.message}</p>
                    <span style={{textAlign: message.fromUser === fromMessage ? 'right' : 'left', margin:message.fromUser === fromMessage ?'0 15px 0  0':'0 0 0 15px'}}>{message.time}</span>
                </div>
             )) 
        }
	 </div>
  )
}

export default memo(MessengerChat)



import './Notifications.css'
import IMAGES from '../../images'
import { useSelector } from 'react-redux'
import NotificationItem from '../NotificationItem/NotificationItem'
import { selectUsers } from '../../store/slices/users/usersSlice'
function Notifications() {
	const {usersData} = useSelector(selectUsers)
  return (
	 <div className='Notification'>
		<div className='Notification-body'>
			<h1>Notification</h1>
			<div className='Notic-this'>
				<h2>This Week</h2>
				{
					usersData.map(el => <NotificationItem key={el.id} img={el.avatar} name={el.name}/>)
				}
			</div>
			<div className='Notic-this'>
				<h2>This Month</h2>
				{
					usersData.map(el => <NotificationItem key={el.id} img={el.avatar} name={el.name}/>)
				}
			</div>
			<div className='Notic-this'>
				<h2>Earlier</h2>
				{
					usersData.map(el => <NotificationItem key={el.id} img={el.avatar} name={el.name}/>)
				}
			</div>
		</div>
	 </div>
  )
}

export default Notifications

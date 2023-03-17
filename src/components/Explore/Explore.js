import { useSelector } from 'react-redux'
import { selectUsers } from '../../store/slices/users/usersSlice'
import ExploreItem from '../ExploreItem/ExploreItem'
import './Explore.css'

function Explore() {
	const {usersData} = useSelector(selectUsers)
	
  return (
	 <div className='container Explore'>
		<div className='gallery'>
			{
				usersData.map(el => <ExploreItem key={el.id} img={el.avatar} following={el.following} followers={el.followers}/>)
			}
			
		</div>
	 </div>
  )
}

export default Explore

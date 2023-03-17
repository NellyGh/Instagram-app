import './ExploreItem.css'

function ExploreItem({img,following,followers}) {
  return (
	 <div className='gallery-item'>
		<img style={{width: '297px', height:'292px'}} src={img} alt=''/>
		<div className="gallery-item-info">
					<ul>
						<li className="gallery-item-likes"><span >Following</span> {following}</li> 
						 <li className="gallery-item-comments"><span >Followers</span> {followers}</li>
					</ul>
		</div>
	 </div>
  )
}

export default ExploreItem

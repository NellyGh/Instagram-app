import React, { useEffect } from 'react'
import { memo } from 'react'

function Comments({name, body}) {
  useEffect(()=>{
    console.log('comments');
  },[])
  return (
    <>
        <p className="description"><span>{name} </span> {body}</p>
    </>
  )
}

export default memo(Comments)
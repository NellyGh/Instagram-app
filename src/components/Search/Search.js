import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearch, toggleSearch } from '../../store/slices/search/searchSlice'

function Search() {
    const search = useSelector(selectSearch)
    const dispatch = useDispatch()
  return (
    <>
        <input type="text" value={search} onChange={(e)=>dispatch(toggleSearch(e.target.value))} className="search-box" placeholder="search"/>
    </>
  )
}

export default memo(Search)


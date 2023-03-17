import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IMAGES from '../../images'
import { fetchPosts } from '../../store/slices/posts/postAPI'
import { selectPosts } from '../../store/slices/posts/PostsSlice'
import { resetSearch, selectSearch } from '../../store/slices/search/searchSlice'
import Loading from '../Loading/Loading'
import Post from '../Post/Post'

function Posts() {
    // const posts = [
    //     {
    //         id: '1',
    //         img: IMAGES.cover1,
    //         name: 'user1',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'

    //     },
    //     {
    //         id: '2',
    //         img: IMAGES.cover2,
    //         name: 'user2',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '3',
    //         img: IMAGES.cover3,
    //         name: 'user3',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     },
    //     {
    //         id: '4',
    //         img: IMAGES.cover4,
    //         name: 'user4',
    //         likesCount: '1,200',
    //         postText: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?',
    //         timeAgo: '2 Minutes Ago'
    //     }
    // ]
    const dispatch = useDispatch()
    const {postsData:posts,isLoading} = useSelector(selectPosts)
    const search =useSelector(selectSearch)
    // console.log(isLoading);
    useEffect(()=>{
      console.log('Posts');
    },[])
    useEffect(()=>{
        if (!posts.length) {
            dispatch(fetchPosts())
        }
        return ()=>{
            dispatch(resetSearch())
        } 
    },[])

    const filteredPosts = useMemo(()=>{
        return [...posts.filter(post => post.name.includes(search))]
    },[search,posts])

  return (
    <>
        {
          isLoading ? <Loading/> : 
          filteredPosts.map(el => 
          <Post key={el.id} 
          id={el.id} 
          comments={el.comments} 
          img={el.img} 
          name={el.name} 
          likesCount={el.likesCount} 
          postText={el.postText} 
          timeAgo={el.timeAgo} />)
        }
    </>
  )
}

export default Posts
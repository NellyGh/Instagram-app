import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async function () {
            const {data:usersData} = await axios.get('https://jsonplaceholder.typicode.com/users')
            const {data: postsData} = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=500')


            const data = usersData.map(user =>({
                id: user.id.toString(),
                name: user.name,
                username: user.username.toLowerCase(),
                email: user.email,
                active: Math.round(Math.random() * 10 ),
                password: user.address.city.toLowerCase(),
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAd7SeoDA2PxCcdbtBxBAHYw1xiP_CpXmRFyKSyyiC2Pr_A_vf34p816fwajWCCR9eHBo&usqp=CAU',
                followers: Math.round(Math.random() * 500 + 100),
                following: Math.round(Math.random() * 500 + 100),
                bio: user.company.catchPhrase + '\n' + user.company.bs,
                posts: [
                    ...postsData.filter(post => post.albumId === user.id).
                                map(post =>({
                                    id: post.id.toString() + '_' + user.username.toLowerCase(),
                                    name:user.username.toLowerCase(),
                                    postText: post.title.split(' ').slice(1).join(' '),
                                    img: post.url,
                                    likesCount: Math.round(Math.random() * 200 + 300),
                                    timeAgo: Math.round(Math.random() * 8 + 2) + ' Minutes ago',
                                    comments:[]
                                }))
                ]
            }))

            // console.log(data);
            return data
    }
)
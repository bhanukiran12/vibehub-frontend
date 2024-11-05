import HeaderComponent from '../../components/Header'
import LeftSidebar from '../../components/LeftSidebar';
import RightSidebar from '../../components/RightSidebar';
import PostCard from '../../components/PostCard'
import { FaImage, FaVideo, FaSmile, FaMapMarkerAlt } from 'react-icons/fa';
import Cookies from 'js-cookie'
import { getPosts } from '../../redux/PostRelated/postHandle'
import { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './index.css'
const Home = () => {
    const { status, posts } = useSelector(state => state.posts)
    const dispatch = useDispatch()
    useEffect(() => { 
        const token= Cookies.get("vibehub")
        dispatch(getPosts(token))
        
    }, [])
    console.log(status)
    return (
        <div>
            <HeaderComponent />
            <div className="main-content">
            <LeftSidebar />
           
                {/* New Post Card */}
                <div>
      <div className="new-post-card">
        <input type="text" placeholder="What's on your mind?" className="new-post-input" />
        <div className="post-options">
          <FaImage /> <FaVideo /> <FaSmile /> <FaMapMarkerAlt />
          <button className="post-btn">Post</button>
        </div>
                    
                </div>
                <ul className='post-list'>
                {status === 'Success' && posts.map(each => <li className='post-item'>

                        <PostCard post={each} />
                    </li>)
                }
                </ul> 
                </div>
           
       
     
      
      <RightSidebar />
    
            </div>
            </div>
        )

}
export default Home
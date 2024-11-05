import './index.css'


const PostCard = props => {
    const { post } = props
    const { user, image, caption } = post
    return (
        <div className='post'>
            <h5>{user.username}</h5>
            <div>
                <img src={image} alt={caption} className="post-image" />
                <p>{ caption}</p>
            </div>
        </div>
    )

}
export default PostCard
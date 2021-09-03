// Write your JS code here
import './index.css'
// import BlogItemDetails from '../BlogItemDetails'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, author, title, imageUrl, avatarUrl, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="blog-card">
        <div className="image-container">
          <img src={imageUrl} alt="blog" className="image" />
        </div>
        <div className="content">
          <h1 className="heading"> {topic}</h1>
          <p className="desc"> {title} </p>
          <div className="profile">
            <img src={avatarUrl} className="logo" alt="logo" />
            <p className="heading"> {author} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

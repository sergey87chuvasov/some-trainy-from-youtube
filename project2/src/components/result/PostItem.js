const PostItem = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <p>{post.body}</p>
      </div>
    </div>
  )
}

export default PostItem

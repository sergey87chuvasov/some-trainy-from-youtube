import PostItem from './PostItem'

const Result = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Result

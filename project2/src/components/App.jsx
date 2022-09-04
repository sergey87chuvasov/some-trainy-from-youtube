import SearchField from './SearchField'
import styles from './App.module.scss'
import Result from './result/Result'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { PostService } from './services/post.service'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [posts, setPosts] = useState([])

  // react query
  const { data } = useQuery(
    ['get posts', searchTerm],
    () => PostService.getPosts(),
    {
      refetchOnWindowFocus: false
    }
  )

  const handleSearch = () => {
    setPosts(
      data.filter(post =>
        post.title.toLowerCase().includes(setSearchTerm.toLowerCase())
      )
    )
  }

  return (
    <div className={styles.main}>
      <SearchField
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
        refetch={handleSearch}
      />
      {posts.length ? (
        <Result posts={posts} />
      ) : searchTerm ? (
        <div>Posts not found</div>
      ) : null}
    </div>
  )
}

export default App

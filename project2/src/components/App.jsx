import SearchField from './SearchField'
import styles from './App.module.scss'
import Result from './result/Result'

import { useState } from 'react'
import { PostService } from './services/post.service'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  // react query
  const { data, isLoading, refetch } = useQuery(
    ['get posts', searchTerm],
    () => PostService.getPosts(),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      select: data =>
        data.filter(post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
  )
  return (
    <div className={styles.main}>
      {isLoading ? (
        <div>Loading...</div>
      ) : data?.length ? (
        <Result posts={data} />
      ) : (
        <>
          <SearchField setSearchTerm={setSearchTerm} refetch={refetch} />
          <div>Posts not found</div>
        </>
      )}
    </div>
  )
}

export default App

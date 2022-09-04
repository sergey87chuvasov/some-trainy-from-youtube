import axios from 'axios'

export const PostService = {
  async getPosts() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return data
  }
}

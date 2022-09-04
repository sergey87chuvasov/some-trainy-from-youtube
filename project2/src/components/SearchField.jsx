import { BsSearch } from 'react-icons/bs'
import styles from './SearchField.module.scss'
import logo from './../img/logo.png'

const SearchField = ({ setSearchTerm, refetch, searchTerm }) => {
  const handleEnterSearch = e => {
    if ((e.key = 'Enter')) {
      refetch()
    }
  }

  return (
    <div>
      <img
        src={logo}
        alt='logo pic'
        style={{
          margin: '0 auto',
          display: 'block'
        }}
      />
      <label className={styles.field}>
        <BsSearch />
        <div>
          <input
            type='text'
            placeholder='Enter search ter...'
            onKeyDown={handleEnterSearch}
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
          />
        </div>
      </label>
    </div>
  )
}

export default SearchField

import { useState } from "react"
import search from '../images/search.png'

const SearchBar = ({filterStories}) => {
    console.log("filterStories", filterStories)
    const [ searchQuery, setSearchQuery ] = useState("")
    const [ errorMessage, setErrorMessage ] = useState("")
   
    const searchStories = (event) => {
        event.preventDefault()
        if (searchQuery === '' || searchQuery === ' ') {
            if (event.key === 'Enter' || event.keyCode === 13 || event.type === 'click') {
                setErrorMessage('Please fill out search input.')
            }
        }
        filterStories(searchQuery)
        setSearchQuery("")
    }

  return (
    <form>Search bar
            <input
            data-test='searchbar'
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            {/* don't want to navigate to new page but want to show so a function? ask chat about this... create a func */}
            <button tabindex='0' data-test='search-button' className='search-img-background' type="submit" value='submit' onClick={(e) =>  searchStories(e)}>
                <img data-test='search-icon' src={search} alt='Search Icon'></img>
            </button>
            {errorMessage && <h2 data-test='search-error-message' className='error-message'>{errorMessage}</h2>}
      </form>
  )
}

export default SearchBar

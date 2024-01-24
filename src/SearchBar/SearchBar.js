import { useState } from "react"
import search from '../images/search.png'
import './SearchBar.scss'

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
    <form>
        <div className="searchinput-img-container">
            <input
            data-test='searchbar'
            className="searchbar"
            type='text'
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            <button tabindex='0' data-test='search-button' className='search-img-background' type="submit" value='submit' onClick={(e) =>  searchStories(e)}>
                <img data-test='search-img' className="search-img" src={search} alt='Search Icon'></img>
            </button>
        </div>
        {errorMessage && <h2 data-test='search-error-message' className='error-message'>{errorMessage}</h2>}
      </form>
  )
}

export default SearchBar

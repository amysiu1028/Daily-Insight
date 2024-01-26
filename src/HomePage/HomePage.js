
import LeftColumnCategories from "../LeftColumnCategories/LeftColumnCategories"
import { useState, useEffect } from "react"
import './HomePage.scss'
import Articles from "../Articles/Articles"
import SearchBar from "../SearchBar/SearchBar"
import Header from "../Header/Header"
import './HomePage.js'
import { getAllStories } from "../apiCalls.js"

const HomePage = () => {
    const [ stories, setStories ] = useState([])
    const [ error, setError ] = useState("")

    useEffect(() => {
      getAllStories()
      .then(allStoryData => {
        setStories(allStoryData.articles)
      })
      .catch(error => {
        setError(error);
      });
    }, [])

    const handleCategoryClick = (response) => {
        setStories(response.articles)
      }

    const filterStories = (searchQuery) => {
      const displayFilteredStories = stories.filter((story) => {
        if (!story.author) {
          story.author = "";
        }
        return (
          story.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          story.description?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          story.author?.toLowerCase().includes(searchQuery.toLowerCase()) || 
          story.content?.toLowerCase().includes(searchQuery.toLowerCase())) 
      })
      setStories(displayFilteredStories)
    }

  return (
    <div>
      { error ? (<h2 data-test='error-message'>{`${error}`}</h2>) : (
        <div className="main-page">
          <div className="header-search-container">
            <Header/>
            <SearchBar filterStories={filterStories}/>
          </div>
          <div className="leftaside-articles-container">
            <LeftColumnCategories handleCategoryClick={handleCategoryClick}/>
            <Articles stories={stories}/>
          </div>
        </div>
      )}
      </div>
  )
}

export default HomePage
 
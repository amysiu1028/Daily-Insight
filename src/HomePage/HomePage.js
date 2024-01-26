
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
    
    useEffect(() => {
      getAllStories()
      .then(allStoryData => {
        console.log(allStoryData,"allStoryData")
        setStories(allStoryData.articles)
      })
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
  )
}

export default HomePage
 
//can filter based off of searchquery!
//https://newsapi.org/v2/everything?q=business&apiKey=3709c47b921c4a5b92f4cf84b4035408
//useEffects
import LeftColumnCategories from "../LeftColumnCategories/LeftColumnCategories"
import { useState, useEffect } from "react"
import './HomePage.scss'
import Articles from "../Articles/Articles"
import SearchBar from "../SearchBar/SearchBar"
import Header from "../Header/Header"
import './HomePage.js'
import { getGeneralStories } from "../apiCalls.js"

const HomePage = () => {

    const [ stories, setStories ] = useState([])

    const handleCategoryClick = (response) => {
        setStories(response.articles)
      }

    const handleHotTopicsClick = (hottopicData) => {
      console.log("hottopic",hottopicData)
      setStories(hottopicData.articles)
    }

    useEffect(() => {
      getGeneralStories()
      .then(generalStoryData => {
        setStories(generalStoryData.articles)
      })
    }, [])

    const filterStories = (searchQuery) => {
      const displayFilteredStories = stories.filter((story) => {

        if (!story.author) {
          story.author = "";
        }

        return (story.title.toLowerCase().includes(searchQuery.toLowerCase()) || story.description.toLowerCase().includes(searchQuery.toLowerCase()) || story.author.toLowerCase().includes(searchQuery.toLowerCase()) || story.content.toLowerCase().includes(searchQuery.toLowerCase())) 
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
        <LeftColumnCategories handleCategoryClick={handleCategoryClick} handleHotTopicsClick={handleHotTopicsClick}/>
        <Articles stories={stories}/>
      </div>
    </div>
  )
}

export default HomePage
 
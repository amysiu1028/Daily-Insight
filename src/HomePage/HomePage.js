//can filter based off of searchquery!
//https://newsapi.org/v2/everything?q=business&apiKey=3709c47b921c4a5b92f4cf84b4035408
//useEffects
import LeftColumnCategories from "../LeftColumnCategories/LeftColumnCategories"
import { getTopHeadlines } from "../apiCalls"
import sampleData from "../sampleData"
import { useState, useEffect } from "react"
import './HomePage.scss'
import sampleData from "../sampleData"
//rubbber duck! 
//create sample data for each... business, and things.. create a function... with search query? 
//rubber ask for help but also figure it out
const HomePage = () => {

    const [ stories, setStories ] = useState([])
    //what's going to change? 

    //search bar - in search bar news

    //news 

    //top headlines on mainpage
     //search bar
    //categories
    //section vh and vw 100%
    //section with column (left-column)

    //right column
    //colors democracy now


    //logo: 
    //business
    //entertainment
    //general
    //health
    //science
    //sports
    //technology
    useEffect(() => {
        // getTopHeadlines(business)
        // setStories(sampleData.articles)
        setStories(sampleData.articles)
        // .then(topHeadlineData => {
        //     console.log('topHeadline', topHeadlineData)

        // })
    }, [])

    console.log(stories,"stories")
  return (
    <div>
      <LeftColumnCategories stories={stories}/>
       {/* News  --> SingleNews */}
       
    </div>
  )
}

export default HomePage

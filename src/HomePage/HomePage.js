//can filter based off of searchquery!
//https://newsapi.org/v2/everything?q=business&apiKey=3709c47b921c4a5b92f4cf84b4035408
//useEffects
import LeftColumnCategories from "../LeftColumnCategories/LeftColumnCategories"
import { getTopHeadlines } from "../apiCalls"
import sampleData from "../generalData"
import { useState, useEffect } from "react"
import './HomePage.scss'
import general from "../generalData"
import health from "../healthData"
import business from "../businessData"
import Articles from "../Articles/Articles"
//rubbber duck! 
//create sample data for each... business, and things.. create a function... with search query? 
//rubber ask for help but also figure it out
const HomePage = () => {

    const [ stories, setStories ] = useState([])

    const handleCategoryClick = (clickedCategory) => {
      switch (clickedCategory) {
        case "general":
          setStories(general.articles)
          break;
          //When a break statement is encountered inside a switch case, it immediately exits the switch statement, and the control is transferred to the statement following the switch.
// Without break, the control would "fall through" to the next case, executing the code for that case as well.
        case "business": 
          setStories(business.articles)
          break;
        case "health":
          setStories(health.articles)
          break;
          //The default case is optional in a switch statement, and it is executed when none of the cases match the provided value.
          //the default case, in this context, is not strictly necessary since you are explicitly listing cases for known categories. However, it can be a good practice to include a default case to handle unexpected or undefined values, providing a fallback behavior.
        default:
          break;
      }
    }

    //logo: 
    //business
    //entertainment
    //general
    //health
    //science
    //sports
    //technology

    useEffect(() => {
        // getStories(business)
        // setStories(sampleData.articles)
        //sets initial page mount stories! Like first topic
        setStories(general.articles)
    }, [])

  return (
    <div>
      <LeftColumnCategories handleCategoryClick={handleCategoryClick}/>
      <Articles stories={stories}/>
      {/* set the stories... ? or should I do category? */}
       {/* News  --> SingleNews  stories={stories} */}
       
    </div>
  )
}

export default HomePage
 
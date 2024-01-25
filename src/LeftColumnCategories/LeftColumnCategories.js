import { useEffect } from "react"
import './LeftColumnCategories.scss'
import { NavLink, useLocation } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getStories, getGeneralStories } from "../apiCalls"

const LeftColumnCategories = ({handleCategoryClick}) => {
    const { category } = useParams()
    const location = useLocation();

    useEffect(() => {
      if (category) {
        getStories(category)
          .then(response => {
            console.log("response", response);
            handleCategoryClick(response);
          });
      } else {
        // If the location has changed due to search, fetch general stories
        if (location.pathname === '/source/general') {
          getGeneralStories()
            .then(response => {
              handleCategoryClick(response);
              // handleHotTopicsClick(hottopicsData);
            });
        }
      }
    }, [category, location.pathname]);    

  return (
    <aside className="categories">
        <NavLink to='/source/general'>General</NavLink>
        <NavLink data-test='business-link' to='/source/business'>Business</NavLink>
        <NavLink to='/source/health'>Health</NavLink>
        <NavLink to='/source/entertainment'>Entertainment</NavLink>
        <NavLink to='/source/science'>Science</NavLink>
        <NavLink to='/source/sports'>Sports</NavLink>
        <NavLink to='/source/technology'>Technology</NavLink>
    </aside>
  )
}

export default LeftColumnCategories

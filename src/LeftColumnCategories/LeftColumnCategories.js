

import { useEffect } from "react"
import './LeftColumnCategories.scss'
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { getStories, getGeneralStories } from "../apiCalls"

const LeftColumnCategories = ({handleCategoryClick,handleHotTopicsClick}) => {
    const { category } = useParams()
    console.log("category",category)

    useEffect(() => {
      if (category) {
        getStories(category)
          .then(response => {
            console.log("response", response);
            handleCategoryClick(response);
          });
      } else {
        getGeneralStories()
          .then(hottopicsData => {
            handleHotTopicsClick(hottopicsData)
          });
      }
    }, [category]);    

  return (
    <aside className="categories">
        <NavLink to='/'>Hot Topics</NavLink>
        <NavLink to='/source/business'>Business</NavLink>
        <NavLink to='/source/health'>Health</NavLink>
        <NavLink to='/source/entertainment'>Entertainment</NavLink>
        <NavLink to='/source/science'>Science</NavLink>
        <NavLink to='/source/sports'>Sports</NavLink>
        <NavLink to='/source/technology'>Technology</NavLink>
        {/* <NavLink to='/source/music'>Music</NavLink>
        <NavLink to='/source/art'>Art</NavLink> */}
    </aside>
  )
}

export default LeftColumnCategories

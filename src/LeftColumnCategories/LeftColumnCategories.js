

import { useEffect } from "react"
import './LeftColumnCategories.scss'
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"


const LeftColumnCategories = ({handleCategoryClick}) => {
    const { category } = useParams()
    console.log("category",category)

    useEffect(() => {
      console.log("Category changed:", category);
      handleCategoryClick(category)
  }, [category])

  return (
    <aside className="categories">
        <NavLink to='/' >Hot Topics</NavLink>
        {/* id={location.pathname === '/' ? 'active':''} */}
        <NavLink to='/source/business'>Business</NavLink>
        {/* id={location.pathname === '/search/business' ? 'active':''} */}
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

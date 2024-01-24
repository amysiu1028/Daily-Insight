
//first you want to create categoies, that have buttons where when you click you can navigate to that link
//lets try NavLink - Can change CSS colors

//accessibility 
//search bar 
//input

//3 sections
//header
//search bar
//categories that will have NavLink or Link

//NavLink: It is used to create navigation links. When a user clicks on a NavLink, it changes the URL in the browser without causing a full page reload. This is achieved using client-side routing, and only the components that need to be updated are re-rendered.

//Route: It is used to conditionally render components based on the current location (URL). When a Route matches the current URL, it renders its associated component. However, it does not cause a full page reload; it's still part of the client-side routing mechanism.

import { useState, useEffect } from "react"
import general from "../generalData"
import health from "../healthData"
import business from "../businessData"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"

//how to make it so when I click on a category, it will show the stories on the page, 
//I don't want to reload it? or do I?
//or when I search for it???

//how does the search work, finding all of the stories.. everything searching everything with those words

const LeftColumnCategories = ({handleCategoryClick}) => {
    const { category } = useParams()
    console.log("category",category)

    useEffect(() => {
      console.log("Category changed:", category);
      handleCategoryClick(category)
  }, [category])

  return (
    <aside>Categories Container with all NavLinks
        <NavLink to='/' >Hot Topics</NavLink>
        {/* id={location.pathname === '/' ? 'active':''} */}
        <NavLink to='/source/business'>Business</NavLink>
        {/* id={location.pathname === '/search/business' ? 'active':''} */}
        <NavLink to='/source/health'>Health</NavLink>

        {/*  if user clicks onto this link, these should show, the stories... */}
        {/* // const [ business, setBusiness ] = useState([])
    // const [ health, setHealth ] = useState([])
    // const [ entertainment, setEntertainment ] = useState([])
    // const [ science, setScience ] = useState([])
    // const [ sports, setSports ] = useState([])
    // const [ technology, setTechnology ] = useState([]) */}
    </aside>
  )
}

export default LeftColumnCategories


//first you want to create categoies, that have buttons where when you click you can navigate to that link
//lets try NavLink - Can change CSS colors

//accessibility 
//search bar 
//input

//3 sections
//header
//search bar
//categories that will have NavLink or Link

import { useState } from "react"
import search from '../images/search.png'

//how to make it so when I click on a category, it will show the stories on the page, 
//I don't want to reload it? or do I?
//or when I search for it???

//how does the search work, finding all of the stories.. everything searching everything with those words

const LeftColumnCategories = () => {
    const [ searchQuery, setSearchQuery ] = useState("")

    //categories will change
    const [ business, setBusiness ] = useState([])

  return (
    <aside>
        {/* make it a link */}
      <div>Daily Insight</div> 
      <div>Search bar
            <input
            data-test='searchbar'
            type='text'

            onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
            {/* don't want to navigate to new page but want to show so a function? ask chat about this... create a func */}
            <button tabindex='0' data-test='search-button' className='search-img-background' type="submit" value='submit' >
                <img data-test='search-icon' src={search} alt='Search Icon'></img>
            </button>
      </div>
      <div>Categories Container</div>
    </aside>
  )
}

export default LeftColumnCategories

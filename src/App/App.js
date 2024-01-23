//NEXT, with the categories, 
//routes
//Best practice: to have a separate component for your main content, such as a HomePage component, and use the App component for overall layout and routing. This approach follows the principle of component-based architecture and helps in organizing your code in a modular and maintainable way.

//Handles layout, overall structure, and routing.


//implement local storage
import HomePage from "../HomePage/HomePage"
import { Routes, Route } from "react-router-dom"
import './App.scss'

const App = () => {
  return (
    <main>
      {/* create a route with HomePage Component? */}
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* if you have a search option, you should put the category after the search ? */}
        <Route path='/source/:category' element={<HomePage/>}></Route>

      </Routes>
    </main>
  )
}

export default App

//cypress
//favicon
//Best practice: to have a separate component for your main content, such as a HomePage component, and use the App component for overall layout and routing. This approach follows the principle of component-based architecture and helps in organizing your code in a modular and maintainable way.

//implement local storage
import HomePage from "../HomePage/HomePage"
import { Routes, Route } from "react-router-dom"
import './App.scss'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/:source' element={<HomePage/>}></Route>
        <Route path='/source/:category' element={<HomePage/>}></Route>
      </Routes>
    </main>
  )
}

export default App

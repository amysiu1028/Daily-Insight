
import HomePage from "../HomePage/HomePage"
import NotFound from "../NotFound/NotFound"
import { Routes, Route } from "react-router-dom"
import './App.scss'

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/:source' element={<HomePage/>}></Route>
        <Route path='/source/:category' element={<HomePage/>}></Route>
        <Route path='/source/*' element={<NotFound/>}/>
      </Routes>
    </main>
  )
}

export default App

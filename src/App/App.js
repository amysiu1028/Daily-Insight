//routes
//Best practice: to have a separate component for your main content, such as a HomePage component, and use the App component for overall layout and routing. This approach follows the principle of component-based architecture and helps in organizing your code in a modular and maintainable way.

//Handles layout, overall structure, and routing.


//implement local storage
import HomePage from "../HomePage/HomePage"

const App = () => {
  return (
    <main>
      {/* create a route with HomePage Component? */}
      <HomePage/>
    </main>
  )
}

export default App

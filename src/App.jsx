
import { Outlet } from 'react-router-dom'
import './App.css'
import NavigationBar from './Shared/NavigationBar'

function App() {


  return (
    <div>
      <NavigationBar></NavigationBar>

      <Outlet></Outlet>
    </div>

  )
}

export default App

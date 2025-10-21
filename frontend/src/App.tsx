import './App.css'
import { Homepage } from './layouts/Homepage/Homepage'
import { Navbar } from './layouts/NavbarAndFooter/Navbar'

export const App = () => {

  return (
    <div className='d-flex flex-column min-vh-100'>
      <Navbar /> 
     <div className='flex-grow-1 content-settings container-fluid bg-body-tertiary'>
       <Homepage />
      </div>
      {/* footer */}
      Hello
    </div>
  )
}

export default App

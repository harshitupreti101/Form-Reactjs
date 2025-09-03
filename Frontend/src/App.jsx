import React from 'react'
import Form from './Components/Form/Form'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import ProfilePage from './Components/ProfilePage'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>   
  )
}

export default App
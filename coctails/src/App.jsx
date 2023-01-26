import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CoctailList from './components/coctailList/CoctailList'
import CoctailContent from './components/coctailContent/CoctailContent'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter >
    <div className="App">
      <Routes >
          <Route path="/" element={<CoctailList />}> </Route>
          <Route path="/:name" element={< CoctailContent/>}></Route>
      </Routes>
      
       
    </div>
    </BrowserRouter>
  )
}

export default App

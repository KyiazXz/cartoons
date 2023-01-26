
import './App.css'
import CoctailList from './components/coctailList/CoctailList'
import CoctailContent from './components/coctailContent/CoctailContent'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {

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

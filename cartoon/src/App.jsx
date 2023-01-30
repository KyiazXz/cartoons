
import './App.css'
import CardList from './components/cardlList/CardList'
import CardContent from './components/cardContent/CardContent'
import {BrowserRouter , Route , Routes} from 'react-router-dom'

function App() {

  return (
  <BrowserRouter >
    <div className="App">
      <Routes >
          <Route path="/" element={<CardList />}> </Route>
          <Route path="/:name" element={< CardContent />}> </Route>
      </Routes>
      
       
    </div>
    </BrowserRouter>
  )
}

export default App

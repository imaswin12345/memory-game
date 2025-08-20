import './App.css';
import MemoryGame from './components/MemoryGame';
import Reward from './components/Reward';
import { Routes,Route } from 'react-router-dom'

function App() {
  return (

    <div className='App'>

       <Routes>
        <Route path='/' element={<MemoryGame/>}/>
        <Route path='/reward' element={<Reward/>}/>
      </Routes>
     
       
    </div>
    
  );
}

export default App;

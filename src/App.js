import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Authentication  from './components/Authentication';
import SignUp from './components/SignUp';
import Home from './pages/Home';


import './App.css';

function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
     <Route path="/login" element={<Authentication/>}/>

     <Route path="/signup" element={<SignUp/>}/>
 </Routes>
        
        </BrowserRouter>
    </div>
  );
}

export default App;


import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Detail from './Detail';
import Home from './Home';
import Navbar from './Navbar';

import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/cart' element={<Cart/>}/>
                  </Routes> 
            <Routes>
            <Route path='/detail/:id' element={<Detail/>}/>
              </Routes>      
                  
          </div>
          </Provider>
  );
}

export default App;

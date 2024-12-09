import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './BookShop/Home'
import Catagories from './BookShop/Categories'
import BestSeller from './BookShop/BestSeller'
import Pages from './BookShop/Pages'
import All from './BookShop/All';
import Cook from './BookShop/Cook';



function App() {
  return (
    <div className="App">
      <RouterComponent/>
    </div>
  );
}

export default App;

function RouterComponent(){
  return(
    <div>
    <Routes>
      <Route path='/' element={<Navigate to={'/home'}/>} ></Route>
      <Route path='/' element={<Home/>}>
          <Route path='home' element={<All/>}/>
          <Route path='home' element={<Cook/>}/>
          <Route path='categories' element={<Catagories/>}/>
          <Route path='best' element={<BestSeller/>}/>
          <Route path='pages' element={<Pages/>}/>
      </Route>
  </Routes>
  </div>

  )
}


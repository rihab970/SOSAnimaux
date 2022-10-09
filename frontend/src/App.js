import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Accueil from './pages/Accueil';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AccueilPrinc from './pages/AccueilPrinc';
import Profile from './pages/Profile';
import Update from './pages/Update';
import Membres from './pages/Membres';
import Conseiller from './pages/Conseiller';
import Public from './pages/Public';
const App = () => {
  return (
    <Router>
      <Header />
    <main className='App'>
      <Routes>
      <Route path='/' element={ <Accueil/>} exact/>
      <Route path='/login' element={ <Login/>} />
      <Route path='/register' element={ <Register/>} />
      <Route path='/accueil' element={ <AccueilPrinc/>} />
      <Route path='/profile' element={ <Profile/>} />
      <Route path='/update' element={ <Update/>} />
      <Route path='/membres' element={ <Membres/>} />
      <Route path='/conseille' element={ <Conseiller/>} />
      <Route path='/publication' element={ <Public/>} />
      </Routes>
      
    </main> 
     <Footer />
    </Router>
  )
}

export default App

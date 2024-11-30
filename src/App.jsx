import './css/App.css'
import Favorite from './pages/Favorite'
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contexts/MovieContext'
import Navbar from './components/NavBar'

function App() {


 

  return (
    <MovieProvider> 
      <Navbar />
        <main className='main-content'>
           <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorite />}/>
           </Routes>
        </main>
    </MovieProvider>
  )
}


export default App

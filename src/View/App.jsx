import '../index.css'
import Logo from '../assets/Logo.svg'
import Person from '../assets/Person.svg'
import Cart from '../assets/Cart.svg'
import Likes from '../assets/Likes.svg'
import HomeView from './HomeView/HomeView'
import Basket from '../components/Basket/Basket.jsx'
import { useState } from 'react'
import { Routes , Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import CardView from './CardView/CardView.jsx'


function App() {
    const[open,setOpen] = useState(false)


    function Change(){
        setOpen(false)   
    }
  return (
    <div className='App'>
        <header className='header'>
            <div className="logoTypeBox">
                <Link to="/" className="logo">
                    <img src={Logo} alt="logo" />
                </Link>
                <div className="title">
                        <h3>SNEAKERS</h3>
                        <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <div className="navBox">
                <div className="cart">
                    <img onClick={()=>setOpen(!open)} src={Cart} alt=''/>
                    <a href='/'>0p</a>
                </div>
                <div className="likes">
                <img src={Likes} alt=''/>
                    <a href='/'>Закладки</a>
                    </div>
                <div className="profile">  
                <img src={Person} alt=''/>
                 <a href='/'>Профиль</a></div>
            </div>
        </header>
        {
        open?
        <Basket open={Change}/>
        :
        null
        }
        <section className='section'>
        <Routes>
            <Route path='/' element={<HomeView/>}/>
            <Route path='/:id' element={<CardView/>}/>
        </Routes>
        </section>
    </div>
  )
}

export default App
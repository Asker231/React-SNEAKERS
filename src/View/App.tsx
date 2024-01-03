import '../index.css'
import Logo from '../assets/Logo.svg'
import Person from '../assets/Person.svg'
import Cart from '../assets/Cart.svg'
import Likes from '../assets/Likes.svg'
import HomeView from './HomeView/HomeView'
import Basket from '../components/Basket/Basket'
import { useState } from 'react'

function App() {
    const[open,setOpen] = useState<boolean>(false)


    function Change(){

        setOpen(false)
        
    }
  return (
    <div className='App'>
        <header className='header'>
            <div className="logoTypeBox">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="title">
                        <h3>REACT SNEAKERS</h3>
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
        <HomeView/>
        </section>
    </div>
  )
}

export default App
import { useState,useEffect } from 'react'
import style from './home.module.css'
import Search from '../../assets/Search.svg'
import Card from '../../components/Card/Card'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Cards } from '../../components/Card/Card.prop'


function HomeView() {
  const[cards,setCard] = useState([])
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  useEffect(()=>{
      setCard(Cards)
      enableAnimations(true)
  },[])

  return (
    <section className={style.home}>
        <div className={style.slider}></div>
        <div className={style.cardSection}>
            <header className={style.header}>
                <h1>Все кроссовки</h1>
                 <div className={style.input}>
                       <img src={Search} alt="search"/>
                       <input type="text" placeholder='search...' /> 
                </div>   
     
            </header>
            <main ref={parent}
             className={style.main}>
                {
                  cards.map((el,ind)=>{
                    return <Card id={el.id} title={el.title} price={el.price} img={el.img}/>
                  })
                }
               
            </main>
        </div>
    </section>
  )
}

export default HomeView





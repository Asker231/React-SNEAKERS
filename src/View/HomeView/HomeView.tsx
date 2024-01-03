import { useState,useEffect } from 'react'
import style from './home.module.css'
import Search from '../../assets/Search.svg'
import Card from '../../components/Card/Card'
import { ICard } from '../../Model/CardModel'

import sneaker1 from '../../assets/sneakers/sneakers-1.jpg'
import sneaker2 from '../../assets/sneakers/sneakers-2.jpg'
import sneaker3 from '../../assets/sneakers/sneakers-3.jpg'
import sneaker4 from '../../assets/sneakers/sneakers-4.jpg'
import sneaker5 from '../../assets/sneakers/sneakers-5.jpg'
import sneaker6 from '../../assets/sneakers/sneakers-6.jpg'
import sneaker7 from '../../assets/sneakers/sneakers-7.jpg'
import sneaker8 from '../../assets/sneakers/sneakers-8.jpg'
import sneaker9 from '../../assets/sneakers/sneakers-9.jpg'
import sneaker10 from '../../assets/sneakers/sneakers-10.jpg'
import sneaker11 from '../../assets/sneakers/sneakers-11.jpg'
import sneaker12 from '../../assets/sneakers/sneakers-12.jpg'
import { useAutoAnimate } from '@formkit/auto-animate/react'




function HomeView() {

  const[cards,setCard] = useState<Array<ICard>>([])
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)
  useEffect(()=>{
      setCard([
        {img:sneaker1,title:"Мужские Кроссовки Nike Blazer Mid Suede",price:12_999,},
        {img:sneaker2,title:"Мужские Кроссовки Nike Air Max 270",price:12_999,},
        {img:sneaker3,title:"Мужские Кроссовки Nike Blazer Mid Suede",price:8_499,},
        {img:sneaker4,title:"Кроссовки Puma X Aka Boku Future Rider",price:0,},
        {img:sneaker5,title:"Мужские Кроссовки Under Armour Curry 8",price:0,},
        {img:sneaker6,title:"Мужские Кроссовки Nike Kyrie 7",price:0,},
        {img:sneaker7,title:"Мужские Кроссовки Jordan Air Jordan 11",price:0,},
        {img:sneaker8,title:"Мужские Кроссовки Nike LeBron XVIII",price:0,},
        {img:sneaker9,title:"Мужские Кроссовки Nike Lebron XVIII Low",price:0,},
        {img:sneaker10,title:"Мужские Кроссовки Nike Blazer Mid Suede",price:0,},
        {img:sneaker11,title:"Кроссовки Puma X Aka Boku Future Rider",price:0,},
        {img:sneaker12,title:"Мужские Кроссовки Nike Kyrie Flytrap IV",price:0,},

    
       
      ])
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
                    return <Card key={ind} img={el.img} title={el.title} price={100}/>
                  })
                }
            </main>
        </div>
    </section>
  )
}

export default HomeView





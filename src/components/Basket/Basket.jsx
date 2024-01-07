
import React, { useEffect, useState } from 'react'
import style from './basket.module.css'
import Basket_ from '../../assets/basket_.png'
import Exit from '../../assets/Exit.svg'

import { useSelector } from 'react-redux'
import {removeCard} from '../../ViewModel/store/slices/AddCard.js'
import {useAutoAnimate}from '@formkit/auto-animate/react'
import { useDispatch } from 'react-redux'

function Basket({open}) {
  const[arrCards,setCard] = useState([])
  const arraysSelector = useSelector(state=>state.cards.arrCard)
  const dispatch = useDispatch()
  const [parent, enableAnimations] = useAutoAnimate(true)
  useEffect(()=>{
    setCard(arraysSelector)
    enableAnimations(true)
  },[])
  return (
    <div 
     className={style.basketwrap}>
        <div ref={parent} className={style.basket}>   
                { 
                !arrCards.length ? <div className={style.wrap}>
                <img src={Basket_} alt="basket" /> 
                    <h1>Корзина пустая</h1>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <div onClick={()=>open()} className={style.button}>
                          Вернуться назад
                    </div>  
                </div> :<>
                <div className={style.hstack}><div onClick={()=>open()} className={style.close}>
                <img src={Exit} alt="exit" />
                </div></div>
                 <div className={style.cards}>
                {
                  arrCards.map((el)=>{
                    return <div className={style.item}>
                      <div className={style.imgs}>
                        <img src={el.img} alt="img" />
                      </div>
                      <span>{el.title}</span>
                      <div className={style.top}>
                      <div onClick={()=>dispatch(removeCard(el.id))} className={style.closes}>
                      <img src={Exit} alt="exit" />
                     </div>
                      </div>
                    </div>
                  })
                }
                
                <div className={style.pay}>
                {12_9000} руб.
                </div>
                 </div>
                 </> 
                }

        </div>
    </div>
  )
}
export default Basket
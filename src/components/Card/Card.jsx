import style from './card.module.css'
import Plus from '../../assets/Plus.svg'
import React from 'react'
import { useDispatch } from 'react-redux'
import {addCard} from '../../ViewModel/store/slices/AddCard'
import { Link } from 'react-router-dom'


function Card({id,img,title,price}) {
  const dispatch = useDispatch()

  return (
    <>
    <Link to={id} className={style.card}>
        <img src={img} alt="img" />
        <div className={style.title}>{title}</div>
        <div className={style.bottom}>
            <div className={style.left}>
                <span>ЦЕНА:</span>
                <h3>{price} руб.</h3>
            </div>
            <div  className={style.right}>
                    <img onClick={()=>dispatch(
                   addCard( { 
                    id,
                    title,
                    img,
                    price
                  })
                    )} src={Plus} alt="add" />
            </div>
        </div>
    </Link>
    </>
  )
}

export default Card
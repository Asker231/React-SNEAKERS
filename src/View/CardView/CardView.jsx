import React, { useEffect, useState } from 'react'
import style from './cardview.module.css'
import { useParams } from 'react-router-dom'
import { Cards } from '../../components/Card/Card.prop.js'

function CardView() {
  const[cardId,setCardId] = useState([Cards])

    const {id} = useParams()
    useEffect(()=>{
        setCardId([Cards])
    },[])
    
  return (
    <div className={style.CardView}>
      some
        {
          cardId.map((el,ind)=>{
     return <div key={ind}>
            <img src={el.img} alt="img" />
              <div >{el.title}</div>
              <div >
            <div >
                <span>ЦЕНА:</span>
                <h3>{el.price} руб.</h3>
            </div>
        </div>
    </div>
          }).filter((el)=>el.id == id)
        }
    </div>
  )

}

export default CardView
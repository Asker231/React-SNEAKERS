
import { ICard } from '../../Model/CardModel'
import style from './card.module.css'
import Plus from '../../assets/Plus.svg'


function Card(prop:ICard) {
  return (
    <div  className={style.card}>
        <img src={prop.img} alt="img" />
        <div className={style.title}>{prop.title}</div>
        <div className={style.bottom}>
            <div className={style.left}>
                <span>ЦЕНА:</span>
                <h3>{prop.price} руб.</h3>
            </div>
            <div className={style.right}>
                    <img src={Plus} alt="add" />
            </div>
        </div>
    </div>
  )
}

export default Card
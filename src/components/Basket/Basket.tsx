
import style from './basket.module.css'
import Basket_ from '../../assets/basket_.png'
interface IProp{
    open:()=>void
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Basket(open:IProp) {

  return (
    <div 
     className={style.basketwrap}>
        <div  className={style.basket}>
                <img src={Basket_} alt="basket" />    
                <div className={style.wrap}>
                    <h1>Корзина пустая</h1>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <div onClick={()=>open.open()} className={style.button}>
                          Вернуться назад
                    </div>  
                </div>

        </div>
    </div>
  )
}

export default Basket
import estilos from './CartWidget.module.css'
import { useCart  } from '../../context/CartContext';

const CartWidget = () => {

  return (
    <div className={estilos.container}><span className="material-symbols-outlined">
    shopping_bag
    </span>
    <p className={estilos.contador}>(<span >{0}</span>)</p>
    </div>
    
  )
}

export default CartWidget
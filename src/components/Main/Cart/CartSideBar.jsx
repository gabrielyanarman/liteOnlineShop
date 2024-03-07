import { useContext } from "react"
import { ForMainContext } from "../../../Contexts/Contexts"

function CartSideBar() {

	const [products, select, like, mainState,addCount,minusCount,toOrder] = useContext(ForMainContext)

	let totalCount = products.filter(product => product.selected).map((elem => {
		return elem.countOnCart
	})).reduce((acc,val) => acc + val,0)

	let totalPrice = products.filter(product => product.selected).map((elem => {
		return parseInt(elem.price)*elem.countOnCart
	})).reduce((acc,val) => acc + val,0)

    return (
			<div className='cartSideBar'>
				<div>
					<span>Товары, {totalCount} шт.</span> <span>{totalPrice} ₽</span>
				</div>
				<div>
					<h1>Итого</h1>
					<h1> {totalPrice} ₽</h1>
				</div>
				<button onClick={() => {
					alert('Ваш заказ оформлен')
					toOrder()
				}}>Заказать</button>
			</div>
		)
}

export default CartSideBar
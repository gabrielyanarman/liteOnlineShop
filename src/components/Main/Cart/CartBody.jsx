import { useContext } from "react"
import { ForMainContext } from "../../../Contexts/Contexts"

function CartBody() {
	const [products, select, like, mainState,addCount,minusCount] = useContext(ForMainContext)
    return (
			<div className='cartBody'>
				<h2>Корзина{` (${products.filter(product => product.selected === true).length})`}</h2>
				{products.filter(product => product.selected === true).map((elem) => {
					return (
						<div className='productOnCart'>
							<img alt='Product img' src={elem.src} />
							<span className='productName'>{elem.title}</span>
							<div className='productCount'>
								<button onClick={() => {
									minusCount(elem.id)
								}}>-</button>
								<span>{elem.countOnCart}</span>
								<button onClick={() => {
									addCount(elem.id)
								}}>+</button>
							</div>
							<span className='productPrice'>{`${parseInt(elem.price)*elem.countOnCart} ₽`}</span>
							<div className='productOnCart-btn'>
								<img onClick={() => {
									like(elem.id)
								}} src='./img/like.png' />
								<img onClick={() => {
									select(elem.id)
								}} src='./img/remove.png' />
							</div>
						</div>
					)
				})}
			</div>
		)
}

export default CartBody
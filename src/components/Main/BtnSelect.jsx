import { useContext } from "react"
import { ForMainContext } from "../../Contexts/Contexts"


function BtnSelect({ product }) {
	const [products, select] = useContext(ForMainContext)
	if (!product.selected) {
		return (
			<button
				onClick={evt => {
					select(product.id)
				}}
			>
				В корзину
			</button>
		)
	} else {
		return (
			<button
				style={{
					backgroundColor: '#551317',
					color: 'white',
				}}
				onClick={evt => {
					select(product.id)
				}}
			>
				В корзину
			</button>
		)
	}
}

export default BtnSelect
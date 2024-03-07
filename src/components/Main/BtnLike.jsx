import { useContext } from "react"
import { ForMainContext } from "../../Contexts/Contexts"


function BtnLike({ product }) {
	const [products, select, like] = useContext(ForMainContext)
	if (!product.like) {
		return (
			<button
				onClick={evt => {
					like(product.id)
				}}
			>
				Нравится
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
					like(product.id)
				}}
			>
				Нравится
			</button>
		)
	}
}

export  default BtnLike
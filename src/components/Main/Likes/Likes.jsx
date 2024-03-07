import { useContext } from "react"
import { ForMainContext } from "../../../Contexts/Contexts"
import Product from "../Product"
import './Likes.css'



function Likes() {
	const [products, select, like, mainState,addCount,minusCount] = useContext(ForMainContext)
    return (
			<div className='likes'>
				<h2>
					Мне Понравились
					{` (${products.filter(product => product.like === true).length})`}
				</h2>
				<div className="likes-product">
					{products
						.filter(product => product.like === true)
						.map(elem => {
							return <Product product={elem} key={elem.id} />
						})}
				</div>
			</div>
		)
}

export default Likes
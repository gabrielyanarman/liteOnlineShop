import { useContext, useRef } from 'react'
import './Main.css'
import Product from './Product'
import { ForMainContext } from '../../Contexts/Contexts'
import Cart from './Cart/Cart'
import Likes from './Likes/Likes'
import { memo } from 'react'



export default memo(function Main() {
    
	const [products, select, like, mainState] = useContext(ForMainContext)
	if (mainState === 'main') {
		return (
			<div className='main'>
				{products.map(product => {
					if (product.view) {
						return <Product product={product} key={product.id} />
					} else {
						return null
					}
				})}
			</div>
		)
	} else if (mainState === 'cart') {
		return <Cart />
	} else if (mainState === 'likes') {
		return <Likes />
	}
})

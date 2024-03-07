import { useContext } from "react"
import { ForHeaderContext } from "../../Contexts/Contexts"

 

function Icons() {
	const [products, search, searchText, searchFilter, changeMain] =
		useContext(ForHeaderContext)
    return (
			<div className='header-icons'>
				<div onClick={() => {
					changeMain('likes')
					search('')
				}} className='header-icon'>
					<img src='./img/heart.png' />
					<div className='circle'>
						<span>{products.filter(product => product.like === true).length}</span>
					</div>
				</div>
				<div className='header-icon' onClick={() => {
					changeMain('cart')
					search('')
				}}>
					<img src='./img/store.png' />
					<div className='circle'>
						<span>{products.filter(product => product.selected === true).length}</span>
					</div>
				</div>
			</div>
		)
}

export default Icons
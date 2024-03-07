import { useContext } from "react"
import { ForHeaderContext } from "../../Contexts/Contexts"



function SearchForm() {
	const [products,search,searchText,searchFilter, changeMain,toHome,mainState] = useContext(ForHeaderContext)
	
	return (
		<form
			className='search'
			onSubmit={evt => {
				evt.preventDefault()
				if(searchText === '') return
				if(mainState !== 'main') {
					changeMain('main')
					searchFilter()
				} else {
					searchFilter()
				}
			}}
		>
			<input
				onChange={evt => {
					search(evt.target.value)
				}}
				value={searchText}
				type='text'
				placeholder='Search...'
			/>
			<button>
				<img src='./img/search.png' alt='' />
			</button>
		</form>
	)
}

export default SearchForm
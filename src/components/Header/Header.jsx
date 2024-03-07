import { useContext } from 'react'
import './Header.css'
import Icons from './Icons'
import SearchForm from './SearchForm'
import { ForHeaderContext } from '../../Contexts/Contexts'

function Header() {
	const [products, search, searchText, searchFilter, changeMain,toHome,mainState] = useContext(ForHeaderContext)
	return (
		<div className='header'>
			<span className='logo' onClick={() => {
				if(mainState === 'main') {
					toHome()
					search('')
				} else {
					toHome()
					search('')
					changeMain('main')
				}
			}}>Wild-Express</span>
			<SearchForm />
			<Icons />
		</div>
	)
}

export default Header

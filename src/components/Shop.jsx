import { useReducer, useState } from "react"
import React from 'react'
import Header from "./Header/Header"
import Main from "./Main/Main"
import reducerProduct from "../Reducers/Reducers"
import { ForHeaderContext,ForMainContext } from "../Contexts/Contexts"

function Shop() {
	const [mainState,setMainState] = useState('main')
	const [searchText,setSearchText] = useState('')
	const [products, dispatch] = useReducer(reducerProduct, [
		{
			id: Math.random(),
			src: 'https://basket-01.wbbasket.ru/vol137/part13738/13738266/images/c516x688/1.jpg',
			title: 'Носки',
			price: '797 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-03.wbbasket.ru/vol356/part35650/35650072/images/c516x688/1.jpg',
			title: 'Пастилушка ',
			price: '436 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-04.wbbasket.ru/vol533/part53319/53319346/images/c516x688/1.jpg',
			title: 'База под макияж ',
			price: '160 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-03.wbbasket.ru/vol293/part29360/29360157/images/c516x688/1.jpg',
			title: 'Футболка ',
			price: '702 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-01.wbbasket.ru/vol90/part9000/9000213/images/c516x688/1.jpg',
			title: 'Влажные салфетки ',
			price: '390 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-03.wbbasket.ru/vol312/part31299/31299196/images/c516x688/1.jpg',
			title: 'Гель-масло ',
			price: '437 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-04.wbbasket.ru/vol433/part43351/43351166/images/c516x688/1.jpg',
			title: 'Ватные палочки ',
			price: '242 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-12.wbbasket.ru/vol1773/part177358/177358982/images/c516x688/1.jpg',
			title: 'Крем для рук ',
			price: '178 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-02.wbbasket.ru/vol179/part17902/17902726/images/c516x688/1.webp',
			title: 'Чайник ',
			price: '312 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-13.wbbasket.ru/vol2045/part204519/204519575/images/c516x688/1.webp',
			title: 'Видеорегистратор ',
			price: '1120 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-12.wbbasket.ru/vol1806/part180628/180628759/images/c516x688/1.webp',
			title: 'Наушники ',
			price: '1500 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-04.wbbasket.ru/vol442/part44206/44206843/images/c516x688/1.webp',
			title: 'Подгузники ',
			price: '1152 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
		{
			id: Math.random(),
			src: 'https://basket-02.wbbasket.ru/vol277/part27765/27765179/images/c516x688/1.webp',
			title: 'Леггинсы ',
			price: '896 ₽',
			selected: false,
			like: false,
			view: true,
			countOnCart: 0,
		},
	])

	function changeMain(changeOn) {
		setMainState(changeOn)
	}
   
	function search(newText) {
		setSearchText(newText)
	}

	function searchFilter() {
		dispatch({ type: 'searchFilter',payload: searchText})
	}

	function like(id) {
		dispatch({type: 'like', payload: id})
	}

	function select(id) {
		dispatch({ type: 'select', payload: id })
	}

	function addCount(id) {
		dispatch({type: 'addCount', payload: id})
	}

	function minusCount(id) {
		dispatch({type: 'minusCount', payload: id })
	}

	function toHome() {
		dispatch({type: 'toHome'})
	}

	function toOrder() {
		dispatch({type: 'toOrder'})
	}

    return (
			<div>
				<ForHeaderContext.Provider
					value={[products, search, searchText, searchFilter, changeMain,toHome,mainState]}
				>
					<Header />
				</ForHeaderContext.Provider>
				<ForMainContext.Provider
					value={[products, select, like, mainState, addCount, minusCount,toOrder]}
				>
					<Main />
				</ForMainContext.Provider>
			</div>
		)
}

export default Shop


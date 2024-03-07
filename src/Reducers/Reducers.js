
function reducerProduct(products, action) {
	if (action.type === 'searchFilter') {
		return products.map((product) => {
			if(product.title.toLowerCase().includes(action.payload.toLowerCase())) {
				return {
					...product,
					view: true
				}
			} else {
				return {
					...product,
					view: false
				}
			}
		})
	} else if (action.type === 'like') {
		return products.map(product => {
			if (product.id !== action.payload) {
				return product
			} else {
				return {
					...product,
					like: !product.like,
				}
			}
		})
	} else if (action.type === 'select') {
		return products.map(product => {
			if (product.id !== action.payload) {
				return product
			} else {
				if(!product.countOnCart) {
					return {
						...product,
						selected: !product.selected,
						countOnCart: 1,
					} 
				} else {
					return {
						...product,
						selected: !product.selected,
						countOnCart: 0,
					}
				}
			}
		})
	} else if(action.type === 'addCount') {
		return products.map((product) => {
			if(product.id !== action.payload) {
				return product
			} else {
				return {
					...product,
					countOnCart: product.countOnCart + 1
				}
			}
		})
	} else if (action.type === 'minusCount') {
		return products.map(product => {
			if (product.id !== action.payload) {
				return product
			} else {
				if(product.countOnCart >= 2) {
					return {
						...product,
						countOnCart: product.countOnCart - 1,
					}
				} else {
					return {
						...product,
						countOnCart: 1
					}
				}
			}
		})
	} else if(action.type === 'toHome') {
		return products.map((product) => {
			return {
				...product,
				view: true
			}
		})
	} else if(action.type === 'toOrder') {
		return products.map((product) => {
			return {
				...product,
				selected: false,
				countOnCart: 0,
			}
		})
	}
}

export default reducerProduct
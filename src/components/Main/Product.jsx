import BtnSelect from "./BtnSelect"
import BtnLike from "./BtnLike"

function Product({product}) {
    return (
			<div className='product'>
				<img src={`${product.src}`} />
				<div className='product-info'>
					<span className='title'>{product.title}</span>
					<span className='price'>{product.price}</span>
				</div>
				<div className='product-btn'>
					<BtnSelect product={product} />
					<BtnLike product={product} />
				</div>
			</div>
		)
}

export default Product
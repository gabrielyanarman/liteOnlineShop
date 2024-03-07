
import './Cart.css'
import CartBody from './CartBody'
import CartSideBar from './CartSideBar'


function Cart() {
    return (
        <div className='cart'>
            <CartBody />
            <CartSideBar />
        </div>
    )
}

export default Cart
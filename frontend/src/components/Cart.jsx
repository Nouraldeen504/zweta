import { useContext } from 'react'
import { CartContext } from '../context/cart'


export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)
    return (
      <>
        <div className="d-flex flex-column align-items-center bg-light p-5 text-dark">
            <h1 className="display-4 font-weight-bold">Cart</h1>
            <div className="d-flex flex-column">
                {cartItems.map((item) => (
                <div className="d-flex justify-content-between align-items-center mb-4" key={item.id}>
                    <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.name} className="rounded-md mr-3" style={{height: '150px'}} />
                    <div>
                        <h5 className="font-weight-bold">{item.name}</h5>
                        <p className="text-muted">{item.price}</p>
                    </div>
                    </div>
                    <div className="d-flex align-items-center">
                    <button
                        className="btn btn-dark btn-sm mr-2"
                        onClick={() => {
                        addToCart(item)
                        }}
                    >
                        +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                        className="btn btn-dark btn-sm ml-2"
                        onClick={() => {
                        removeFromCart(item)
                        }}
                    >
                        -
                    </button>
                    </div>
                </div>
                ))}
            </div>
            {
                cartItems.length > 0 ? (
                <div className="d-flex flex-column align-items-center mt-4">
                    <h5 className="font-weight-bold">Total: ${getCartTotal()}</h5>
                    <button
                    className="btn btn-dark btn-sm mt-2"
                    onClick={() => {
                        clearCart()
                    }}
                    >
                    Clear cart
                    </button>
                </div>
                ) : (
                <h5 className="font-weight-bold mt-4">Your cart is empty</h5>
                )
            }
        </div>
      </>
    )
  }
import React from 'react'
import { AiFillDelete } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'


function Cart() {
    const { cartItems,subTotal,tax,Shipping,total } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const decrement = (id) => {
        dispatch({
            type:"decrement",
            payload:id
        })
        dispatch({type:"calculations"})
    }
    const increment = (id) => {
        dispatch({ 
            type:"addToCart",
            payload:{id}
        })
        dispatch({type:"calculations"})
    }
    const deleteItem = (id) => {
        dispatch({
            type:"deleteItem",
            payload:id
        })
        dispatch({type:"calculations"})
    }
    return (
        <div className='cart'>
            <main>
                {
                    cartItems.length > 0 ? (

                        cartItems.map(i => (
                            <CartItem imgSrc={i.imgSrc}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                id={i.id}
                                dec={decrement}
                                inc={increment}
                                deleteHandler={deleteItem}
                            />
                        ))
                    ): <h1>No items yet</h1>
                }
            </main>
            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${Shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>
        </div>
    )
}

const CartItem = ({ imgSrc, name, price, qty, dec, inc, deleteHandler, id }) => (
    <div className="cartItem">
        <img src={imgSrc} alt={name} />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div>
            <button onClick={() => dec(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => inc(id)}>+</button>
        </div>
        <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
)

export default Cart
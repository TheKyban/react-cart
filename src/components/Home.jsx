import React from 'react'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'

function Home() {
    const productList = [
        { name: "Mac Book", price: "1200", imgSrc: "https://www.freepnglogos.com/uploads/macbook-png/macbook-the-church-apple-your-source-for-apple-news-and-33.png", id: "sfjsffsdfsfsfsjsfj" },
        { name: "Mac Book pro", price: "1200", imgSrc: "https://www.freepnglogos.com/uploads/macbook-png/macbook-cleanmymac-the-best-mac-cleanup-app-for-macos-get-32.png", id: "sfjsfsdfsfasfsfsfssffjsfj" }
    ]

    const dispatch = useDispatch()

    const addToCart = (options) => {
        console.log(options)
        dispatch({type:"addToCart",payload:options})
        toast.success("add to cart")
        dispatch({type:"calculations"})
    }
    return (
        <div className="home">
            {
                productList.map((i) => (
                    <ProductCard name={i.name} handler={addToCart} price={i.price} key={i.id} id={i.id} imgSrc={i.imgSrc} />
                ))
            }
        </div>
    )
}

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
    return (

        <div className="productcard">
            <img src={imgSrc} alt={name} />
            <p>{name}</p>
            <h4>${price}</h4>
            <button onClick={() => handler({name, price, quantity:1 , id,imgSrc})}>Add to Cart</button>
        </div>
    )
}

export default Home
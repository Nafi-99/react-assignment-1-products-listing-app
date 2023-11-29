/* eslint-disable react/prop-types */
const Products = (props) => {
    const { title, price, description, category, image, rate } = props
    return <section class="products">
        <article className="product">
            <img src={image} alt="" />
            <div className="product__details">
                <h4 className="product__title">{title}</h4>
                <p>Price: ${price}</p>
                <p>Rating: {rate}/5</p>  
                <p className="product__desc">Description: {description}</p> 
                <button className="product__btn btn">Add to cart</button>
            </div>
        </article>
    </section>
}
export default Products;
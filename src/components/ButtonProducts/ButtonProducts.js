import "./ButtonProducts.css";

const ButtonProducts = ({children}) => {
    return (
        <section className="card-product">
            <h1 className="name-product">{children.name}</h1>
            <p className="price-product">R$ {children.price}</p>
        </section>
    )
}

export default ButtonProducts;
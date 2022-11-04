import "./buttonProducts.css";

const ButtonProducts = ({children}) => {
    return (
        <section className="card-product">
            <div className="title-product">
                <img className="img-product" src={children.image}></img>
                <p className="name-product">{children.name}</p>
            </div>
            <h1 className="price-product">R$ {children.price}</h1>
        </section>
    )
}

export default ButtonProducts;
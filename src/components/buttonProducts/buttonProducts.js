const ButtonProducts = ({children}) => {
    return (
        <>
            <h1>{children.name}</h1>
            <h1>{children.price}</h1>
        </>
    )
}

export default ButtonProducts;
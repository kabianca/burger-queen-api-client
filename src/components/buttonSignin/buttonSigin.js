import "./buttonSigin.css";

const ButtonSignin = ( {children, onClick} ) => {
    return (
        <button type="button" className="btn-signin" onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonSignin;
import "./SelectMenu.css";

const SelectMenu = ( {children, onClick} ) => {
    return (
        <button type="button" className="btn-select-menu" onClick={onClick}>
            {children}
        </button>
    )
}

export default SelectMenu;
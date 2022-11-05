import "./InputForm.css";

const ImputForm = ( props ) => {
    return (
        <input className="input-form" type={props.type} placeholder={props.placeholder} onChange={props.onChange}></input>
    )
}

export default ImputForm;
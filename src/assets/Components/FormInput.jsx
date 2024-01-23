const FormInput = ({label, name, type, defaultValue, size, divClass}) => {
  return (
    <div className={`form-control ${divClass}`}>
        <label htmlFor={name} className="label">
            <span className="label-text capitalize" >{label} </span>
        </label>
        <input type={type} name={name} defaultValue={defaultValue} className={`input input-bordered ${size} input-sm max-w-xl `}/>
    </div>
  )
}
export default FormInput
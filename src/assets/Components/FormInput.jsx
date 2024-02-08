const FormInput = ({label, name, type, defaultValue}) => {
  return (
    <div className={`form-control `}>
        <label htmlFor={name} className="label">
            <span className="label-text capitalize text-7xl font-bold text-[#ffffff] tracking-tighter border-b" >{label} </span>
        </label>
        <input type={type} name={name} defaultValue={defaultValue} className={`input input-bordered rounded-r-none input-sm md:w-72 w-56 `}/>
    </div>
  )
}
export default FormInput
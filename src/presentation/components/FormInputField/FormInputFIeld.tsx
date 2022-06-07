import { ChangeEventHandler } from "react"
import { UseFormRegister } from "react-hook-form"

interface FormInputFieldParams {
    label: string,
    name: string,
    type: string,
    id: string,
    requiredText: string,
    formRegister: UseFormRegister<any>
}

export const FormInputField = ({label, name, type, id, requiredText, formRegister}: FormInputFieldParams) => {
    return <div className='form-field'>
        <label className='form-input__label' htmlFor={name}> {label} </label>
        <input
            className='form-input__input'
            {...formRegister(name, { required: requiredText })}
            type={type} 
            name={name}
            id={id} />
    </div>
}

import { useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

export const useCustomForm = <TFieldValues extends FieldValues>(formSubmitHandler: SubmitHandler<TFieldValues>) => {
    const [passwordFieldType, setPasswordFieldType] = useState(true)

    const {register, handleSubmit, formState: { errors }} = useForm<TFieldValues>()
    const submitHandler = handleSubmit(formSubmitHandler)

    const togglePasswordVisibility = () => {
        setPasswordFieldType(!passwordFieldType)
    }

    return {
        errors,
        passwordFieldType,
        register,
        submitHandler,
        togglePasswordVisibility
    }
}
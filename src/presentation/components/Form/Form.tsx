import {  SubmitHandler } from "react-hook-form"

interface FormParams {
    submitButtonValue: string,
    submitHandler: SubmitHandler<any>
    children?: React.ReactNode
}

export const Form = ({submitButtonValue, submitHandler, children}: FormParams) => {
    return <form onSubmit={submitHandler} className='form'>
        {children}

        <input className='form__submit-button' type='submit' value={submitButtonValue} />
    </form>
}
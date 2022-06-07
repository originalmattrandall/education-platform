import './LoginForm.scss'

import { SubmitHandler } from 'react-hook-form'
import { FormInputField } from '../FormInputField/FormInputFIeld'
import { Form } from '../Form/Form'
import { useCustomForm } from '../../../application/hooks/CustomForm'

interface LoginFormParams {
    onSubmit: SubmitHandler<LoginFormElements>,
    header?: React.ReactNode
}

export type LoginFormElements = {
    nameInput: string,
    passwordInput: string
}

export const LoginForm = ({onSubmit, header}: LoginFormParams) => {

    const {
        errors: formErrors, 
        passwordFieldType, 
        register, 
        submitHandler, 
        togglePasswordVisibility
    } = useCustomForm<LoginFormElements>(onSubmit)

    return <div className='login-form'>

        {displayHeader(header)}

        <Form 
            submitHandler={submitHandler} submitButtonValue={'Sign In'} >
            <FormInputField 
                requiredText='Please Enter a username'
                formRegister={register}
                label={'Name'} 
                name={'nameInput'} 
                type={'text'} 
                id={'nameInput'} />

            <FormInputField 
                requiredText='Please Enter a password'
                formRegister={register}
                label={'Password'} 
                name={'passwordInput'} 
                type={passwordFieldType ? 'password' : 'text'}
                id={'passwordInput'} />

            <div className='login-form__input-container'>
                <label htmlFor='passwordVisibilityToggle'>
                <input onChange={togglePasswordVisibility} type='checkbox' name='passwordVisibilityToggle' id='passwordVisibilityToggle'/>
                    Show Password
                </label>
            </div>
        </Form>

        {formErrors.nameInput && <div className='login-form__field-error'>{formErrors.nameInput.message}</div>}
        {formErrors.passwordInput && <div className='login-form__field-error'>{formErrors.passwordInput.message}</div>}

    </div>
}

const displayHeader = (header: React.ReactNode) => {
    if(!header) return

    return <div className='login-form__heading'>
            {header}
        </div>
}
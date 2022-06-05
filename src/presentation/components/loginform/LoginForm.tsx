import './LoginForm.scss'

import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface LoginFormParams {
    onSubmit: SubmitHandler<LoginFormElements>,
    children?: React.ReactNode
}

export type LoginFormElements = {
    nameInput: string,
    passwordInput: string
}

export const LoginForm = ({onSubmit, children}: LoginFormParams) => {

    const [passwordFieldType, setPasswordFieldType] = useState(true)

    const {register, handleSubmit, formState: { errors }} = useForm<LoginFormElements>()
    const submitHandler = handleSubmit(onSubmit)

    const togglePasswordVisibility = () => {
        setPasswordFieldType(!passwordFieldType)
    }

    return <div className='login-container'>

        {displayHeader(children)}
        
        <form className='login-form' onSubmit={submitHandler}>
            <div className='login-form__input-container'>
                <label htmlFor='name'>
                    UserName
                </label>
                <input 
                    {...register('nameInput', { required: 'Please enter a username' })}
                    type='text' name='nameInput' id='nameInput'/>
                {errors.nameInput && <div className='login-form__field-error'>{errors.nameInput.message}</div>}
            </div>

            <div className='login-form__input-container'>
                <label htmlFor='passwordInput'>
                    Password
                </label>
                <input 
                    {...register('passwordInput', { required: 'Please enter a password' })}
                    type={passwordFieldType ? 'password' : 'text'} name='passwordInput' id='passwordInput'/>
                {errors.passwordInput && <div className='login-form__field-error'>{errors.passwordInput.message}</div>}
            </div>

            <div className='login-form__input-container'>
                <label htmlFor='passwordVisibilityToggle'>
                <input onChange={togglePasswordVisibility} type='checkbox' name='passwordVisibilityToggle' id='passwordVisibilityToggle'/>
                    Show Password
                </label>
            </div>

            <input className='login-form__submit-button' type='submit' value='Sign In' />
        </form>
    </div>
}

const displayHeader = (children: React.ReactNode) => {
    if(!children) return

    return <div className='login-heading'>
            {children}
        </div>
}
import {FormEventHandler, useState } from 'react'
import './LoginForm.scss'

interface LoginFormParams {
    onSubmit: FormEventHandler<HTMLFormElement>
}

export const LoginForm = ({onSubmit}: LoginFormParams) => {

    const [passwordFieldType, setPasswordFieldType] = useState(true)

    const togglePasswordVisibility = () => {
        setPasswordFieldType(!passwordFieldType)
    }

    return <div className='login-form'>
        <form onSubmit={onSubmit}>
            <label>
                UserName:
                <input type='text' name='name' />
            </label>
            <label>
                Password:
                <input type={passwordFieldType ? 'password' : 'text'} name='password'/>
            </label>
            <label>
                Show Password
                <input onChange={togglePasswordVisibility} type='checkbox' name='name' />
            </label>
            <input type='submit' value='Submit' />
        </form>
    </div>
}
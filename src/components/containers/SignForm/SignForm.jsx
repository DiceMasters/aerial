import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Input } from 'antd'
import './style.scss'

import { login, register } from '../../../store/async/userActions'

const SignForm = (props) => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [loading, setLoading] = useState(false)

  const submitText = props.type === '/login' ? 'Логин' : 'Зарегистрироваться'
  const dispatch = useDispatch()

  const submit = async (event) => {
    event.preventDefault()

    setLoading(true)

    try {
      let result

      if (props.type === '/login') {
        result = await dispatch(login(email, password))
      } else if (props.type === '/registration') {
        result = await dispatch(register(email, password))
      }

      console.log(result)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="c-login-form"
          onSubmit={(e) => submit(e)}>
      <div className="c-sign-form__input">
        <Input placeholder="Email"
               value={email}
               disabled={loading}
               onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div className="c-sign-form__input">
        <Input.Password placeholder="Пароль"
                        value={password}
                        disabled={loading}
                        onChange={(e) => setPassword(e.target.value)}/>
      </div>

      <div className="c-sign-form__submit">
        <Button type="primary"
                htmlType="submit"
                loading={loading}
                block>
          {submitText}
        </Button>
      </div>
    </form>
  )
}

export default SignForm
